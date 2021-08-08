import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { mount, configure } from 'enzyme'
import { PromiseCompletionSource } from 'promise-completion-source'
import Adapter from 'enzyme-adapter-react-16'

import { useScript, ScriptProps } from './use-script'
import { setTestLoadMode, ErrorState, loadScript } from './utils'

configure({ adapter: new Adapter() })

function renderTestComponent(
    deps: ScriptProps[],
    rendered: (loading: boolean, error: ErrorState) => void,
) {
    const TestComponent: React.FC = () => {
        const { loading, error } = useScript(...deps)

        rendered(loading, error)
        return <div />
    }

    const result = mount(<TestComponent />)

    const testComponent = result.find(TestComponent)
    return testComponent
}

describe('Test this module', () => {
    it('Load external script after component mounted', async () => {
        const complete = new PromiseCompletionSource<void>()
        setTestLoadMode(() => complete.promise)
        const deps: ScriptProps[] = [
            { src: '//cdn.bootcss.com/jquery/2.2.1/jquery.min.js' },
        ]

        let currentLoading: boolean | undefined = undefined
        let currentError: ErrorEvent | null = null
        renderTestComponent(deps, (loading, error) => {
            currentLoading = loading
            currentError = error
        })

        // check script tags
        deps.forEach(testScript => {
            const tag = document.querySelector(`script[src='${testScript}']`)
            expect(tag).toBeDefined()
        })

        // check component props before loading
        expect(currentLoading).toBe(true)
        expect(currentError).toBe(null)

        await ReactTestUtils.act(async () => {
            // Let event loop process
            complete.resolve()
            await new Promise(resolve => setTimeout(resolve))
        })

        expect(currentLoading).toBe(false)
        expect(currentError).toBe(null)
    })

    it('No redundant script tag will be appended', async () => {
        const complete = new PromiseCompletionSource<void>()
        setTestLoadMode(() => complete.promise)
        const deps: ScriptProps[] = [
            { src: '//cdn.bootcss.com/jquery/2.2.2/jquery.min.js' },
        ]

        let currentLoading1: boolean | undefined = undefined
        let currentError1: ErrorEvent | null = null
        renderTestComponent(deps, (loading, error) => {
            currentLoading1 = loading
            currentError1 = error
        })

        let currentLoading2: boolean | undefined = undefined
        let currentError2: ErrorEvent | null = null
        renderTestComponent(deps, (loading, error) => {
            currentLoading2 = loading
            currentError2 = error
        })

        // check script tags
        deps.forEach(testScript => {
            const tags = document.querySelectorAll(
                `script[src='${testScript.src}']`,
            )
            expect(tags.length).toEqual(1)
        })

        expect(currentLoading1).toBe(true)
        expect(currentError1).toBe(null)
        expect(currentLoading2).toBe(true)
        expect(currentError2).toBe(null)

        await ReactTestUtils.act(async () => {
            // Let event loop process
            complete.resolve()
            await new Promise(resolve => setTimeout(resolve))
        })

        expect(currentLoading1).toBe(false)
        expect(currentError1).toBe(null)
        expect(currentLoading2).toBe(false)
        expect(currentError2).toBe(null)
    })

    it('Initial state is not loading when script already exists', async () => {
        setTestLoadMode(() => Promise.resolve())
        await loadScript({
            src: '//cdn.bootcss.com/jquery/2.2.3/jquery.min.js',
        })
        const deps: ScriptProps[] = [
            { src: '//cdn.bootcss.com/jquery/2.2.3/jquery.min.js' },
        ]

        let currentLoading: boolean | undefined = undefined
        let currentError: ErrorEvent | null = null
        renderTestComponent(deps, (loading, error) => {
            currentLoading = loading
            currentError = error
        })

        expect(currentLoading).toBe(false)
        expect(currentError).toBe(null)
    })
})

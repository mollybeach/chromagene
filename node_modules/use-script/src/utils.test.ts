import { loadScript, setTestLoadMode } from './utils'

describe('Test util functions', () => {
    it('Appends script tag', async () => {
        setTestLoadMode(() => Promise.resolve())
        const testScript = '//cdn.bootcss.com/jquery/2.2.1/jquery.min.js'
        const result = await loadScript({ src: testScript })

        const tag = document.querySelector(`script[src='${testScript}']`)

        // assert
        expect(result.success).toBe(true)
        expect(result.script).toEqual(testScript)
        expect(tag).toBeDefined()
        expect(tag).toEqual(result.element)
    })
})

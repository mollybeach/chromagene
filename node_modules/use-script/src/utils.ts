import { ScriptProps } from './use-script'

let testLoadFn: undefined | (() => Promise<void>)

export type ErrorState = ErrorEvent | null

export const setTestLoadMode = (load: () => Promise<void>) => {
    if (process.env.NODE_ENV !== 'production') {
        testLoadFn = load
    }
}

export function loadScript({
    src,
    ...attr
}: ScriptProps): Promise<ScriptLoadResult> {
    if (process.env.NODE_ENV !== 'production' && testLoadFn) {
        const script = document.createElement('script')
        script.src = src
        Object.keys(attr).forEach(key => ((script as any)[key] = attr[key]))
        document.body.appendChild(script)
        return testLoadFn()
            .then<ScriptLoadResult>(() => ({
                success: true,
                element: script,
                script: src,
                error: null,
            }))
            .catch<ScriptLoadResult>(() => ({
                success: false,
                element: script,
                script: src,
                error: new ErrorEvent('test'),
            }))
    }

    return new Promise<ScriptLoadResult>(resolve => {
        const script = document.createElement('script')
        script.src = src
        Object.keys(attr).forEach(key => ((script as any)[key] = attr[key]))
        script.addEventListener('load', () =>
            resolve({
                element: script,
                script: src,
                success: true,
                error: null,
            }),
        )
        script.addEventListener('error', e =>
            resolve({
                element: script,
                script: src,
                success: false,
                error: e,
            }),
        )
        document.body.appendChild(script)
    })
}

export function getScriptTag(script: string) {
    if (typeof document === 'undefined') {
        return
    }

    return document.querySelector(
        `script[src='${script}']`,
    ) as HTMLScriptElement
}

export function removeFailedScript(script: string) {
    const node = document.querySelector(`script[src='${script}']`)

    if (node && node.parentNode) {
        node.parentNode.removeChild(node)
    }
}

export interface LoadResult {
    skipped: number
    succeeded: string[]
    failed: string[]
}
export interface ScriptLoadResult {
    element: HTMLScriptElement | undefined
    script: string
    success: boolean
    error: ErrorState
}

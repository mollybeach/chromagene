import { useState, useEffect } from 'react'
import useIsMounted from 'react-is-mounted-hook'
import { loadScript, ErrorState, ScriptLoadResult, getScriptTag } from './utils'

export interface ScriptProps {
    src: HTMLScriptElement['src']
    [key: string]: any
}

const pendingScripts: { [script: string]: Promise<ScriptLoadResult> } = {}

export function useScript(
    ...scripts: ScriptProps[]
): { loading: boolean; error: ErrorState } {
    const isMounted = useIsMounted()
    const [loading, setLoading] = useState(() => {
        for (const script of scripts) {
            // Found a pending script, set initial state to true
            if (pendingScripts[script.src]) {
                return true
            }

            // Script doesn't exist in dom, set initial state to true
            if (!getScriptTag(script.src)) {
                return true
            }
        }

        return false
    })

    const [error, setError] = useState<ErrorState>(null)

    useEffect(() => {
        async function loadScripts() {
            for (const script of scripts) {
                const result = await loadNewScript(script)
                if (!isMounted()) {
                    return
                }
                if (!result.success) {
                    setError(result.error)
                    return
                }
            }

            setLoading(false)
        }

        // No await here intentionally because hooks cannot be async functions
        loadScripts()
    }, [scripts, isMounted])

    return { loading, error }
}

function loadNewScript(scriptProps: ScriptProps): Promise<ScriptLoadResult> {
    const runningPromise = pendingScripts[scriptProps.src]

    if (runningPromise) {
        return runningPromise
    }

    const script = getScriptTag(scriptProps.src)

    if (script) {
        const result: ScriptLoadResult = {
            element: script,
            script: script.src,
            success: true,
            error: null,
        }

        return Promise.resolve(result)
    }

    pendingScripts[scriptProps.src] = loadScript(scriptProps).then(result => {
        delete pendingScripts[scriptProps.src]

        return result
    })

    return pendingScripts[scriptProps.src]
}

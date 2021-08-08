# useScript

Loads a third party script and returns a value when it's loaded or fails to load.

There are a few hooks out there but they do not handle concurrency or rendering multiple components which require the same script at the same time.

## Example

```ts
import { useScript } from 'use-script'

const MyComponent = () => {
    const { loading, error } = useScript({
        src: '//cdn.bootcss.com/jquery/2.2.1/jquery.min.js',
    })

    if (loading || error) {
        return null
    }

    return <OtherComponentWhichNeedsJQuery />
}
```

## Testing

JSDom based tests can't load scripts, so you can use `setTestLoadMode` to control when the script loads.

```ts
import { setTestLoadMode } from 'use-script'

// Resolve any loaded scripts immediately
setTestLoadMode(() => Promise.resolve())
```

You will need to make sure you polyfill any globals that script would create if they are relied on by your tests

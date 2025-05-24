import React from 'react'
import { useState } from 'react'

function Counter() {

    let [count, setCount] = useState(1)
    return (
        <>
            <p> Button clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>count</button>
        </>
    )
}

export default Counter
import React, { useState } from 'react';

function ButtonCounter() {
    const [count, setCount] = useState(0); // Starting from 0
    return (
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default ButtonCounter;
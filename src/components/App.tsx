import React, { useState } from 'react';

export const App = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            Hello world!
            <button onClick={() => setCounter(prev => prev + 1)}>Add</button>
            {counter}
        </div>
    );
};
import { useState } from 'react';
import './App.scss'

export const App = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className='App'>
            Hello world!
            <button onClick={() => setCounter(prev => prev + 1)}>Add</button>
            {counter}
        </div>
    );
};
import { useState } from 'react';
import styles from './App.module.scss';
import Duck from '../assets/img/duck.svg'

export const App = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={styles.App}>
            <button onClick={() => setCounter(prev => prev + 1)}>Add</button>
             Go count: {counter}
             <img src={Duck} alt="" />
        </div>
    );
};
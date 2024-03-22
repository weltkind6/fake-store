import { useState } from 'react';
import styles from './App.module.scss';
import Duck from '../assets/img/duck.svg'
import { Outlet } from 'react-router-dom';

export const App = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={styles.App}>
            <button onClick={() => setCounter(prev => prev + 1)}>Add</button>
             Go count: {counter}
             <img 
             src={Duck} 
             alt="duck" 
             style={{width: '300px', height: '300px'}}
             />
             <Outlet />
        </div>
    );
};
import { useState } from 'react';
import { Shop } from './pages/Shop';
import Star from '@/assets/img/star.svg'
import Duck from '@/assets/img/duck.svg'
import styles from './App.module.scss';

export const App = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={styles.App}>
            <button onClick={() => setCounter(prev => prev + 1)}>Add</button>
             Go count: {counter}
             <Star width='300'/>
             <Duck width='300'/>
             <Shop />
        </div>
    );
};
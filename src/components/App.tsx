import { useState } from 'react';
import { Shop } from './pages/Shop';
import Star from '@/assets/img/star.svg'
import Duck from '@/assets/img/duck.svg'
import styles from './App.module.scss';
import Card, { CardVariant } from './Card/Card';

export const App = () => {
    
    return (
        <div className={styles.App}>
            <h1>Fake store</h1>
        </div>
    );
};
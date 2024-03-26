import React from 'react';
import styles from './styles.module.scss'

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    children: React.ReactNode,
    variant?: CardVariant,
    onClick?: () => void
}

const changeColorHandler = () => {
  
}

const Card = (props: CardProps) => {
    const {children, variant, onClick} = props
    return (
        <div
        className={styles.wrapper}
        style={{border: variant === CardVariant.outlined ? '2px solid black' : ''}}
        onClick={changeColorHandler}
        >
            {children}
        </div>
    );
};

export default Card;
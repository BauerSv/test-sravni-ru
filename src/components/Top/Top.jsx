import React from 'react';
import s from './Top.module.css';
import Header from './Header/Header';
import Filters from './Filters/Filters';

const Top = (props) => {
    return (
        <div className={s.top}>
            <div className={s.calculatorContainer}>
                <Header/>
                <Filters/>
            </div>
        </div>
    )
}

export default Top;

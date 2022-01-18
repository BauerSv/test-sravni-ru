import React from 'react';
import s from './Filters.modules.css';

const Filters = (props) => {
    return(
<div className={s.filters}>
    <div className={s.rowCalculate}>
        <div className={s.filter}>
            <select>
                <option>Любая</option>
                <option>Рефинансирование</option>
                <option>Квартира в новостройке</option>
                <option>Квартира на вторичном рынке</option>
                <option>Апартаменты в новостройке</option>
                <option>Апартаменты на вторичном рынке</option>
                <option>Загородный дом/Участок</option>
                <option>Доля в квартире на вторичном рынке</option>
                <option>Машиноместо/Гараж</option>
            </select>
        </div>
        <div className={s.filter}></div>
        <div className={s.filter}></div>
        <div className={s.filter}></div>
        <div className={s.filter}></div>
        <div className={s.filter}></div>
    </div>
</div>
    )
}
        export default Filters;

import React from 'react';
import s from './Header.modules.css';

const Header = (props) => {
    return(
<div className={s.header}>
    <div className={s.headerLocation}>
        <h1>Ипотечный калькулятор</h1>
        <span className={s.region}>в Москве</span>
    </div>
</div>
    )
}

export default Header;

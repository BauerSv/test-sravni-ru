import React from 'react';
import s from './Header.modules.css';

const Header = (props) => {
    return(
<div className="header">
    <div className="headerLocation">
        <h1>Ипотечный калькулятор</h1>
        <span className="region">в Москве</span>
    </div>
</div>
    )
}

export default Header;

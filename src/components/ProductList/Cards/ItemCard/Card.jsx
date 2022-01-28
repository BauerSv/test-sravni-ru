import React from 'react';
import s from './../Cards.module.css';
import {NavLink} from "react-router-dom";

const Card = (props) => {
    return <div className={s.row}>
        <div className={s.column}>
            <img src={props.logo}/>
        </div>
        <div className={s.column}>
            <div className={s.percent}>
                <span>{props.rateFrom}%</span>
            </div>
            <div className={s.subtitle}>{props.name}</div>
        </div>
        <div className={s.column}>
            <div className={s.sum}>{props.sumFrom} {props.sumTo} </div>
            <div>{props.initialAmount}</div>
        </div>
        <div className={s.column}>
            <div>{props.age}</div>
            <div>{props.lastExperience}</div>
            <div>{props.documents}</div>
        </div>
        <div className={s.column}>
            <div>{props.license}</div>
            <div>
                <button>
                    <NavLink to='/ipoteka/card/' сlassName={stateLink => stateLink.isActive ? s.activeLink : ''}>ПЕРЕЙТИ НА САЙТ</NavLink>
                </button>
            </div>
            <div>Развернуть условия</div>
        </div>
    </div>
}

export default Card;

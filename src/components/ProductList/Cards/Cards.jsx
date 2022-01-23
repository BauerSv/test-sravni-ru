import React from 'react';
import s from './Cards.module.css';
import {Link, NavLink} from "react-router-dom";
import Data from '../../../Data';

const dataCards = Data.data;
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
            <div className={s.sum}>{props.sumFrom} ₽ - {props.sumTo} ₽</div>
            <div>На срок до 30 лет</div>
        </div>
        <div className={s.column}>
            <div>Возраст от 21 года</div>
            <div>Стаж от 3 месяцев</div>
            <div>5 документов</div>
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

// function RepliList() {
//     const repl = dataCards;
//     return (
//         <div>
//             {repl.map(item => (
//                 <div key={name} className={s.row}>{item}</div>
//                 ))}
//         </div>
//     );
// }

const itemCards =
    dataCards.map( item => {
        return <Card name = {item.name} license={item.organization.license}
                     sumFrom={item.rate.creditAmount.from}
                     sumTo={item.rate.creditAmount.to}
                     rateFrom={item.rate.periods[0].rate.from}
                     logo={item.organization.logo}
        />
        // <Card license = {item.organization.license}/>]
        // <Card sumFrom = {item.rate.currency.from}/>
        // <Card sumTo = {item.rate.currency.to}/>
    });

const ItemCards = (props) => {
    return <div className={s.row}>
        <div className={s.column}>
            <img src="https://s91588.cdn.ngenix.net/organizations/logotypes/5bb4f767245bc22a520a609b.svg"/>
        </div>
        <div className={s.column}>
            <div className={s.percent}>
                <span>5,3%</span>
            </div>
            {itemCards}
        </div>
        <div className={s.column}>
            <div className={s.sum}>300 000 ₽ - 12 000 000 ₽</div>
            <div>На срок до 30 лет</div>
        </div>
        <div className={s.column}>
            <div>Возраст от 21 года</div>
            <div>Стаж от 3 месяцев</div>
            <div>5 документов</div>
        </div>
        <div className={s.column}>
            <div>лиц. № 1481</div>
            <div>
                <button>
                    <NavLink to='/ipoteka/card/' сlassName={stateLink => stateLink.isActive ? s.activeLink : ''}>ПЕРЕЙТИ НА САЙТ</NavLink>
                </button>
            </div>
            <div>Развернуть условия</div>
        </div>
    </div>
}

const Cards = (props) => {
    return <div className={s.cards}>
        <div className={s.cardsWrapper}>
            {itemCards}
        </div>
    </div>
}

export default Cards;

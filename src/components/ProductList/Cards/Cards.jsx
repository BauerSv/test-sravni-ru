import React from 'react';
import s from './Cards.module.css';
import Card from "./ItemCard/Card";
import Data from "../../../Data";

const dataCards = Data.data;

const itemCards =
    dataCards.map( item => {
        return <Card name = {item.name} license={item.organization.license}
                     sumFrom={item.rate.creditAmount.from}
                     sumTo={item.rate.creditAmount.to}
                     rateFrom={item.rate.periods[0].rate.from}
                     logo={item.organization.logo}
                     initialAmount={(item.rate.initialAmount.to ? `${'На срок до'} ${item.rate.initialAmount.to} ${'лет'}` : 'Любой срок')}
        />
    });

const Cards = (props) => {
    return <div className={s.cards}>
        <div className={s.cardsWrapper}>
            {itemCards}
        </div>
    </div>
}

export default Cards;

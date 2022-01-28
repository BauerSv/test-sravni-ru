import React from 'react';
import s from './Cards.module.css';
import Card from "./ItemCard/Card";

const Cards  = (props) => {
    let itemCards = props.data.map(item => {
        return <Card name={item.name} license={item.organization.license}
                     sumFrom={`${item.rate.creditAmount.from} ${'₽'}`}
                     sumTo={(item.rate.creditAmount.to ? `${'-'} ${item.rate.creditAmount.to} ${'₽'}` : '')}
                     rateFrom={item.rate.periods[0].rate.from}
                     logo={item.organization.logo}
                     initialAmount={(item.rate.initialAmount.to ? `${'На срок до'} ${item.rate.initialAmount.to} ${'лет'}` : 'Любой срок')}
                     age={(item.customerRequirements.age ? `${'Возраст от'} ${item.customerRequirements.age} ${'года'}` : '')}
                     lastExperience={(item.customerRequirements.lastExperience ? `${'Стаж от'} ${item.customerRequirements.lastExperience} ${'месяцев'}` : '')}
                     documents={(item.customerRequirements.documents ? `${item.customerRequirements.documents} ${'документа'}` : '')}
        />
    });
    return (
        <div className={s.cards}>
            <div className={s.cardsWrapper}>
                {itemCards}
            </div>
        </div>
    )
}

export default Cards;

import React from 'react';
import s from './Cards.module.css';

const Cards = (props) => {
    return <div className={s.cards}>
            <div className={s.cardsWrapper}>
                <div className={s.row}>
                    <div className={s.column}>
                        <img src="https://s91588.cdn.ngenix.net/organizations/logotypes/5bb4f767245bc22a520a609b.svg"/>
                    </div>
                    <div className={s.column}>
                        <div className={s.percent}>
                            <span>5,3%</span>
                        </div>
                        <div className={s.subtitle}>"Для семей с детьми"</div>
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
                            <button>ПЕРЕЙТИ НА САЙТ</button>
                        </div>
                        <div>Развернуть условия</div>
                    </div>
                </div>
            </div>
      </div>
}

export default Cards;

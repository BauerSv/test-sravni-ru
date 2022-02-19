import React from "react";
import s from './Sort.module.css';

const Sort = (props) => {
    return (
        <div className={s.sort}>
            <div>Сортировать:</div>
            <div className={s.sortElements}>
                <div onClick={props.isSortOn}>по ставке</div>
                <div onClick={props.isSortOnSum}>по сумме</div>
            </div>
        </div>
    )
}

export default Sort;

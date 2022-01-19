import React from "react";
import s from './Sort.module.css';

const Sort = (props) => {
    return (
        <div className={s.sort}>
            <div>Сортировать:</div>
            <div className={s.sortElements}>
                <div>по ставке</div>
                <div>по сумме</div>
            </div>
        </div>
    )
}

export default Sort;

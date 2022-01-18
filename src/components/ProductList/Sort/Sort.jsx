import React from "react";
import s from './Sort.modules.css';

const Sort = (props) => {
    return (
        <div className="sort">
            <div>Сортировать:</div>
            <div className="sortElements">
                <div>по ставке</div>
                <div>по сумме</div>
            </div>
        </div>
    )
}

export default Sort;

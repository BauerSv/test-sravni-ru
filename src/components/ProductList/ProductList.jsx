import React from 'react';
import s from './ProductList.module.css';
import Sort from './Sort/Sort';
import Cards from './Cards/Cards';

const ProductList = (props) => {
    return (
        <div className={s.productList}>
            <div className={s.wrapper}>
                <Sort isSortOn={props.isSortOn} isSortOnSum={props.isSortOnSum} />
                <Cards data={props.data} sortRate={props.sortRate} sortSum={props.sortSum} />
            </div>
        </div>
    )
}

export default ProductList;

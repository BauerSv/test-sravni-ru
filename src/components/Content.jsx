import React from 'react';
import s from './Content.module.css';
import Top from './Top/Top';
import ProductList from "./ProductList/ProductList";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Top/>
            <ProductList data={props.data}/>
        </div>
    )
}

export default Content;

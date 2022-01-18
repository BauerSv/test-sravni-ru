import React from 'react';
import s from './Content.modules.css';
import Top from './Top/Top';

const Content = (props) => {
    return(
        <div className={s.content}>
            <Top/>
        </div>
    )
}

export default Content;

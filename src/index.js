import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './components/Content'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductCards from './components/productCards/ProductCards';
import Data from './Data';

const dataCards = Data.data;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/ipoteka" element={<Content data={dataCards}/>} />
                <Route path='/ipoteka/card/' element={<ProductCards />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import logo from './logo.svg';
// import './App.css';
import Content from "./components/Content";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductCards from "./components/productCards/ProductCards";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
                <Content/>
            <Routes>
                <Route path='/ipoteka/card/' component={ProductCards}/>
            </Routes>
        </div>
        </BrowserRouter>);
}

export default App;

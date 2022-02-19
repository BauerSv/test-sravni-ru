import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './components/Content'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductCards from './components/productCards/ProductCards';
import Data from './Data';
import store from './redux/redux-store';

class MainClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSortRate: false,
            isSortSum: false,
            dataCards: Data.data
        };
    }

    handleClickSort = () => {
        this.setState({ isSortRate: !this.state.isSortRate })
    }

    handleClickSortSum = () => {
        this.setState({ isSortSum: !this.state.isSortSum })
    }

    render() {
        console.log(this.state.isSortRate, this.state.isSortSum);

        return (
            <React.StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route path="/ipoteka"
                               element={<Content data={this.state.dataCards} isSortOn={this.handleClickSort}
                                                 isSortOnSum={this.handleClickSortSum} sortRate={this.state.isSortRate} sortSum={this.state.isSortSum}/>} />
                        <Route path='/ipoteka/card/' element={<ProductCards />}/>
                    </Routes>
                </BrowserRouter>
            </React.StrictMode>
        )
    }
}



ReactDOM.render(
    // <React.StrictMode>
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/ipoteka" element={<Content data={dataCards}/>} />
    //             <Route path='/ipoteka/card/' element={<ProductCards />}/>
    //         </Routes>
    //     </BrowserRouter>
    // </React.StrictMode>,
    <MainClass/>,
    document.getElementById('root')
)


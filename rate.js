// import { data } from 'data.js';

const a = require('/git/test-sravni-ru/data');

// console.log(dataCards);
const dataCards = a.data;

function getRateFrom() {
    let rate = [];
    let name = [];
    let license = [];
    for(let i = 0; i < a.data.length; i++) {
        let count = a.data[i].rate.periods;
        rate.push(count[0].rate.from);
        name.push(a.data[i].name);
        license.push(a.data[i].organization.license);
    }
    console.log(rate);
    console.log(name);
    console.log(license);
    return [rate, name, license];
}

getRateFrom();
function myFunc() {
    let list = '';
    for (let i = 0; i < dataCards.length; i++) {
        list += '<span>' + i + ': ' + dataCards[i] + '</span>';
    }
    document.getElementsByClassName('row').innerHTML += '<div>' + list + '</div>'
    alert('bla-bla');
}

function alertView() {
    document.getElementById('row').innerHTML = '8748787878';
}

alertView();

myFunc();



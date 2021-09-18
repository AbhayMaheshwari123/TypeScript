import { Invoice } from './classes/Invoice.js';
const Inone = new Invoice('abc', 'work on the abc website', 250);
const Intwo = new Invoice('abcd', 'work on the abcd website', 850);
let invoices = [];
invoices.push(Inone);
invoices.push(Intwo);
console.log(invoices);
////////////////////////
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
const me = {
    name: 'Abc',
    age: 23,
    gender: 'M'
};
const greetperson = (person) => {
    console.log('hello', person.name);
};
greetperson(me);

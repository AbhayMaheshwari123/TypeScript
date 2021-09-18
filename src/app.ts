import {Invoice} from './classes/Invoice.js'

const Inone=new Invoice('abc','work on the abc website', 250);
const Intwo=new Invoice('abcd','work on the abcd website', 850);

let invoices:Invoice[]=[];
invoices.push(Inone)
invoices.push(Intwo)

console.log(invoices)

////////////////////////
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type=document.querySelector('#type') as HTMLSelectElement;
const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    console.log(
        type.value,tofrom.value,details.value,amount.valueAsNumber
    )
})

///Interface//

interface Person{
    name:string;
    age:number;
    gender:string;
}

const me:Person={
    name:'Abc',
    age:23,
    gender:'M'
};

const greetperson=(person:Person)=>{
    console.log('hello',person.name)
}

greetperson(me) 
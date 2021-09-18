class Invoice {
    client: string;
    details: string;
    amount:number;

    constructor(c:string , d:string , a: number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

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
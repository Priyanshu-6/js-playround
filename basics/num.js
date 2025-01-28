const num = new Number(250.254);

// console.log(num);

// console.log(num.toPrecision(4));
// console.log(num.toFixed(2));

const newNum= 6900000;

// console.log(newNum.toLocaleString('en-IN'));




// -----------------  Math  -----------------


const one =1, two =6;
let i=0;
while (i<20) {
console.log(  Math.floor((Math.random() *(two - one + 1) + one)  ));
    i+=1.5;
}
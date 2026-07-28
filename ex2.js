const sum = (a, b) => a + b;
console.log(sum(10,20));
let a=[1,2,3,4,5];
let b=a.filter((value)=>value%2==0);
const c=b.map((value)=>value*2);
console.log("even=",b);
console.log("squared=",c);
const d=c.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("sum=",d);
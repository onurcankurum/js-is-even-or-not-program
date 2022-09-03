function isEven(n)
{
    return (!(n&1));
}
 
let n = 101;
console.time('Function isEven');

isEven(n)? 
  console.log(n+" is even"):
     console.log(n+" is odd");

console.timeEnd('Function isEven')

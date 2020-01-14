// practise arrow functions 

// Question 1.

// const greet = function (){
//     return 'hello, world';
// };

// Ansewr: 
const greet = () => ' hello, world';

const result = greet();
console.log(result);



// Question 2.  
// const bill = function(products, tax) {
//     let total = 0; 
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total; 
// }

//Answer:
const bill =(products, tax) => {
    let total = 0; 
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}


console.log(bill([10, 15, 30], 0.2))
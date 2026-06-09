//function expression
let tich = function (a,b) {
    return a *b;
};
console.log(tich(1,2));
// arrow function 
let tich2 = (a,b)=> a*b;
console.log(tich2(5,10));
// hàm phức tạp khi dùng arrow function thì cần thêm khối{}
let tich3 = (a,b)=> {
    let product =a*b;
    let sum=a+b;
    return product + sum;
};
console.log(tich3(10,9));

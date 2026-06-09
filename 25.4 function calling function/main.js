let cong = (a,b)=>a+b;
let nhan =(x,y)=>x*y;

function congNhan(num1,num2,num3){
    let sum = cong(num1,num2);

    let product = nhan(sum,num3);

    return product;
};
let resulte = congNhan(2,3,4);
console.log(resulte);
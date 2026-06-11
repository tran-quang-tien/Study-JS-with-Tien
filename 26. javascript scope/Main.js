// global scope 
let a =1;
console.log(a);

function viDu_1(){
    console.log(a);
    if(a%2==0){
        console.log(`${a} la so chan`)
    }else{
        console.log(`${a} la so le`)
    }
}
viDu_1();
// truy xuất trong hàm
function viDu_2(){
    let b =2;
    //1. biến b chỉ truy xuất bên trong hàm
    console.log(b);
    //2. truy xuất từ các cấp sâu hơn
    if(b%2==0){
        console.log(`${b} la so chan`)
    }else{
        console.log(`${b} la so le`)
    }
}
viDu_2();
// console.log(b);

// block scope
let n =3
if( n===3){
    let m =1;
    console.log(m);
    if(m%2===0){
        console.log(`${m} la so chan`)
    }else{
        console.log(`${m} la so le`)
    }
}

 hoistedFunction()
 function hoistedFunction(){
    console.log("hello")
}
/*
engine đọc như sau
khai báo hàm sẽ đẩy lên đầu => gọi hàm => vẫn chạy được
*/
// function expression ko có hoisting
let nonHoistedFunction = function(){
    console.log("hello")
}
// arrow Function không có hoisting
arrowFunction();
let arrowFunction = ()=>{
    console.log("hello")
}

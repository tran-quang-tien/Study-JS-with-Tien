//setTimeout là giúp thực thi hàm sau một khoảng trễ nhất định
let helloArrow = () =>{
    console.log("hello");
}
setTimeout(helloArrow,3000)

function xinChao(){
    console.log("hello decleration");
}
setTimeout(xinChao,4000);

let helloExpression = function (){
     console.log("hello 3")
}
setTimeout(helloExpression,5000)

// truyền trực tiếp function vô settimeou
setTimeout( helloArrow1 = () =>{
    console.log("hello 1")
},3000)
setTimeout(function xinchao2(){
  console.log("xinchao 2")
},4000)
setTimeout(helloExpression2 = function (){
    console.log("xinchao 3")
},5000)
// sử dụng timeout với tham số
let name = prompt("nhap vao ten cua ban")
setTimeout((yourname)=>{
    console.log(`tên của bạn là ${yourname}`)
},10000,name)

// hủy thực hiện hàm
let timeout = setTimeout(helloExpression,3000)
clearTimeout(timeout);
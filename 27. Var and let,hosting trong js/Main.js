console.log("gia tri cua bien c= "+c)
var c=3;// undefine 
/*
Cách hoạt động của js
sẽ khởi tạo trước là var c;
xong sẽ console.log nó ra
rồi mới gán
=> undefine
*** lưu ý cả 3 cái var ,let, const đều bị hosting
nhưng let với const sẽ vào vùng chết tạm thời
*** hosting đẩy giá trị khởi tạo lên đầu
*/
/*
phạm vi của scope
var là function scope
let là block
*/
// var có phạm vi là function-scope
function exampleVar(){
    if(true){
        var y =20; 
        console.log(`${y} trong blockscope`)
    }
    console.log(`${y}trong pham vi function scope`)
}
exampleVar();
// let ,const: có phạm vi là block scope
function exampleLet(){
    if(true){
        let b = 40;
        console.log(`${b} trong blockscope`)
    }
    console.log(`${b} trong pham vi function scope`)

}
// exampleLet();
// re-declaration
var diemToan;
var diemToan;  
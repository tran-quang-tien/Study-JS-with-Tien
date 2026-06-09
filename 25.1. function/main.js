function xinChao(){
    console.log(`Chao mung ban`)
}
xinChao();
xinChao();

let inputName = prompt(`nhap vao ten cua ban`);
function hienThiTen(Name){
    console.log(`xin chao ${Name}`);
}
hienThiTen(inputName);
hienThiTen(`trantien`);

function tinhtong(a,b){
    let ketqua=a+b;
    return ketqua;
}
console.log(tinhtong(5,7));
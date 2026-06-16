// Bai 24
let chuoi = prompt(`Nhapaj vào chuỗi:  `)
let kitu = 0;
let so =0;
let khoangtrong =0;
for(let i = 0; i < chuoi.length; i++){
    if(chuoi[i]>= "A" && chuoi[i]<= "Z"){
        kitu++;
    }else if(chuoi[i]>="a" && chuoi[i]<="z"){
        kitu++;
    }else if(chuoi[i]>=0 && chuoi[i]<=9){
        so++;
    }else if(chuoi[i]===" "){
        khoangtrong++;
    }
}
console.log(` so ki tu la: `+kitu);
console.log(` so so la: `+so);
console.log(` so khoang trong la: `+khoangtrong);
// Bai 25
let matKhau = prompt(`Nhap vao mat khau: `);
if(matKhau >= 6 && /[a-z]/.test(matKhau) && /[A-Z]/.test(matKhau) && /[0-9]/.test(matKhau)){
    console.log(`Mat khau hop le`)
}else {
    console.log(`mat khau phai chua 1 ki tu so, 1 ki tu thuong , 1 ki tu hoa`)
}
let nhapMatKhau = prompt("Nhập mật khẩu:");
let khoa = 0;
while (nhapMatKhau !== matKhau && khoa < 5) {
    khoa++;

    if (khoa === 5) {
        console.log("Tài khoản đã bị khóa");
    } else {
        console.log(`Sai mật khẩu, còn ${5 - khoa} lần`);
        nhapMatKhau = prompt(`Nhập lại mật khẩu chỉ còn ${5 - khoa} lần`);
    }
}

if (nhapMatKhau === matKhau) {
    console.log("Mở khóa thành công");
}
// Bài 26
let a = "abcdefghijklmnopqrstuvwxyz";
let b = "zxcvbnmasdfghjklqwertyuiop";
let text = prompt(`Nhap vao chuoi: `);
let ketQua =0;
for(let i = 0; i < text.length; i++){
    let viTri = a.indexOf(text[i]);
    if(viTri !== -1){
        ketQua+=b[viTri];
    }else{
        ketQua += text[i];
    }
}
console.log(ketQua)
// Bài 27
const v = "tôi chăm học tôi đẹp trai";

const l = v.split(" ");
let dem = 0;

for(let i = 0; i < l.length; i++) {
    if(l[i] === "tôi") {
        dem++;
    }
}

console.log(dem);
//Bài 28
let chuoi2 = prompt(`Nhap vao chuoi: `);
let dayChuoi=[];
let daySo=[];
let dayThua
for(let i = 0; i < chuoi2.length; i++){

    if(/[a-zA-Z]/.test(chuoi2[i])){
        dayChuoi.push(chuoi2[i]);

    } else if(/[0-9]/.test(chuoi2[i])){
        daySo.push(chuoi2[i]);

    } else {
        dayThua.push(chuoi2[i]);
    }
}
console.log(dayChuoi);
console.log(daySo);
console.log(dayThua);
// các cách xuất chuỗi
console.log('xin chào, ABC,123,!@%#%');
console.log("xin chào, ABC,123,!@%#%");
console.log(`xin chào, ABC,123,!@%#%`);
// Khởi tạo chuỗi
let s1 =`chờ những xuân sang
chờ điều gì đó`;
console.log(s1);
let s2 ="chờ những xuân sang\nchờ điều gì đó"
console.log(s2);
// index chuỗi: index bắt đầu từ 0
let ten="Tiến";
console.log(ten[0]);
// độ dài chuỗi
let s3 ="abcdef";
// kiểm tra chiều dài s3
console.log(s3.length); 
// ví dụ về vận dụng kiểm tra độ dài chuỗi
let message =prompt("mời nhập vào chuỗi")
if(message.length<=2){
    console.log(`ban da nhap ${message.length} ky tu`);
}else{
    alert(`ban da nhap qua ${message.length-2} ky tu`)
}
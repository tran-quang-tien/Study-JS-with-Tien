// ép kiểu dữ liệu
// xuất thông báo cho người dùng nhập số liệu a
let numberA = prompt("mời bạn nhập số");
console.log(`số bạn nhập là ${numberA}`);
console.log("kiểu dữ liệu của số đó là "+typeof numberA) // luôn ra string vì mặc định của promt là string
// sai khi dùng phép + vì nó sẽ hiểu là kí tự cộng kí tự
// ép kiểu 
let numberC = parseInt(prompt("mời bạn nhập số"));
console.log(numberC);
console.log(typeof numberC);
// có thể dùng parseInt( thực) hoặc parseFloat(Nguyên) hoặc đơn giản hơn là number
let numberD = Number(prompt("mời bạn nhập số"));
console.log(numberD);
console.log(typeof numberD);
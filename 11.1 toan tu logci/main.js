let i=10;
console.log(i>0 && i<10);
console.log(i>0 || i<10);
console.log(!(i<10));

let pi = Math.PI;
let dodaihinhtron = prompt("nhap do dai hinh tron");
let dientich = Number(dodaihinhtron)*pi;
console.log(dientich);

let a =prompt("nhap vao so a");
let b =prompt("nhap vao so b");
let dthcn = Number(a)* Number(b);
let cvhcn = (Number(a)+ Number(b))*2;
console.log(dthcn);
console.log(cvhcn);

let toan =prompt("nhap diem toan: ");
let van =prompt("nhap diem van:");
let anh= prompt("nhap diem anh ");
let dtb = (Number(toan)+Number(van)+Number(anh))/3;
console.log(dtb.toFixed(2));
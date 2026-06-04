let i =1
while(i<=5){
    console.log(i);
    i++;
}
let n = prompt(`Nhap vao so n tu 1 den 99: `);
console.log(n);
while(isNaN(n)|| n<1||n>99|| n%1!==0){
    n=Number(prompt(`Nhap lai so n tu 1 den 99: `));
}
alert("ban da nhap so n: " +n);
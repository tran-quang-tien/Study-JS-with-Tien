/*split (separator,limit) tách chuỗi mảng dựa trên điều kiện là separator.
limit là giới hạn số lượng của phần tử trong mảng*/
let s31="táo,cam,xoài,chanh";
let fruit = s31.split(",");
console.log(fruit);
console.log(fruit.length)
let fruit2 = s31.split(",",2);
console.log(fruit2);
console.log(fruit2.length)
/*indexOf(searchValue,fromIndex) tìm searchValue xuất hiện lần đầu ở đâu trong chuỗi
fromIndex là giá trị bắt đầu để tìm kiếm
có thể có hoặc k cũng được
*/
let s24 ="abcdef abdcdef";
let s25 = s24.indexOf("c")
let s26 = s24.indexOf("c",3)
console.log(s25);
console.log(s26);
let notFound = s24.indexOf("z")
console.log(notFound);
/* lastIndexOf(searchValue,endIndex) tìm searchValue xuất hiện lần cuối ở đâu trong chuỗi
endIndex là giá trị kết thúc ở đâu nếu k có thì là tìm toàn bộ chuỗi còn nếu có thì là tìm từ 0 -> endIndex*/
let s27 = s24.lastIndexOf("a")
console.log(s27);
console.log(s24.lastIndexOf("a",10));
/* includes(searchValue,fromIndex) tìm giá trị của searchValue có xuất hiện trong chuỗi k trả về true or false
from index là giá trị bắt đầu tìm kiếm nếu 0 có sẽ tìm từ index=0*/
console.log(s24.includes("a"));
console.log(s24.includes("z"));
console.log(s24.includes("a",1));

/* startWith(searchValue,startindex) kiểm tra xem chuỗi có bắt đầu bằng searchValue không trả về true false
StartIndex là giá trị bắt đầu để tìm kiếm nếu k có thì tìm từ đầu chuỗi*/
let s30 ="abcdef abcdef"
console.log(s30.startsWith("a"));
console.log(s30.startsWith("n"));
/* endWith(searchValue,endIndex) kiểm tra xem chuỗi có kết thúc bằng searchValue không trả về true false
endIndex là giá trị kết thúc để tìm kiếm nếu k có thì tìm đến hết chuỗi*/
console.log(s30.endsWith("f"));
console.log(s30.endsWith("a"));
console.log(s30.endsWith("f",6)); 
console.log(s30.endsWith("f",7)); 
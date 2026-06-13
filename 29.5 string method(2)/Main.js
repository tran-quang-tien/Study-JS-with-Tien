// replace chỉ thay thế từ đầu tiên nó bắt được trong chuỗi
let s1 ="học học nữa học mãi";
console.log(s1);
console.log(s1.replace("học","ngủ"))
// neé k thay thế được nó sẽ trả lại y nguyên chuỗi
console.log(s1.replace("họcu","ngủ"))
//thay thế toàn bộ dùng biểu thức chính quy
console.log(s1.replace(/học/g,"ngủ"));
//có thể dùng replace all
console.log(s1.replaceAll("học","ngủ"));
// repeat(count) lặp lại chuỗi với số lần count
let s2="tiến,\n"
let s3 = s2.repeat(3);
console.log(s3)
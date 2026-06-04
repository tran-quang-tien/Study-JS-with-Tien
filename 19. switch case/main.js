let number = 9;
switch(number%2){
    case 0:
        console.log("so chan");
        break;
    case 1:
        console.log("so le");
        break;
    default:
        console.log("ban nhap tao lao")
}
let month = parseInt(prompt("nhap thang"));
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("thang co 31 ngay");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("thang co 30 ngay");
        break;
    case 2:
        console.log("thang co 28 hoac 29 ngay"); 
}
let luachon = parseInt(prompt (`
chọn cách tìm kiếm
1.tìm theo tên
2.tìm theo tác giả
3.tìm theo nhà xuất bản
4.tìm theo tiêu đề    
`));
switch(luachon){
    case 1:
        console.log("ban da chon tim theo ten");
        break;
    case 2:
        console.log("ban da chon tim theo tac gia");
        break;
    case 3:
        console.log("ban da chon tim theo nha xuat ban")
        break;
    case 4:
        console.log("ban da chon tim theo tieu de")
        break;
    default:
        console.log("ban nhap tao lao");
        break;
}2    
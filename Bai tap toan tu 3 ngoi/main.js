let dtb = prompt("nhap vao diem tb: " )
if(isNaN(dtb) || dtb == "" || dtb == null ){
    console.log("ban nhap tao lao")
}else{
    let ketqua = dtb >=8 ?"gioi":(dtb<8 && dtb >= 6.5?"kha":(6.5>dtb && dtb>=5?"trung binh":"yeu"));
    console.log(ketqua);

}
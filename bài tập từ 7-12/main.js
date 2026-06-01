// bài tập 1
console.log(` bai tap 1`)
let tong = 14;
let hieu = 4;
let x = (tong + hieu)  /2;
let y = tong - x;
console.log(x);
console.log(y);
//bài tập 2
console.log(` bai tap 2`);
 let chieuCao = Number(prompt(`nhap vao chieu cao`));
 let canNang = Number(prompt(`nhap vao can nang`));
 let BMI = canNang / (Math.pow(chieuCao,2));
 console.log(BMI);
    if(BMI < 15){
        console.log(`ban qua gay`);     
    }else if(BMI>=15 && BMI <+ 16){
        console.log(`than hinh gay`)
    }else if(BMI >=16 && BMI <=18.5){
        console.log(`hoi gay`)
    }else if(BMI >18.5 && BMI < 25){
        console.log(`binh thuong`)
    }else if(BMI >=25 && BMI < 30){
        console.log(`hoi beo`)
    }else if(BMI>=35){
        console.log(`ban sieu beo`)
    }
// bài tập 3
let nam = Number(prompt(`nhap vao nam`));
function laNamNhuan(nam){
if((nam%4==0 && nam%100!==0)||nam%400==0){
    console.log(`nam nhuan`);
    return true
}else{
    console.log(`nam khong nhuan`);
    return false    
}
}
// bai tap 4
let thang = Number(prompt(`nhap vao thang`));
if([1,3,5,7,8,10,12].includes(thang)){
    console.log(`co 31 ngay`);
}else if([4,6,9,11].includes(thang)){
    console.log(`co 30 ngay`);
}else if(thang === 2){
    let nam = Number(prompt(`nhap vao nam`));
    if(laNamNhuan(nam)){
        console.log(`co 29 ngay`);
    }else{
        console.log(`co 28 ngay`);
    }
};
 
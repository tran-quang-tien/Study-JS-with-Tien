// Bài 22
function soNguyen(n){
    let songuyen =1;
    for(let i = 1;i<=n;i++){
        songuyen*=i;
    }

    return songuyen;
}
console.log(soNguyen(5));
function soNguyen2(n){
    let songuyen =1;
    let i =1;
    while(i<=n){
        songuyen*=i;
        i++;
    }
    return songuyen
}
console.log(soNguyen2(5))
//Bài 23
function ptb2(a,b,c){
    let product = b**2-4*a*c;
    if(product<0){
        console.log("Phương trình vô nghiệm");
    }else if(product===0){
        console.log("co 1 nghiem duy nhat");
        let x = -b/(2*a);
    
        return x;
    }else{
        console.log("phuong trinh 2 nghiem rieng biet");
        let x1=(-b+Math.sqrt(product))/(2*a);
        let x2=(-b-Math.sqrt(product))/(2*a);
       
        return x1,x2;
    }

}
console.log(ptb2(1,2,1))
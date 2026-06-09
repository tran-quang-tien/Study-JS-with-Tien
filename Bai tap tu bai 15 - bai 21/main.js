// Bài 15
// Cách 1
let n = Number(prompt("nhap vao so n"));
let giaithua = 1;
for( let i = 1;i<=n;i++){
    giaithua*=i;
}
console.log(giaithua);
//Cách 2
let m = prompt("nhap vao so n");
let giaithua2 = 1;
let i = 1;
while(i<=m){
    giaithua2*=i;
    i++;
}
console.log(giaithua2);
//Bài 16
let a = prompt("nhap vao so a");
let tong = 0
if(a%2==0){
    for(let i = 0;i<=a;i+=2){
        tong+=i;
    }
    

}else{
    console.log(`toi k tinh so le`)
}
console.log(tong);
//Bài 17
let b = prompt("nhap vao so b");
let tongle =0;
if(b%2!==0){
    for(let i=1;i<=b;i+=2){
        if(i=3){
            continue;
        }else{
        tongle+=1}
    }
}
console.log(tongle);
// Bài 18
let n = 50
let arr = []
for (let i = 0;i<=50;i++){
    if(i%3==0){
        arr.push(i);

    }
}
console.log(arr);
//Bài 19
let n = Number(prompt("nhap vao so n"));
let giaithua = 1;
let tong=0;
for( let i = 1;i<=n;i++){
    giaithua*=i;
    tong+=giaithua
}
console.log(giaithua);
//Bài 20
for(let n =1;n<1000;n++){
    let tong = 0;
    for(let i =1;i<n;i++){
        if(n%i==0){
            tong+=i
        }
    }
    if(tong==n){
        console.log(n);
    }
}
//Bài 21
let traloi ="yes"
while(traloi=="yes"){
let n = Number(prompt("nhap vao so n"));
if(n<2){
    console.log(`khong phai so nguyen to`);
}else{
    let songuyento =true;
    for(let i = 2;i<Math.sqrt(n);i++){
        if(n%i==0){
            songuyento = false;
            break;
        
        }
    }
    if(songuyento){console.log(n+ "la so nguyen to")}
}
    traloi=prompt("ban co muon tiep tuc khong")
}
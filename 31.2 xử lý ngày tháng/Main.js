let myDate1 = new Date(2026,5,24);
console.log(myDate1);
console.log(myDate1.toDateString());

    let myDate2 = new Date("2024-06-24T21:26:12.50");
    console.log(myDate2);

    let myDate3 = new Date();
    myDate3.setFullYear(2026);
    myDate3.setMonth(5);
    myDate3.setDate(24);
    console.log(myDate3);
    // Tự xuất theo ý thích
    console.log(`ngày ${myDate3.getDate()} tháng ${myDate3.getMonth()} năm ${myDate3.getFullYear()} `)
    
        let prefixDate = myDate3.getDate() < 10 ? "0" : "" ;
        let prefixMonth = myDate3.getMonth() < 10 ? "0" : "" ;

        console.log(`ngày ${prefixDate}${myDate3.getDate()} tháng ${prefixMonth}${myDate3.getMonth()} năm ${myDate3.getFullYear()} `)

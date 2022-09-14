function ReturnDaysCountInAMonth(month,year){
    let date = new Date(year,month,0).getDate();

    console.log(date)
}

ReturnDaysCountInAMonth(1, 2012);
ReturnDaysCountInAMonth(2, 2021)
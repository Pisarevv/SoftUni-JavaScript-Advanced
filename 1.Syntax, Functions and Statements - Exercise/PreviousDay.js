function CalculatePreviousDay(year,month,day){
    let recievedDate = new Date(year,month-1,day);

    let previousDate = new Date(recievedDate.setHours(recievedDate.getHours(0) - 1));
    
    console.log(`${previousDate.getFullYear().toString()}-${(previousDate.getMonth()+1).toString()}-${previousDate.getDate().toString()}`)

}



CalculatePreviousDay(2016, 9, 30);
CalculatePreviousDay(2016, 10, 1)
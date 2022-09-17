function ReturnPiecesOfPie(inputArray,firstDelimer,secondDelimer)
{
    let firstIndexOfDelimer = inputArray.indexOf(firstDelimer);
    let secondIndexOfDelimer = inputArray.indexOf(secondDelimer);
    let result = inputArray.slice(firstIndexOfDelimer,secondIndexOfDelimer + 1);
    return result;
}


ReturnPiecesOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);
function CalculateArea(inputValue) 
{
    let result = undefined;
    if(typeof(inputValue) !== 'number')
    {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(inputValue)}.`);
    } 
    else
    {
         result = Math.PI * Math.pow(inputValue,2);
         console.log(result.toFixed(2));
    }
}



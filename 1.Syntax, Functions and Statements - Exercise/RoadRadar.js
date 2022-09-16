function CheckDriverSpeed(speed,location)
{
   let motorwayLimit = Number(130);
   let interstateLimit = Number(90);
   let cityLimit = Number(50);
   let residentialAreaLimit = Number(20);

   switch(location){
       case'motorway':
       result = CheckLimit(speed,motorwayLimit);
       break;
       case'residential':
       result = CheckLimit(speed,residentialAreaLimit);
       break;
       case'interstate':
       result = CheckLimit(speed,interstateLimit);
       break;
       case'city':
       result = CheckLimit(speed,cityLimit);
       break;
       
   }


   console.log(result);

   function CheckLimit(speed,limit){
    let result = '';
    if(speed < limit){
        result = `Driving ${speed} km/h in a ${limit} zone`;
    }
    else{
        let speedOverLimit = speed - limit;
        if(speedOverLimit <= 20){
            result = `The speed is ${speedOverLimit} km/h faster than the allowed speed of ${limit} - speeding`
        }
        else if (speedOverLimit >20 && speedOverLimit <=40){
            result = `The speed is ${speedOverLimit} km/h faster than the allowed speed of ${limit} - excessive speeding`
        }
        else{
            result = `The speed is ${speedOverLimit} km/h faster than the allowed speed of ${limit} - reckless driving`
        }
    }
    return result;
   }
}


CheckDriverSpeed(40, 'city');
CheckDriverSpeed(21, 'residential');
CheckDriverSpeed(120, 'interstate');
CheckDriverSpeed(200, 'motorway');
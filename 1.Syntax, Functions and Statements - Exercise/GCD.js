function CalculateGDC(x,y)
{
   if ((typeof x !== 'number') || (typeof y !== 'number')) 
   return false;
 x = Math.abs(x);
 y = Math.abs(y);
 while(y) {
   var t = y;
   y = x % y;
   x = t;
 }
 console.log(x);

}


CalculateGDC(15, 5);
CalculateGDC(2154, 458);
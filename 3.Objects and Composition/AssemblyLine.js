function createAssemblyLine()
{
    let result = 
    {
        hasClima(currObject)
        {         
            currObject.temp = 21,
            currObject.tempSettings  = Number(21),
            currObject.adjustTemp= function() {
                this.tempSettings > this.temp ? this.temp++ : this.temp --;
            }
        },     
       hasAudio(currObject)
       {
             currObject.currentTrack={name:null,artist:null},
             currObject.nowPlaying = function()
             {
                if(this.currentTrack !== null){
                    (console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`));
                }
            }
        },

        
        hasParktronic(currObject){
            currObject.checkDistance= function(distance){
                    if(distance < 0.1 ){
                        console.log("Beep! Beep! Beep!");
                    }
                    else if (distance >=0.1 && distance <0.25){
                        console.log("Beep! Beep!");
                    }
                    else if(distance >=0.25 &&  distance < 0.5){
                        console.log("Beep!");
                    }
                    else{
                        console.log('');
                    }

                }
        
        }
    }
       
       return result;
    }
    





const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);	

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
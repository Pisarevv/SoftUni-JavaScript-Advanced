function solution() {
    class Balloon{
        constructor(color,weight){
            this.color = color;
            this.hasWeight = weight;
        }
    }
    
    
    class PartyBalloon extends Balloon{
        constructor(color,weight,ribbonColor,ribonLength){
            super(color,weight);
            this._ribbon = {
                color:ribbonColor,
                length:ribonLength
            };
        };
    
        get ribbon() {
            return this._ribbon;
        };
    };
    
    class BirthdayBalloon extends PartyBalloon{
        constructor(color,weight,ribbonColor,ribonLength,text){
            super(color,weight,ribbonColor,ribonLength);
            this._text = text;
        };
    
        get text() { 
            return this._text;
        };
    };

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    };
}


let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);

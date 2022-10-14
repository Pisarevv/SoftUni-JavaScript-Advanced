class SmartHike {
    constructor(username){
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    get username(){
        return this._username;
    }

    set username(value){
        this._username = value;
        
    }

    addGoal(peak,altitude){
        if(this.goals[peak]){
            return `${peak} has already been added to your goals`;
        }
        else{
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    };

    hike(peak,time,difficultyLevel){
        if(this.goals[peak] == undefined){
            throw new Error(`${peak} is not in your current goals`);
        }
        else if (this.goals[peak] && this.resources == 0){
            throw new Error("You don't have enough resources to start the hike");
        }
            let differenceBetweenResAndTime = this.resources - time*10;
        
        if(differenceBetweenResAndTime < 0){
            return "You don't have enough resources to complete the hike";
        }
        else{
            this.resources -= time*10;
            let currHike = {
                peak,
                time,
                difficultyLevel
            }
            this.listOfHikes.push(currHike);
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
        
    };

    rest(time){
        this.resources += time*10;

        if(this.resources >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        else{
            return `You have rested for ${time} hours and gained ${time*10}% resources`;
        }
    };

    showRecord(criteria){
        if(this.listOfHikes.length == 0){
            return `${this.username} has not done any hiking yet`;
        }
        if(criteria == "all"){
            let resultStr = "All hiking records:" + '\n';
            this.listOfHikes.forEach(hike => resultStr += `${this.username} hiked ${hike.peak} for ${hike.time} hours` + '\n');
            resultStr = resultStr.trimEnd();
            return resultStr;

        }

        else if (criteria == "hard" || criteria == "easy"){
            let resultArr = this.listOfHikes.filter(x => x.difficultyLevel == criteria);
            if(resultArr == 0){
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            resultArr.sort((a,b) => (a.time - b.time));

            return `${this.username}'s best ${criteria} hike is ${resultArr[0].peak} peak, for ${resultArr[0].time} hours`;
        }              

    };
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


class footballTeam{
  constructor(clubName,country){
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  };

  newAdditions(footballPlayers){
    let invitedPlayersNames = [];

    for(let player of footballPlayers){
        let name  = player.split("/")[0];
        let age = Number(player.split("/")[1]);
        let playerValue =Number(player.split("/")[2]);

        let currentPlayer = this.invitedPlayers.find(x => x.name == name);

        if(!currentPlayer){
            let footBallPlayer = {
                name,
                age:Number(age),
                playerValue:Number(playerValue)
            };
            this.invitedPlayers.push(footBallPlayer);
            invitedPlayersNames.push(footBallPlayer.name);
        }
        else{
            if(currentPlayer.playerValue < playerValue){
                currentPlayer.playerValue = playerValue;
            }
        }
    };

    return `You successfully invite ${invitedPlayersNames.join(", ")}.`;
  };

  signContract(selectedPlayer){
    let playerName = selectedPlayer.split('/')[0];
    let playerOffer = Number(selectedPlayer.split('/')[1]);
    let currentPlayer = this.invitedPlayers.find(x => x.name == playerName);

    if(!currentPlayer){
       throw new Error(`${playerName} is not invited to the selection list!`);
    }

    if(currentPlayer.playerValue > playerOffer){
        throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${currentPlayer.playerValue - playerOffer} million more are needed to sign the contract!`);
    }

    currentPlayer.playerValue = "Bought";

    return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`
    
  };

  ageLimit(name, age){
    let currentPlayer = this.invitedPlayers.find(x => x.name == name);
    if(!currentPlayer){
        throw new Error(`${playerName} is not invited to the selection list!`);
    }

    if(currentPlayer.age >= age){
        return `${name} is above age limit!`;
    }

    let ageDifference = age - currentPlayer.age;

    if(ageDifference < 5){

        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`

    }
    else if(ageDifference > 5){
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
    }


    };

    transferWindowResult(){
        let buffer = "Players list:\n";

        this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name)).forEach(player => buffer+= `Player ${player.name}-${player.playerValue}\n`);

        return buffer.trimEnd();



    };


}




let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());




function GenerateHeroReport(inputArray){
    let heroReport = [];
    for(let hero of inputArray){
        let heroArgs = hero.split(' / ');
        let currentHero = {};
        currentHero.name = heroArgs[0];
        currentHero.level = Number(heroArgs[1]);
        if(heroArgs.length > 2){
            let items = heroArgs[2].split(', ');
            currentHero.items = items;
        }
        else{
            currentHero.items = []; 
        }
        heroReport.push(currentHero);
    }
    let heroReportJSON = JSON.stringify(heroReport);
    console.log(heroReportJSON);
}


GenerateHeroReport(['Isacc / 25 ']
);

GenerateHeroReport(['Jake / 1000 / Gauss, HolidayGrenade'])
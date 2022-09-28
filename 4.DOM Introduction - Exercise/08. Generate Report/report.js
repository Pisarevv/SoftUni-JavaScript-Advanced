function generateReport() {
    let checkedTableHeaders = Array.from(document.querySelectorAll("th input")).filter(x => x.checked);
    if(checkedTableHeaders.length == 0){
        return;
    }
    let tableHeaderes = Array.from(document.querySelectorAll("th input"));
    let tableRows = Array.from(document.querySelectorAll("tbody tr"));

    for(let row of tableRows){
        for(let i = 0 ; i < tableHeaderes.length; i++){
            let className =tableHeaderes[i].name;
            row.children[i].className = className;
        }
    }

    //let columsEnum = ["employee", "deparment", "status", "dateHired", "benefits"  ,"salary" ,"rating"];
    let columsEnum = [];
    for(let i = 0; i < checkedTableHeaders.length; i++){
        columsEnum.push(checkedTableHeaders[i].name);
    }
    
    let objectEthalon = {};
    for(let column of checkedTableHeaders){
        let name = column.name;

        objectEthalon[name] = "";
        
    }
   
    let takenInfo = [];
    for(let row of tableRows){
        let newObject = {...objectEthalon};
        for(k = 0; k < checkedTableHeaders.length; k++){
            let currentClassName = checkedTableHeaders[k].name;
            for(let i = 0; i < row.children.length; i++){          
                let currentChildren = row.children[i];
                if(currentChildren.className === currentClassName){
                    let headerName = currentClassName;
                    newObject[headerName] = currentChildren.innerText;    
                }              
            }
     
        }
        takenInfo.push(newObject);  
        
    }
    
    let outputElement = document.getElementById("output");
    outputElement.value = JSON.stringify(takenInfo);
        
}


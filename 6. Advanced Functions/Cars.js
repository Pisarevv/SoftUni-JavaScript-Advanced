function modifyObject(inputArr) {

    let createdObjects = [];
    let commands = createCommands();

    for(let command of inputArr){
        let cmd = command.split(' ');
        if(cmd.length == 2){
            if(cmd[0] == 'create'){
                commands[cmd[0]](cmd[1]);
            }
            if(cmd[0] == 'print'){
                commands[cmd[0]](cmd[1]);
            }
        }
        else if (cmd.length == 4){
            if(cmd[0] == 'create'){
                commands[cmd[0] +'_inherit'](cmd[1],cmd[3]);
            }
            if(cmd[0] == 'set'){
                commands[cmd[0]](cmd[1],cmd[2],cmd[3]);
            }

        }
    }





    function createCommands () {
        return {
            create: (inputName) => {
                let newObject = {
                    name : inputName,
                }
                createdObjects.push(newObject);
            },
            create_inherit: (childName,parentName) => {
                let parentObject = createdObjects.find(x => x.name == parentName);
                let childObject = {
                    name : childName,
                    __proto__  : parentObject
                }
                createdObjects.push(childObject);
            },
            set : (targetName,key,value) =>{
                let selectedObject = createdObjects.find(x => x.name == targetName);
                selectedObject[key] = value;
            },
            print : (targetName) =>{
                let selectedObject = createdObjects.find(x => x.name == targetName);
                let result = '';               
                    for (var key in selectedObject) { 
                        if(key != 'name')
                      result += `${key}:${selectedObject[key]},`;
                    }
                result = result.slice(0, result.length - 1)
                console.log(result);
                  
            }
        }
    }
    
}



modifyObject(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)
function AddOrRemoveElements(inputCommands){
    let addValue = 0;
    let result = [];
    for(let command of inputCommands)
    {
        if(command == 'add'){
            addValue++;    
            result.push(addValue);       
        }
        else if(command == 'remove'){
            result.pop();
            addValue++;   
        }
    }
    result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
}


AddOrRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);
function returArgInfo(...params){
    let argsOccurances = {};
    for (let arg of params){
        console.log(`${typeof(arg)}: ${arg}`)
        if(!argsOccurances[typeof(arg)]){
            argsOccurances[typeof(arg)] = 0;
        }
        argsOccurances[typeof(arg)]++;
    }
    let result = '';
    for(let arg in argsOccurances){
      result += (`${arg} = ${argsOccurances[arg]}`) + '\n'
    }
    console.log(result)
    
}



returArgInfo('cat', 42, function () { console.log('Hello world!'); },'cat','cat','cat')
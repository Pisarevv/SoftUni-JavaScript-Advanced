function solution(x){
    let value = x;  

    return (input) => {
        return Number(value + input);
    }
        
    
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

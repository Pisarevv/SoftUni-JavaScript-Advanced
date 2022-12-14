function getFibonator(){
    let current = Number(0);
    let previous =Number(1);

    return () => {
        let result = current + previous;
        previous = current;
        current = result;
        return result;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

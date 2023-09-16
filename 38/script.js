let variable = function(x){
    return x**2
}

console.log(variable(5))

// Essa função atribui uma potência à variável.

// Fatorial

// 5! = 5 * 4 * 3 * 2 * 1

function fatorial(num) {
    let fat = 1
    for(let c = num; c > 1; c--) {
        fat *= c
    }
    return `${num}! = ${fat}`
}

console.log(fatorial(4))

// Recursividade:

function fatorialR(num) {
    if(num == 1) {
        return 1
    } else {
        return num * fatorialR(num - 1)
    }
}

console.log(fatorialR(5))

/* 
Formalização:

5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!

n! = n * (n-1)!

*/
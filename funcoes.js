// Verificar se um número é par ou ímpar
function parimp(num) {

    if(num%2==0) {
        return 'Par'
    }
    else {
        return 'Ímpar'
    }
}
console.log(parimp(4))

// Multiplicação entre dois números

function multiplicacao(n1=0, n2=0) {
    return n1*n2
}
console.log(multiplicacao(4, 12))

// Fatorial de um número

function fatorial(number) {
    let fat = 1
    for(let c = number; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//Fatorial de um número com recursividade

function fatorial(x) {
    if(x==1) {
        return 1
    }
    else {
        return x*fatorial(x-1)
    }
}
console.log(fatorial(5))

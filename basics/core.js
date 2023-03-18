//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n & 1) === 0;
    }

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const result = [];

    for(let i = 2; i <=20; i++){

        if(i%2===0){
            result.push(i);
        }
    }
    return result;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
let result = 0;
    while(n>=0){
        result +=n;
        n-=1;}
    return result;}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}

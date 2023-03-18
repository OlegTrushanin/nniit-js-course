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
    function recSumTo(n) {
    if (n === 0) return n;
    else return n+recSumTo(n-1)}
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    result = 1;
    while(n>=1){
        result *= n;
        n -=1;}
    return result;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {

    count_1 = 1;
    search_1 = 2;

    count_2 = -1;
    search_2 = 1/2;
    
    if(n === 1) return 'Yes ';

if(n>1) {
    
    while(n>=search_1){
        if(search_1 === n) return 'yes, degree ' + count_1;
        search_1 *= 2;
        count_1 += 1;}
    return 'No'; }
else {
    while(n<=search_2){
        if(search_2 === n) return 'yes, degree ' + count_2;
        search_2 *= 1/2;
        count_2 -= 1;}
    return 'No'; }}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}

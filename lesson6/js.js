
/*
1) створити функцію яка приймає масив та виводить його
function arrays(arrays){
    for (let i = 0; i < arrays.length; i++) {
        console.log(arrays[i]);

    }
}
array=[12,3131,'313',true];
arrays(array);*//*
2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
*/
/*
function arrays(arrays){
    for (let i = 0; i < 10; i++) {
        arrays[i]=Math.floor(Math.random()*(800-50)+50);
        console.log(arrays[i]);

    }
}
array=[];
arrays(array);*/
/*
3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)*/
/*
function numbers(number1,number2,number3){
    if(number1<number2&&number1<number3) {
        console.log(number1);
    }else if(number2<number1&& number2<number3){
        console.log(number2);
    }
    else{
        console.log(number3);
    }
}
let a=3;
let b=1;
let c=12;
numbers(a,b,c);*/

/*
4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)*/
/*
function numbers(number1,number2,number3){
    if(number1>number2&&number1>number3) {
        console.log(number1);
    }else if(number2>number1&& number2>number3){
        console.log(number2);
    }
    else{
        console.log(number3);
    }
}
let a=3;
let b=25;
let c=12;
numbers(a,b,c);*/
/*
5) створити функцію яка повертає найбільше число з масиву*/
/*
function array(arrays){
        let max=0;
    for (const array of arrays) {
        if(array>max){
            max=array;
        }
    }
    return max
}
let arrays=[12,312,360,31,3,1];
let maxNumber=array(arrays);
console.log(maxNumber);*/
/*
6) створити функцію яка повертає найменьше число з масиву*/
/*
function arrays(array){
    let min=array[0];
    for (const arrayElement of array) {
        if(arrayElement<min){
            min=arrayElement;
        }
    }
    return min;
}
array=[13,13,13,21,3,2,2,1,0];
minNumber=arrays(array);
console.log(minNumber);*/
/*
7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.*/
/*
function arrays(array){
    let sum=0;
    for (const arrayElement of array) {
        sum+=arrayElement;
    }
    return sum;
}
let array=[31,32,13,12,3,1,31,1];
let Sum=arrays(array);
console.log(Sum);*/
/*
8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/
/*
function arrays(array){
    let sum=0;
    for (const arrayElement of array) {
        sum+=arrayElement;
    }
    return sum/array.length;
}
let array=[31,32,13,12,3,1,31,1];
let average=arrays(array);
console.log(average);*/
/*
/*
9)Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/

/*function keys(obj){
    let arrays=[];
    for (const objElement of obj) {
        for (const objElementElement in objElement) {
          arrays.push(objElementElement);
        }
    }
    return arrays;
}
let obj=[
    {name: 'Dima', age: 13},
    {model: 'Camry'},
    {status:false},
    {job:false},
    {hobby:'programming'}
];
let arrays=keys(obj);
console.log(arrays);*/
/*10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/

/*function keys(obj){
    let arrays=[];
    for (const objElement of obj) {
        for (const objElementElement in objElement) {
            arrays.push(objElement[objElementElement])
        }
    }
    return arrays;
}
let obj=[
    {name: 'Dima', age: 13},
    {model: 'Camry'},
    {status:false},
    {job:false},
    {hobby:'programming'}
];
let arrays=keys(obj);
console.log(arrays);*/
/*
11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]*!/*/
/*function arrays(array1,array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]+array2[i])
    }
    return newArray;
}
let newArrays=[];
array1=[2,3,1,2];
array2=[1,2,2,3];
newArrays=arrays(array1,array2);
console.log(newArrays);*/

/*
============================================================================================*/
/*
- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);*/
/*
function numbers(){
    let max=0;
    let min=arguments[0];
    for (const minElement of arguments) {
        if(minElement>max){
            max=minElement;
        }
        if(minElement>max){
            max=minElement;
        }
    }
    console.log(max);
    return min;
}
let a,b,c,d;
a=6;
b=6;
c=11;
d=10;
let minElement=numbers(a,b,c,d);
console.log(minElement);*/
/*
Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
    Що б я міг сам вибрати повернути мені масив ключів чи масив значень.*/

/*
function keysandvalue(obj,action){
    let arrays1=[];
    let arrays2=[];
    if(action==='key'){
        for (const objElement of obj) {
            for (const objElementElement in objElement) {
                arrays1.push(objElementElement);
            }
        }
        return arrays1;
    }else{
        for (const objElement of obj) {
            for (const objElementElement in objElement) {
                arrays2.push(objElement[objElementElement])
            }
        }
        return arrays2;
    }
}
let obj=[
    {name: 'Dima', age: 13},
    {model: 'Camry'},
    {status:false},
    {job:false},
    {hobby:'programming'}
];
let value=prompt("Enter what array you want:key or value",'key');
let arrays=keysandvalue(obj,value);
console.log(arrays);*/
/*- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
    Двожина масиву від 2 до 100
Приклад
    [1,0,6,0,3] => [1,6,3,0,0]
    [0,1,2,3,4] => [1,2,3,4,0]
    [0,0,1,0]   => [1,0,0,0]*/
/*
function elements(array){
    let array1=[];
    let array2=[];
    for (const arrayElement of array) {
        if(arrayElement===0){
            array1.push(0);
        }else{
            array2.push(arrayElement)
        }
    }
    return array2.concat(array1);
}
let newArray=[];
let array=[1,0,6,0,3];
newArray=elements(array);
console.log(newArray);*/
/*
Дано список імен.
    let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/
/*
let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';
function string(n){
    let string1=n.split(" ");
    let space=[];
    let strings=[]
    for (const string1Element of string1) {
        if(string1Element===""){
            space.push("");
        }else{
            strings.push(string1Element);
        }
    }
    let newstring=strings.join(" ");
   return newstring;
}
console.log(string('    Hermione       Granger      '));*/
// ******************* НАЗАД В МИНУЛЕ *********************** //
/*
Створити функцію яка :
    - Додає в боді блок з текстом "Hello owu"*/
/*
function block(){
    let block=document.createElement('div');
    block.innerText='Hello owu';
    block.style.fontSize='34px';
    block.style.color='green';
    document.body.appendChild(block);
}
block();*/
/*
Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи*/
/*
function body(element,type){
    let block=document.createElement(element);
    block.innerText=type;
    block.style.fontSize='34px';
    block.style.color='green';
    document.body.appendChild(block);
}
body("div",'HELLO MY NAME IS .....................');*/
/* приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомо*/
/*
    function arrays(array,element){
        for (let i=0;i<array.length;i++) {
            let element1=document.createElement(element);
            element1.innerText=`${array[i].car}-${array[i].color}-${array[i].type}`;
            element1.style.fontSize='16px';
            element1.style.color='green';
            document.body.appendChild(element1);
        }

    }
let array=[
    {car:'VOLGA',color:'red',type:'new'},
    {car:'BMW',color:'white',type:'new'},
    {car:'BMW',color:'red',type:'new'},
    {car:'TOYOTA',color:'gray',type:'new'},
    {car:'Mercedez',color:'black',type:'new'},
];
    arrays(array,'div');*/
/*Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці*/
/*
function arrays(array,element){
    for (let i=0;i<array.length;i++) {
        let element1=document.createElement(element);
        document.body.appendChild(element1);
        let elements=document.createElement('p');
        elements.innerText=`${array[i].car}-${array[i].color}-${array[i].type}`;
        elements.style.fontSize='16px';
        elements.style.color='green';
        element1.appendChild(elements);
    }

}
let array=[
    {car:'VOLGA',color:'red',type:'new'},
    {car:'BMW',color:'white',type:'new'},
    {car:'BMW',color:'red',type:'new'},
    {car:'TOYOTA',color:'gray',type:'new'},
    {car:'Mercedez',color:'black',type:'new'},
];
arrays(array,'div');*/
/*
Для кожної властивості створити всередені блока автомоблія свій блок*/
/*
function arrays(array,element){
    for (let i=0;i<array.length;i++) {
        let element1=document.createElement(element);
        document.body.appendChild(element1);
        let elements=document.createElement('p');
        elements.innerHTML=`<div>${array[i].car}</div><div>${array[i].color}</div><div>${array[i].type}</div><br><br>`;
        elements.style.fontSize='16px';
        elements.style.color='green';
        element1.appendChild(elements);
    }

}
let array=[
    {car:'VOLGA',color:'red',type:'new'},
    {car:'BMW',color:'white',type:'new'},
    {car:'BMW',color:'red',type:'new'},
    {car:'TOYOTA',color:'gray',type:'new'},
    {car:'Mercedez',color:'black',type:'new'},
];
arrays(array,'div');*/
/*============================================================================================
ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
============================================================================================*/
/*
1) Точная степень двойки.
    Дано натуральное число N.
    Выведите слово YES, если число N является точной степенью двойки,
    или слово NO в противном случае.
    Операцией возведения в степень пользоваться нельзя!*/
/*
function numbers(number){
    if(number%2===0){
        console.log("YES");
    }else if(number%2===1) {
        console.log("NO");
    }else{
        numbers(number/2);
    }
}
let number=216;
numbers(number);*/
/*
2) Deep Copy
реалізувати глибоке копіювання обєкту за допомогою рекурсій*/
/*
3) Flat
Вирівняти багаторівневий масив в однорівневий
    [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]*/
/*let array=[1,3, ['Hello', 'World', [9,6,1]], ['oops'], 9];
let newArray=array.flat(2)
console.log(newArray)*/

/*
2) Deep Copy
реалізувати глибоке копіювання обєкту за допомогою рекурсій*/
/*
let array=[1,3, ['Hello', 'World', [9,6,1]], ['oops'], 9];
let arrayString=array.join(",");
let newArrays=arrayString.split(",");
let Arrays=[];
for (let i=0;i<newArrays.length;i++) {
        Arrays[i]=parseInt(newArrays[i]);
}
let newArrays1=newArrays.splice(2,2);
let newArrays2=newArrays.splice(5,1);
let ARRAYS=newArrays1.concat(newArrays2);
Arrays.splice(2,2,ARRAYS[0],ARRAYS[1]);
Arrays.splice(7,1,ARRAYS[2]);
console.log(Arrays);*/
/*
Cоздать функцию которая принимает число и возвращает  текст как в примере:
    3275  —>  "3000 + 200 + 70 +5"*/
/*
const func=(number)=>{
    let arr=number.toString().split("").reverse();
    for (let i = 0; i < arr.length; i++) {
        arr[i]=arr[i]*Math.pow(10,i);
    }
    let result=arr.reverse().join(" + ");
    console.log(result);
}


console.time('a')
const result = numbers(number);
console.log(result);
console.timeEnd("a")*/
/*function bool(text,text2){
    let newText=text.split("");
    let newText2=text2.split("");
    let k=0;
    console.log(newText);
    console.log(newText2);
    for(let i=0;i<newText2.length;i++){
        for(let j=0;j<newText.length;j++){
            if(newText2[i]===newText[j]){
                k++;
                break;
            }
        }
    }
    console.log(k);
    if(k===newText.length){
        console.log("True");
    }else{
        console.log("False");
    }
}
let text='EXIT';
let text2='XITEE';
bool(text,text2);*/
/*ANAGRAM | MGANRAA -> true*/
/*
let arr1=[1,23,3,4];
let arr2=[5,31,3,2];
let newArr=[];
for (let i = 0; i < arr2.length; i++) {
   newArr[i]=arr1[i]+arr2[i];

}
console.log(newArr);
*/

/*Количество единиц
Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.*/
/*
2176491947586100 -> 3*/
/*
let string='2176491947586100';
let newArray=string.split("");
let newArray1=[];
let k=0;
for (let i = 0; i < newArray.length; i++) {
    newArray1[i]=parseInt(newArray[i]);
    if(newArray1[i] === 1){
        k++;
    }

}
console.log(newArray1);
console.log(newArray);
console.log(k);*/

/*
Сумма цифр числа
Дано натуральное число N. Вычислите сумму его цифр.
    При решении этой задачи нельзя использовать строки,
    списки, массивы ну и циклы, разумеется.
    Рекурсія)
*/

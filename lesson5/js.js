//Exercise 1
/*let arrayInt=[4,2,6,2,3];
let arrayString=['hello','how','are','you','?'];
let arrayMix=['hello',123,true,51,'!'];
console.log(arrayInt);
console.log(arrayString);
console.log(arrayMix);*/
//Exercise 2
/*let arrayFill=[];
arrayFill[0]=true;
arrayFill[3]='hello';
arrayFill[1]=123;
arrayFill[2]='!'
console.log(arrayFill);*/
//Exercise 3
/*for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello,World!</div>`);
}*/
//Exercise 4
/*for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello,Okten!-${i}</div>`);
}*/
//Exercise 5
/*
let i=0;
while(i<20){
    document.write(`<h1>HELP</h1>`);
    i++;
}*/
//Exercise 6
/*let i=0;
while(i<20){
    document.write(`<h1>HELP-${i}</h1>`);
    i++;
}*/

//Exercise 7
/*
let array=[5,4,2,3,7,8,9,3,4,5];
for (const number of array) {
    console.log(number);
}*/
//Exercise 8
/*let i=0;
let arrayStringAndBool=['Vasil',true,'hello',false,'root','access',false,'okten',true,'goodbye'];
do{
    console.log(arrayStringAndBool[i]);
    i++;
}while(i<arrayStringAndBool.length)*/
//Exercise 9
/*let arrayBoolStringInt=['hello',123,true,false,626,'maybe',333,'okten','!',true];
for (const number of arrayBoolStringInt) {
    if(typeof number==="boolean"){
        console.log(number);
    }
}*/
//Exercise 10
/*let arrayBoolStringInt=['hello',123,true,false,626,'maybe',333,'okten','!',true];
for (let i=0;i<arrayBoolStringInt.length;i++) {
    if (typeof arrayBoolStringInt[i] === "number") {
        console.log(arrayBoolStringInt[i]);
    }
}*/
//Exercise 11
/*let arrayBoolStringInt=['hello',123,true,false,626,'maybe',333,'okten','!',true];
let i=0;
while(i<arrayBoolStringInt.length){
    if (typeof arrayBoolStringInt[i] === "string") {
        console.log(arrayBoolStringInt[i]);
    }
    i++
}*/
/*-
//Exercise 12
/*let arrayDifferentType=[];
arrayDifferentType[0]='string';
arrayDifferentType[1]=123;
arrayDifferentType[3]=true;
arrayDifferentType[2]='hello';
arrayDifferentType[4]=false;
arrayDifferentType[5]=333;
for (const arrayDifferentTypeElement of arrayDifferentType) {
    console.log(arrayDifferentTypeElement);
}*/
//Exercise 13
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i+'<br>');
}*/
//Exercise 14
/*for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i+'<br>');
}*/
//Exercise 15
/*
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(i+'<br>');
}*/
//Exercise 16
/*for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(i+'<br>');
}*/
//Exercise 17
/*for (let i = 0; i < 100; i+) {
    if(i%2===0){
    console.log(i);
    document.write(i+'<br>');
    }
}*/
//Exercise 18
/*for (let i = 1; i < 100; i+=2) {
    console.log(i);
    document.write(i+'<br>');
}*/
/*for (let i = 0; i < 100; i++) {
    if(i%2===1){
    console.log(i);
    document.write(i+'<br>');
    }
}
/*-
//Exercise 19
/*
for(let i=0;i<2;i++){
    for(let j=0;j<60;j++){
        console.log(i,j);
    }
}*/
//Exercise 20
/*for(let i=0;i<2;i++){
    for(let j=0;j<60;j++){
        for(let k=0;k<60;k++){
            console.log(i,j,k);
        }
    }
}*/
//Exercise 21
/*
let arrayString=[ 'a', 'b', 'c'];
let str='';
for (let i = 0; i < arrayString.length; i++) {
    str+=arrayString[i];
}
console.log(str);*/
//Exercise 22
/*
let arrayString=[ 'a', 'b', 'c'];
let str='';
let i=0;
while(i<arrayString.length){
    str+=arrayString[i];
    i++;
}
console.log(str);*/
//Exercise 23
/*
let arrayString=[ 'a', 'b', 'c'];
let str='';
for (const element of arrayString) {
    str+=element;
}
console.log(str);*/
//Exercise 24
/*
let arrayString=[ 'a', 'b', 'c'];
let str='';
for (const element in arrayString) {
    str+=arrayString[element];
}
console.log(str);*/
/*
=================
=================
=================
=================*/
/*
- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
*/
//Exercise 1
/*let array=['a', 'b', 'c'];
for(let i=1;i<=3;i++){
    array.push(i);
}
console.log(array)*/
//Exercise 2
/*let array=[1, 2, 3];
let arrayResult=array.reverse();
console.log(arrayResult);*/
/*let array=[1, 2, 3];
let arrayResult=[];
for (let i = 0; i < array.length; i++) {
    arrayResult[2-i]=array[i];
}
console.log(arrayResult);*/
//Exercise 3
/*
let array=[1, 2, 3];
array.push(4, 5, 6);
console.log(array);*/
//Exercise 4
/*
let array=[1, 2, 3];
array.unshift(4, 5, 6);
console.log(array);*/
//Exercise 5
/*
let array=['js', 'css', 'jq'];
let firstElement=array.shift();
console.log(firstElement);*/
//Exercise 6
/*
let array=['js', 'css', 'jq'];
let lastElement =array.pop();
console.log(lastElement);*/
//Exercise 7
/*
let array=[1, 2, 3, 4, 5];
arrayCut=array.slice(3);
console.log(arrayCut);*/
//Exercise 8
/*
let array=[1, 2, 3, 4, 5];
let arrayCut=array.slice(0,2);
console.log(arrayCut);*/
//Exercise 9
/*
let array=[1, 2, 3, 4, 5];
array.splice(1,2);
console.log(array);*/
//Exercise 10
/*
let array=[1, 2, 3, 4, 5];
let arrayNumber=array.splice(3);
array.splice(3,2,'a','b','c',arrayNumber);
console.log(array);*/
/*
let array=[1, 2, 3, 4, 5];
array.splice(3,0,'a','b','c');
console.log(array);*/
//Exercise 10
/*
let array=[1, 2, 3, 4, 5];
array.splice(1,0,'a','b');
array.splice(6,0,'c');
array.splice(8,0,'e');
console.log(array);*/
//Exercise 11
/*
/*
let array=[1, 2, 3, 4, 5,7,9,10,2,4];
for(let i=0;i<array.length;i++){
    if(array[i]%2===0){
        console.log(array[i]);
    }
}*/
//Exercise 12
/*let array=[1, 2, 3, 4, 5,7,9,10,2,4];
let copyArray=[];
for (let i = 0; i < array.length; i++) {
 copyArray.push(array[i]);
}
console.log(copyArray);*/
//Exercise 13
/*
let array=[1, 2, 3, 4, 5,7,9,10,2,4];
let copyArray=[];
for (let i = 0; i < array.length; i++) {
 copyArray[i]=(array[i]);
}
console.log(copyArray);*/

/*============

//Exercise 1
/*
let array =[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<array.length){
    console.log(array[i]);
    i++;
}*/
//Exercise 2
/*
let array =[2,17,13,6,22,31,45,66,100,-18];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}*/
//Exercise 3
/*let array =[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<array.length){
    if(i % 2 === 1){
        console.log(array[i]);
    }
    i++;
}*/
//Exercise 4
/*let array =[2,17,13,6,22,31,45,66,100,-18];
for(let i=0;i<array.length;i++){
    if(i % 2 === 1){
        console.log(array[i]);
    }
}*/
//Exercise 5
/*let array =[2,17,13,6,22,31,45,66,100,-18];
let i=0;
while(i<array.length){
    if(array[i] % 2 === 0){
        console.log(array[i]);
    }
    i++;
}*/
//Exercise 6
/*let array =[2,17,13,6,22,31,45,66,100,-18];
for(let i=0;i<array.length;i++){
    if(array[i] % 2 === 0){
        console.log(array[i]);
    }
}*/
//Exercise 7
/*let array =[2,17,13,6,22,31,45,66,100,-18];
for(let i=0;i<array.length;i++){
    if(array[i] % 3 === 0){
        array[i]='okten';
    }
}
console.log(array);*/
//Exercise 8
/*
let array =[2,17,13,6,22,31,45,66,100,-18];
let newArray=[];
length=array.length-1;
for (let i = 0; i < array.length; i++) {
    newArray[length-i]=array[i];
}
console.log(newArray);*/
//Exercise 9
/*
let array =[2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}*/
/*
let array =[2,17,13,6,22,31,45,66,100,-18];
let i=array.length - 1;
while(i>=0){
    console.log(array[i]);
    i--;
}*/
/*
let array =[2,17,13,6,22,31,45,66,100,-18];
let i=array.length - 1;
while(i>=0){
if(i % 2 === 1) {
    console.log(array[i]);
}
    i--;
}*/
/*
let array =[2,17,13,6,22,31,45,66,100,-18];
for (let i = array.length - 1; i >= 0; i--) {
    if(i % 2 === 1){
        console.log(array[i]);
    }
}*/
/*
let array =[2,17,13,6,22,31,45,66,100,-18];
let i=array.length-1;
while(i>=0){
    if(array[i] % 2 === 0){
        console.log(array[i]);
    }
    i--;
}*/
/*
let array =[2,17,13,6,22,31,45,66,100,-18];
for(let i=array.length-1;i>=0;i--){
    if(array[i] % 2 === 0){
        console.log(array[i]);
    }
    }
*/
/*let array =[2,17,13,6,22,31,45,66,100,-18];
for(let i=array.length-1;i>=0;i--){
    if(array[i] % 3 === 0){
        array[i]='okten';
    }
}
console.log(array);*/
//Exercise 10
/*let array=[];
for(let i=0;i<100;i++){
    if(i%2===0){
        array[i]=i;
    }
}
console.log(array);*/
/*
let array=[];
for(let i=0;i<100;i++){
    i%2===1?array[i]=i : array[i];
}
console.log(array);*/
/*
1
створити пустий масив та :
    1. заповнити його 50 парними числами за допомоги циклу.
2. заповнити його 50 непарними числами за допомоги циклу.
3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
    диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
2. вывести на консоль  каждый третий елемент
3. вывести на консоль  каждый третий елемент
но при условии что его значение является парным.
4. вывести на консоль  каждый третий елемент
но при условии что он имеет парное значение и
записать их в другой массив.
5. Вывести каждый елемент массива у которого соседний с права элемент - парный
5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
*/
//Exercise 1
/*
let array=[];
for(let i=0;i<100;i++){
    if(i%2===0){
        array[i]=i;
    }
}*/
/*
let array=[];
for(let i=0;i<100;i++){
    i%2===1?array[i]=i : array[i];
}
console.log(array)*/
/*let array=[];
for(let i=0;i<50;i++){
    array[i]=Math.floor((Math.random()*716)+18);
}
console.log(array)*/
//Exercise 2
/*
let array=[];
for(let i=0;i<50;i++){
    array[i]=Math.floor((Math.random()*732)+18);
}
console.log(array);
for(let j=3;j<array.length;j=j+3){
    console.log(array[j]);
}*/
//Exercise 3
/*
let array=[];
for(let i=0;i<50;i++){
    array[i]=Math.floor((Math.random()*732)+18);
}
console.log(array);
for(let j=3;j<array.length;j=j+3){
    if(array[j]%2===0){
        console.log(array[j]);
    }
}*/
//Exercise 4
/*
let array=[];
for(let i=0;i<50;i++){
    array[i]=Math.floor((Math.random()*732)+18);
}
console.log(array);
let newArray=[];
for(let j=3;j<array.length;j=j+3){
    if(array[j]%2===0){
        newArray[j]=array[j];
    }
}
console.log(newArray);*/
//Exercise 5
/*
let array=[];
for(let i=0;i<50;i++){
    array[i]=Math.floor((Math.random()*732)+18);
}
console.log(array);
for(let j=0;j<array.length;j++){
    if(array[j+1]%2===0){
        console.log(array[j]);
    }
}*/
//Exercise 6
/*
let array=[100,250,50,168,120,345,188];
let arraySum=0;
let bill;
for (let i = 0; i < array.length; i++) {
    arraySum+=array[i];
    bill=arraySum/i+1;
}
console.log(bill);*/

/*
3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
додати його в інший масив.*/
// 3
/*
let array=[];
for(let i=0;i<10;i++){
    array[i]=Math.floor((Math.random()*732)+18);
}
console.log(array);
let newArray=[];
for(let j=0;j<array.length;j++){
    newArray[j]=array[j]*5;
}
console.log(newArray);*/
// 4
/*
let array=[23,3,3,21,3,13,1,'std',true,'dada'];
let newArray=[];
for (let i = 0; i < array.length; i++) {
    if(typeof array[i]==="number"){
        newArray[i]=array[i];
    }
}
console.log(newArray);*/

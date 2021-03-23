//Example 1
let str='Привет';
let num=123;
let flag=true;
let txt='true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);
//Example 2
let a1=5+3;
let a2=5-3;
let a3=5*3;
let a4=5/3;
let a5=5%3;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
//Example 3
let b=5%3;
let b1=3%5;
let b2=5+'3';
let b3='5'-3;
let b4=75+'кг';
console.log(b);
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
//Example 4
let height=23;
let width=10;
s=height*width;
console.log(s);
//Example 5
/*Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
    результат поместите в переменную v.*/
let heightC=10;
let dC=4;
let Pi=Math.PI;
let v=Pi*Math.pow(dC/2,2)*heightC;
console.log(v);
//Example 6
let n=3;
let m=4;
let k;
k=Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
console.log(k);
//Example 7
let str2='Hello world';
document.write("<h1>",str2,"</h1>");
document.write(`<h2>${str2}</h2>`);
console.log(str2);
alert(str2);
//Example 8
alert('Кваснюк Андрій Дмитрович\n 18\n programming\n');
//Example 9
/*Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
    Вывести в документ содержимое переменной concatenation спомощью document.write*/
let strr1='Кто';
let strr2='ты';
let strr3='такой';
let concatenation=strr1+' '+strr2+' '+strr3;
document.write(`<h2>${concatenation}</h2>`);
//Example 10
let sttr = "20";
let a = 5;
document.write(sttr + a + "<br/>");//5 перевелося в рядкову змінну,а br це перехід на новий рядок
document.write(sttr - a + "<br/>");//всі крім додавання,переводять стрінг в число тому 20-5=15
document.write(sttr * "2" + "<br/>");//перевело всеодно в числове значення
document.write(sttr / 2 + "<br/>");//так само з дыленням
//Example 11
    /*parseInt("3.14")-3
    parseInt("-7.875")-7
parseInt("435")-435
parseInt("Вася")-Nan*/
//Example 12
let strrr = prompt("Enter something", "ho-ho");
console.log(strrr);
//Example 13
/*13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert*/
let number1=+prompt("Enter a number", "5");
let number2=+prompt("Enter a number", "6");
let numbers=number1+number2;
alert(numbers);
//Example 14
/*С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert*/
let FirstName=prompt("Enter your FirstName:","Vasil");
let LastName=prompt("Enter your LastName:","Petrovich");
let age=+prompt("Enter your Age:","30");
alert('Доброго вечера'+' '+FirstName+' '+LastName+','+' '+'мои поздравления что вам'+' '+age);
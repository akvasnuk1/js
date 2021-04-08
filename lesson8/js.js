/*
1) Створити масив з 20 чисел та:
    a) відсортувати його від меншого до більшого.
    b) відсортувати його від більшого до меншого.
    c) Відфілтрувати числа які є кратними 3.
d) Відфілтрувати числа які є більшими за 10.
e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
f) За допомогою map збільшити кожен елемент в масиві в три рази.
    g) Порахувати загальну суму всіх елментів у масиві (reduce)*/
/*
arr=[];
for (let i = 0; i < 20; i++) {
   arr[i]= Math.floor(Math.random()*(100+20)-20);
}
let sortArray=arr.sort((a,b)=>a-b);
console.log(sortArray);
let sortArray2=arr.sort((a,b)=>b-a);
console.log(sortArray2);
let filterArray=arr.filter(value => value%3===0);
console.log(filterArray);
let filterArray2=arr.filter(value => value>10);
console.log(filterArray2);
arr.forEach(value => document.write(`${value}\n`));
let mapArray=arr.map(value => value*3);
console.log(mapArray);
let reduceArray=arr.reduce((acc,value)=>acc+value);
console.log(reduceArray);*/
/*
2) Створити масив з 20 стрічок та:
    a) Відсортувати його в алфавітному порядку
b) Відсортувати в зворотньому порядку
c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'*/
/*
let arr=['vasya','petya','kolya','olya','max','anya','oleg','andrey','masha','olya','max','vasya','petya','kolya','olya','max','anya'];
let sortArr=arr.sort();
console.log(sortArr);
let sortArr2=arr.sort((a,b)=>a<b?1:-1);
console.log(sortArr2);
let filterArr=arr.filter(value => value.length>4);
console.log(filterArr);
let mapArr=arr.map(value => `Sam says ${value}`);
console.log(mapArr);*/
/*3) Все робити тільки за допомогою методів масивів!
a) відсортувати його за  віком (зростання , а потім окремо спадання)
b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
та зберегти це в новий масив (первинний масив залишиться без змін)
d) відсортувати його за індентифікатором
e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)*/
/*
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
let sortAge=users.sort((a,b)=>a.age-b.age);
console.log(sortAge);
let sortAge2=users.sort((a,b)=>b.age-a.age);
console.log(sortAge2);
let sortName=users.sort((a,b)=>b.name.length-a.name.length);
console.log(sortName);
let sortName2=users.sort((a,b)=>a.name.length-b.name.length);
console.log(sortName2);
let newArray=[];
newArray=users.map((user,index)=> {
        user.id = Math.floor(Math.random()*(100-5)+5);
        return user;
    }
);
console.log(newArray);
let sortId=newArray.sort((a,b)=>a.id-b.id);
console.log(sortId);
let MarriedArray=newArray.reduce((acc,value)=>{
   if(value.isMarried===true){
       value.flat=true;
       acc.push(value);
   }
   return acc;
},[])
console.log(MarriedArray);*/
/*РОБОТА В АУДИТОРІЇ*!/*/
/*
/*
Відфільтрувати масив за наступними крітеріями :
    - двигун більше 3х літрів
- двигун = 2л
- виробник мерс
- двигун більше 3х літрів + виробник мерседес
- двигун більше 3х літрів + виробник субару
- сили більше ніж 300
- сили більше ніж 300 + виробник субару
- мотор серіі ej
- сили більше ніж 300 + виробник субару + мотор серіі ej
- двигун меньше 3х літрів + виробник мерседес
- двигун більше 2л + сили більше 250
- сили більше 250  + виробник бмв*/
/*
const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year:2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
let filterVolume=cars.filter(value => value.volume>3);
console.log(filterVolume);
let filterVolume2=cars.filter(value => value.volume===2);
console.log(filterVolume2);
let filterProducer=cars.filter(value =>value.producer==='mercedes')
console.log(filterProducer);
let filterProducerPlusEngine=cars.filter(value =>value.producer==='mercedes'&&value.engine>3)
console.log(filterProducerPlusEngine);
let filterProducerPlusEngine2=cars.filter(value =>value.producer==='subaru'&&value.engine>3)
console.log(filterProducerPlusEngine2);
let filterPower=cars.filter(value => value.power>300);
console.log(filterPower);
let filterPowerPlusProducer=cars.filter(value => value.power>300&&value.producer==='subaru');
console.log(filterPowerPlusProducer);
console.log(filterPowerPlusProducer);
let filterEngine=cars.filter(value =>value.engine.startsWith('ej'))
console.log(filterEngine);
let powerPlusProducerPlusEngine=cars.filter(value => value.power>300&&value.producer==='subaru'&&value.engine.startsWith('ej'))
console.log(powerPlusProducerPlusEngine);
let EnginePlusProducer=cars.filter(value => value.volume<3&&value.producer==='mercedes')
console.log(EnginePlusProducer);
let EnginePlusPower=cars.filter(value => value.engine>2&&value.power>250);
console.log(EnginePlusPower);
let PowerPlusProduce=cars.filter(value => value.power>250&&value.producer==='bmw')
console.log(PowerPlusProduce);
*/
/*
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
/!*
-- Відсортувати їх по ID*!/
let sortArr=usersWithAddress.sort((a,b)=>a.id-b.id);
console.log(sortArr);
/!*
-- Відсортувати їх по ID в зворотньому порядку*!/
let sortArr2=usersWithAddress.sort((a,b)=>b.id-a.id);
console.log(sortArr2);
/!*
-- Відсортувати по віку
*!/
let sortAge=usersWithAddress.sort((a,b)=>a.age-b.age);
console.log(sortAge);
/!*
-- Відсортувати по віку в зворотньому порядку*!/
let sortAge2=usersWithAddress.sort((a,b)=>b.age-a.age);
console.log(sortAge2);
/!*
-- Відсорутвати по імені*!/
let sortName=usersWithAddress.sort((a,b)=>a.name>b.name?1:-1);
console.log(sortName);

/!*-- Відсорутвати по назві вулиці*!/
let sortStreet=usersWithAddress.sort((a,b)=>a.address.street>b.address.street?1:-1);
console.log(sortStreet);
/!*
-- Відсорутвати по номеру будинку*!/
*!/
let sortNumber=usersWithAddress.sort((a,b)=>a.address.number>b.address.number?1:-1);
console.log(sortNumber);
/!*
-- Залигити тільки тих, хто молодший ніж 30 (filter)*!/
let filterAge=usersWithAddress.filter(value => value.age<30);
console.log(filterAge);
/!*
-- Залишити тільки одружених*!/
let filterMarried=usersWithAddress.filter(value => value.isMarried===true);
console.log(filterMarried);
/!*
-- Залишити тільки одружених, які молодні за 30*!/
let filterMarriedAndAge=usersWithAddress.filter(value => value.isMarried===true&&value.age<30);
console.log(filterMarriedAndAge);
/!*
-- Залишити лише тих, в кого парні номери будинків.*!/
let filterNumber=usersWithAddress.filter(value => value.address.number%2===0);
console.log(filterNumber);
/!*
-- Порахувати загальний вік всіх людей. (reduce)*!/
let AgeSum=usersWithAddress.reduce((acc,value)=>acc+value.age,0);
console.log(AgeSum);
/!*
-- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)*!/
let MarriedAndAge=usersWithAddress.reduce((acc,value)=>{
    if(value.isMarried===true&&value.age>30){
        value.child=true
     acc.push(value);
    }
    return acc;
},[])
console.log(MarriedAndAge);*/
/*
Додатково*/
/*
Створити обєкт автомобіля з полями:
    Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
    Власник автомобіля теж має бути обєкт, у якого є поля
Імя, вік, стаж водіння.
    Створити не менше 7 та не більше 20 машинок.
    Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
Для початку вкладіть всі наші створені автомобілі в масив cars.
    Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
    то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
    Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі*/

let arrayCar=[
    {producer:'bmw', engine:3, owner:'Vasya', price:200000, age:2019, Owner:{name:'Vasya', age:22, experience:5}},
    {producer:'audi', engine:2, owner:'Petro', price:300000, age:2018, Owner:{name:'Petro', age:33, experience:2}},
    {producer:'mercedes', engine:3, owner:'Nazar', price:400000, age:2017, Owner:{name:'Nazar', age:23, experience:3}},
    {producer:'volga', engine:4, owner:'Arsen', price:3200000, age:2020, Owner:{name:'Arsen', age:25, experience:4}},
    {producer:'Volkswagen', engine:3, owner:'Andrii', price:2100000, age:2009, Owner:{name:'Andrii', age:26, experience:3}},
    {producer:'bmw', engine:2, owner:'Tanya', price:100000, age:2008, Owner:{name:'Tanya', age:27, experience:7}},
    {producer:'audi', engine:2, owner:'Vasil', price:313000, age:2015, Owner:{name:'Vasil', age:30, experience:8}},
    {producer:'Volga', engine:3, owner:'Maksim', price:313100, age:2016, Owner:{name:'Maksim', age:32, experience:10}},
]
let newArrayCar=arrayCar.map((value,index)=>{
    if(index%2===0){
        value.engine+=value.engine*0.1;
        value.price+=value.price*0.05;
    }
    return value;
})
console.log(newArrayCar);
let newCourseCar=newArrayCar.map((value)=>{
    if(value.owner.experience<5&&value.owner.age>25){
        value.gotocourse=true;
        value.owner.experience+=1;
    }
    return value;
})

console.log(newCourseCar);
let sum=0;
newArrayCar.forEach((value)=>{
    sum+=value.price;
});
console.log(sum);


/*
Задача: дан отсортированный по возрастанию массив целых чисел.
    Необходимо вернуть наименьший и наибольший индекс заданного элемента.
    Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
    Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

Пример:
    Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
1. Key = 1
Answer: MinIndex = 0, MaxIndex = 0.
2. Key = 4
Answer: MinIndex = 3, MaxIndex = 6.*/
/*
let numbers=(arr,key)=>{
    let newArray=[];
    let MinIndex, MaxIndex;
    for (const arrElement of arr) {
      if(arrElement>10){
          continue;
      }else {
          newArray.push(arrElement);
      }
    }
 let array=newArray.reduce((acc,value,index)=>{
     if(value===key){
         acc+=index;
     }
     return acc;
 },[])
    if(array.length===0){
        console.log(-1);
        return;
    }
    let arr2=array.split("");

    arr2?console.log(`MinIndex:${arr2[0]},MaxIndex:${arr2[arr2.length-1]}`):-1

}
Arr=[1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
numbers(Arr,0);*/

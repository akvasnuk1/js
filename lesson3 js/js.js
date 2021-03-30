/*Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :*/
/*    a) отримує текст з параграфа з id "content"*/
/*    b) отримує текст з блоку з id "rules"*/
/*    c) замініть текст параграфа з id 'content' на будь-який інший*/
/*    d) замініть текст параграфа з id 'rules' на будь-який інший*/
/*    e) змініть кожному елементу колір фону на червоний*/
/*    f) змініть кожному елементу колір тексту на синій*/
/*    g) отримати весь список класів елемента з id=rules і вивести їх в console.log*/
/*    h) отримати всі елементи з класом fc_rules*/
/*    i) поміняти колір тексту у всіх елементів fc_rules на червоний*/
/*a)const getTextByElement=document.getElementById('content');
console.log(getTextByElement.innerText);*/
/*b)const getTextByElement=document.getElementsByTagName('div');
console.log(getTextByElement[0].innerText);*/
/*c)const getElement=document.getElementById('content');
content.innerText='Hello to everyone';*/
/*d)const getElement=document.getElementsByClassName('fc');
getElement[0].innerText='HEEELLLLLLLLLLLLLPPPPPPPPPPPP';*/
/*e)const getElement=document.getElementsByTagName('div');
getElement[0].style.backgroundColor='red';
const getElement1=document.getElementsByTagName('p');
getElement1[0].style.backgroundColor='red';
const getElement2=document.getElementsByTagName('ul');
getElement2[0].style.backgroundColor='red';*/
/*f)const getElement=document.getElementById('content');
getElement.style.color='blue';
const getElement1=document.getElementById('rules');
getElement1.style.color='blue';
const getElement2=document.getElementsByTagName('ul');
getElement2[0].style.color='blue';*/
/*
g)const getClass=document.getElementById('rules');
console.log(getClass.classList);*/
/*
h)const getClass=document.getElementsByClassName('fc_rules');
console.log(getClass);*/
/*
const getElement=document.getElementsByClassName('fc_rules');
for (const elementElement of getElement) {
    elementElement.style.color='red';
}*/
/*

 */
/*let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];*/
/*2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Вставити цей блок на сторінку*!/*/
/*
for (let i = 0; i < users.length; i++) {
    const userInfo=document.createElement('div');
    userInfo.style.fontSize='16px';
    userInfo.style.color='#0378a9';
    userInfo.innerHTML=`
     My name is ${users[i].name}.<br>I am ${users[i].age} years old.<br>
     My status is ${users[i].status},<br>
     and my address is ${users[i].address.city},${users[i].address.country},${users[i].address.street},${users[i].address.houseNumber}<br><br>`;
    document.body.appendChild(userInfo);

}*/
/*
3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Блок з адресою зробити окремим блоком, з блоками для кожної властивості*/

/*
for (let i = 0; i < users.length; i++) {
    let elements=document.createElement('div');
    elements.style.fontSize='16px';
    elements.style.color='#0378a9';
    elements.innerHTML=`
    My name is ${users[i].name}.<br>I am ${users[i].age} years old.<br>
    My status is ${users[i].status}<br><br>`;
    document.body.appendChild(elements);
}

for (let i = 0; i < users.length; i++) {;
    const userAddress=document.createElement('div');
    userAddress.style.fontSize='16px';
    userAddress.style.color='rgb(172,26,26)';
    userAddress.innerHTML=`
    <div>My city is ${users[i].address.city}</div>
    <div>My country is ${users[i].address.country}</div>
    <div>My street is ${users[i].address.street}</div>
    <div>My housenumber is ${users[i].address.houseNumber}</div><br>`
    document.body.appendChild(userAddress);
}*/
/*
РОБОТА В АУДИТОРІЇ*/
/*
Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який :
a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)*/
/*
const element=document.getElementById('main_header');
element.innerText='feb-2021';
element.style.color='blue';*/
/*b) робить шириниу елементу ul 400px*/
/*const element=document.getElementsByTagName('ul');
element[0].style.width='400px';*/
/*c) робить шириниу всіх елементів з класом linkList шириною 50%*/
/*const elements=document.getElementsByClassName('linkList');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.width='50%';

}*/
/*d) отримує текст який зберігається в елементі з класом listElement2*/
/*const element=document.getElementsByClassName('listElement2');
console.log(element[0].innerText);*/
/*e) отримує всі елементи li та змінює ім колір фону на сірий*/
/*const elements=document.getElementsByTagName('li');
for (const element of elements) {
    element.style.backgroundColor='gray';
}*/
/*f) отримує всі елементи 'a' та додає їм клас anchor*/
/*const elements=document.getElementsByTagName('a');
for (const element of elements) {
    element.classList='anchor';
}*/
/*g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів*/
/*const elements=document.getElementsByTagName('a');
for (let i = 0; i < elements.length; i++) {
    if(elements[i].innerText==='link3'){
        elements[i].style.fontSize='40px';
    }

}*/
/*h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a*/
/*const elements=document.getElementsByTagName('a');
for (const element of elements) {
    element.classList=`element_${element.innerText}`;
}*/
/*i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()*/
/*const elements=document.getElementsByClassName('sub-header');
const getcolor=prompt('Enter a color:','red');
for (const element of elements) {
    element.style.backgroundColor=getcolor;
}*/
/*j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()*/
/*const elements=document.getElementsByClassName('sub-header');
const getcolor=prompt('Enter a color:','red');
for (const element of elements) {
    if(element.innerText==='content 2 segment'){
        element.style.backgroundColor=getcolor;
    }
}*/
/*k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()*/
/*const element=document.getElementsByClassName('content_1');
const text=prompt('Enter a text','hello');
element[0].innerText=text;*/
/*l) отримати елементи p та змінити їм padding на 20px*/
/*const elements=document.getElementsByTagName('p');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.padding='20px';

}*/
/*m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)*!/*/
/*
const elemets=document.getElementsByClassName('text2');
for (let i = 0; i < elemets.length; i++) {
    elemets[i].innerText='feb-2021';

}*/
/*2) Є масив котрий характеризує правила.
    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html*/

/*
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];
const text=document.createElement('h1');
text.innerText='Правила бойцовского клуба';
document.body.appendChild(text);
const wrap=document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);
for (let i = 0; i < rules.length; i++) {
    const rule=document.createElement('div');
    rule.innerHTML=`<h2>${rules[i].title}</h2>
    <p>${rules[i].body}</p>
`;
    rule.classList.add("rules",`rule${i+1}`);
wrap.appendChild(rule);
}*/
/*===========================================================================

- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];*/

/*З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив*/
/*
Example:
    let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },
        // TO BE CONTINUED .....
    ]*/
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let newArray=[];
for(let i=0;i<usersWithId.length;i++){
    usersWithId[i].address={user_id:citiesWithId[i].user_id,country:citiesWithId[i].country,city:citiesWithId[i].city};
}
console.log(usersWithId);
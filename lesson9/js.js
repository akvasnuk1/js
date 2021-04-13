
// Создать произвольный елемент с id = text. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const element=document.querySelector('#text');
// const button=document.querySelector("#but")
// button.onclick=()=>{
//     element.hidden ? element.hidden=false : element.hidden=true;
//
// }
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const element=document.querySelector('#but');
// element.onclick=()=>{
//     // element.hidden ? element.hidden=false : element.hidden=true;
//     element.style.display='block' ? element.style.display='none' : element.style.display='block';
// }
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// const input=document.getElementById('age');
// const submit=document.getElementById('sub');
// submit.onclick=()=>{
//     console.log(`Your age is ${input.value}`);
// }
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const input=document.getElementById('age');
// const submit=document.getElementById('sub');
// submit.onclick=()=>{
//      input.value<18 ?console.log("your age<18") : console.log("Go");
//  }
// - Создайте меню, которое раскрывается/сворачивается при клике
// const menu=document.getElementById('menu');
// const submenu=document.getElementById('submenu');
// menu.onclick=()=>{
//     submenu.hidden ? submenu.hidden=false : submenu.hidden=true;
// }
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// const comment=[{title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
// comment.forEach(value => {
//     let div=document.createElement('div');
//     document.body.appendChild(div);
//     let h2=document.createElement('h2');
//     let p=document.createElement('p');
//     let button=document.createElement('button');
//     h2.innerText=value.title;
//     p.innerText=value.body;
//     button.innerText='Hide body';
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
//     button.onclick=()=>{
//         p.hidden ? p.hidden=false : p.hidden=true;
//     }
// })
// - Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let forms1=document.forms.form1;
// let forms2=document.forms.form2;
// let submit=document.getElementById('subm');
// submit.onclick=()=>{
//    let form1Text=forms1.text.value;
//    let form1Tel=forms1.tel.value;
//     let form2Text=forms2.text.value;
//     let form2Tel=forms2.tel.value;
//     console.log(`Form 1:${form1Text}:${form1Tel},Form 2:${form2Text}:${form2Tel}`);
// }
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// function table (numberOfRow,numbers,addTableIn){
//     const addTableInTag=document.createElement(addTableIn);
//     document.body.appendChild(addTableInTag);
//     const table=document.createElement('table');
//     addTableInTag.appendChild(table);
//     for (let i = 0; i < numberOfRow; i++) {
//         const tr=document.createElement('tr')
//         tr.innerText=`Index of tr:${i}`;
//         table.appendChild(tr);
//         for(let j=0;j<numbers;j++){
//             const td=document.createElement('td');
//             td.innerText=`Index of td:${i}`;
//             tr.appendChild(td);
//         }
//     }
// }
// table(2,2,'div')
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let images=[
    {id:1,
    img:'unnamed.jpg'
    },
    {id:2,
        img:'https://eduzorro.com/wp-content/uploads/2020/04/Screenshot_4.png'
    },
    {id:3,
        img:'https://kidsvisitor.com/media/place_images/15/a2/15a2810575a9eaee4ed4eb8336fc79a9aac235c7.jpeg'
    },
    {id:4,
        img:'https://i.biz-gid.com/img/logo/45664.png'
    },
    {id:5,
        img:'unnamed.jpg'
    },
    {id:6,
        img:'http://osvita.ua/doc/images/guide/367/36709/36709_tmp2-36709_i.jpg'
    }
]
let div=document.createElement('div');
document.body.appendChild(div);
let img=document.createElement('img');
img.src=images[0].img;
img.style.width='300px';
img.style.height='300px';
div.appendChild(img);
let button1=document.createElement('button');
let button2=document.createElement('button');
button1.innerText='Left';
button2.innerText='Right';
div.appendChild(button1);
div.appendChild(button2);
let indexleft=images.length-1;
button1.onclick=()=>{
        img.src=images[indexleft].img;
        img.style.width='300px';
        img.style.height='300px';
        div.appendChild(img);
        indexleft < 0 ? indexleft=images.length-1 : indexleft--;
    console.log(indexleft);
}
let indexright=0;
button2.onclick=()=>{
        img.src=images[indexright].img;
        img.style.width='300px';
        img.style.height='300px';
        div.appendChild(img);
    console.log(indexright);
    indexright > images.length-1 ? indexright=0 : indexright++;
}
// РОБОТА В АУДИТОРІЇ
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const sub=document.getElementById('text');
// let array=['mat','ogo','yaya'];
// sub.oninput=(ev)=>{
//     for (const evElement of array) {
//         if(ev.target.value===evElement){
//             alert('Не можна');
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// const sub=document.getElementById('text');
// let array=['mat','ogo','yaya'];
// sub.oninput=(ev)=>{
//     for (const evElement of array) {
//         if(ev.target.value.includes(evElement)){
//             alert('Не можна');
//         }
//     }
// }

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// const h2=document.getElementsByTagName('h2');
// const wrap=document.getElementById('content')
// const div=document.createElement('div');
// div.style.float='right'
// div.style.width='60%'
// wrap.appendChild(div);
// const ul=document.createElement('ul');
// div.appendChild(ul);
// for (let i = 0; i < h2.length; i++) {
//     let link='link'+i;
//     const li=document.createElement('li');
//     ul.appendChild(li);
//     const a=document.createElement('a');
//     a.innerText=h2[i].innerText;
//     a.style.fontSize='20px';
//     h2[i].setAttribute('id',  link);
//     a.href='#'+link;
//     li.appendChild(a)
// }

// -- взять массив пользователей
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// let copyArray=JSON.parse(JSON.stringify(usersWithAddress))
// function arr(arr){
//     for (const copyArrayElement of arr) {
//         let div=document.createElement('div');
//         div.innerHTML=`${copyArrayElement.name},${copyArrayElement.age},${copyArrayElement.isMarried},${copyArrayElement.address.city},${copyArrayElement.address.street},${copyArrayElement.address.number}`;
//         document.body.appendChild(div);
//     }
// }
// arr(copyArray);
// const form=document.createElement('form');
// document.body.appendChild(form);
// const checkbox1=document.createElement('input');
// const checkbox2=document.createElement('input');
// const checkbox3=document.createElement('input');
// const label1=document.createElement('label');
// const label2=document.createElement('label');
// const label3=document.createElement('label');
// checkbox1.type='checkbox';
// checkbox1.name='checkbox1';
// checkbox2.type='checkbox';
// checkbox2.name='checkbox2';
// checkbox3.type='checkbox';
// checkbox3.name='checkbox3';
// const button=document.createElement('button');
// button.innerText='Click';
// form.appendChild(label1);
// form.appendChild(label2);
// form.appendChild(label3);
// form.appendChild(button);
// label1.innerText='отфильтровывает пользователей со статусом false (осталяет со статусом false)';
// label2.innerText='оставляет старше 29 лет включительно';
// label3.innerText='оставляет тех у кого город киев';
// label1.appendChild(checkbox1);
// label2.appendChild(checkbox2);
// label3.appendChild(checkbox3);
// button.onclick=(ev)=>{
//     ev.preventDefault();
//
//     if(checkbox1.checked){
//         copyArray=copyArray.filter(value=>!value.isMarried)
//     }
//     if(checkbox2.checked){
//          copyArray=copyArray.filter(value=>value.age>29)
//     }
//     if(checkbox3.checked){
//          copyArray=copyArray.filter(value=>value.city==='Kyiv')
//     }
//     arr(copyArray);
//     arr(copyArray);
//     arr(copyArray);
// }
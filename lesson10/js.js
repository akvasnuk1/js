// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// let text=document.getElementById('area');
// text.value=localStorage.getItem('text');
// text.oninput=(ev)=>{
//    localStorage.setItem('text',ev.target.value);
// }
// localStorage.setItem('textarea',textarea);
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// let forms=document.forms.forma;
// for (const form of forms) {
//     form.value=localStorage.getItem(form.id);
//     if(form.type==='checkbox'||form.type==='radio') {
//         if (form.value==='true') {
//             form.setAttribute('checked', 'checked');
//         }
//     }
// }
// for (const form of forms) {
//     form.oninput=()=>{
//         if(form.type==='checkbox'||form.type==='radio'){
//             form.checked ? form.value=true : form.value=false;
//         }
//         localStorage.setItem(form.id, form.value);
//     }
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// left=document.getElementById('left');
// right=document.getElementById('right');
// save=document.getElementById('save');
// text=document.getElementById('text');
// save.onclick=()=>{
//     localStorage.setItem(localStorage.length+1,text.value)
// }
// index=localStorage.length;
// console.log(index);
// left.onclick=()=>{
//         text.value=localStorage.getItem(index);
//     index--;
//         console.log(index);
//         if(index===0){
//             index++;
//         }
// }
// right.onclick=()=>{
//         text.value=localStorage.getItem(index);
//         index++;
//     if(index>localStorage.length){
//         index--;
//     }
//     console.log(index);
// }
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта]
let forms=document.forms.forma;
let button=document.getElementById('sub')
let pearson={};

button.onclick=(ev)=>{
    ev.preventDefault();
    for (const form of forms) {
        form.oninput=()=>{
          localStorage.setItem(localStorage.length,form.value);
        }
    }
}
console.log(pearson);

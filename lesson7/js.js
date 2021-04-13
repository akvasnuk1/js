/*
-  Створити функцію конструктор для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результату
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]

}*/

/*function Tags(titleOfTag,action,attrs='Для этого тега доступны универсальные атрибуты и события.'){
    this.titleOfTag=titleOfTag;
    this.action=action;
    this.attrs=attrs;
}*/
/*let titleofTag='<a>';
let action='тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
let attributes=[
    {titleOfAttr:'accesskey'},
    {actionOfAttr:'Активация ссылки с помощью комбинации клавиш'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Атрибут accesskey позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки'}
    {titleOfAttr:'coords'},
    {actionOfAttr:'Устанавливает координаты активной области.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Атрибут coords позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки'}
    {titleOfAttr:'download'},
    {actionOfAttr:'редлагает скачать указанный по ссылке файл.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Атрибут download позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки'}
    {titleOfAttr:'href'},
    {actionOfAttr:'Задает адрес документа, на который следует перейти.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Атрибут href позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки'}
]
const TagA=new Tags(titleofTag,action,attributes);
console.log(TagA);
titleofTag='<div>';
action='Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей';
attributes1=[
    {titleOfAttr:'align'},
    {actionOfAttr:'Выравнивание содержимого контейнера <div> по краю.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'<div align="center | left | right | justify">...</div>'}
    {titleOfAttr:'title'},
    {actionOfAttr:'обавляет всплывающую подсказку к содержимому..'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Добавляет поясняющий текст к контейнеру <div> в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом. '}
]
const Tagdiv=new Tags(titleofTag,action,attributes1);
console.log(Tagdiv);*/
/*
let titleofTag='<h1>';
let action='HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ';
let attributes2=[
    {titleOfAttr:'align'},
    {actionOfAttr:'Выравнивание содержимого контейнера <div> по краю.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'<div align="center | left | right | justify">...</div>'}
]
const Tagh1=new Tags(titleofTag,action,attributes2);
console.log(Tagh1);*/
/*
let titleofTag='<span>';
let action='ег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов ';

const Tagh1=new Tags(titleofTag,action);
console.log(Tagh1)*/
/*
let titleofTag='<input>';
let action='Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
let attributes2=[
    {titleOfAttr:'accept'},
    {actionOfAttr:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleOfAttr:'accesskey'},
    {actionOfAttr:'Переход к элементу с помощью комбинации клавиш. '},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleOfAttr:'align'},
    {actionOfAttr:'Определяет выравнивание изображения. '},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}
]
const Taginput=new Tags(titleofTag,action,attributes2);
console.log(Taginput)*/
/*
let titleofTag='<form>';
let action='Связывает поле с формой по её идентификатору.';
let attributes2=[
    {titleOfAttr:'Идентификатор формы (значение атрибута id тега <form>.'},
    {actionOfAttr:'Идентификатор формы (значение атрибута id тега <form>.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Идентификатор формы (значение атрибута id тега <form>.'},
]
const Tagform=new Tags(titleofTag,action,attributes2);
console.log(Tagform)*/
/*
let titleofTag='<option>';
let action='ег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
let attributes2=[
    {titleOfAttr:'disabled'},
    {actionOfAttr:'Заблокировать для доступа элемент списка.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Блокирует элемент списка для его выбора. '},
]
const Tagoption=new Tags(titleofTag,action,attributes2);
console.log(Tagoption)*/
/*
let titleofTag='<select>';
let action='Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее';
let attributes2=[
    {titleOfAttr:'disabled'},
    {actionOfAttr:'Заблокировать для доступа элемент списка.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Блокирует элемент списка для его выбора. '},
]
const Tagselect=new Tags(titleofTag,action,attributes2);
console.log(Tagselect)*/
/*Створити класс  для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результату
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]

}*/
/*
class Tags{
    constructor(titleOfTag,action,attrs='Для этого тега доступны универсальные атрибуты и события.') {
        this.titleofTag=titleOfTag;
        this.action=action;
        this.attrs=attrs;
    }
}
let titleofTag='<a>';
let action='тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
let attributes=[
    {titleOfAttr:'accesskey'},
    {actionOfAttr:'Активация ссылки с помощью комбинации клавиш'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Атрибут accesskey позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки'},
    {titleOfAttr:'coords'},
    {actionOfAttr:'Устанавливает координаты активной области.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Атрибут coords позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки'},
    {titleOfAttr:'download'},
    {actionOfAttr:'редлагает скачать указанный по ссылке файл.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Атрибут download позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки'},
    {titleOfAttr:'href'},
    {actionOfAttr:'Задает адрес документа, на который следует перейти.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Атрибут href позволяет активировать ссылку с помощью некоторого сочетания клавиш с заданной в коде ссылки'}
]
const TagA=new Tags(titleofTag,action,attributes);
console.log(TagA);
titleofTag='<div>';
action='Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей';
attributes1=[
    {titleOfAttr:'align'},
    {actionOfAttr:'Выравнивание содержимого контейнера <div> по краю.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'<div align="center | left | right | justify">...</div>'},
    {titleOfAttr:'title'},
    {actionOfAttr:'обавляет всплывающую подсказку к содержимому..'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Добавляет поясняющий текст к контейнеру <div> в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом. '}
]
const Tagdiv=new Tags(titleofTag,action,attributes1);
console.log(Tagdiv);
titleofTag='<h1>';
action='HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. ';
 attributes3=[
    {titleOfAttr:'align'},
    {actionOfAttr:'Выравнивание содержимого контейнера <div> по краю.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'<div align="center | left | right | justify">...</div>'}
]
const Tagh1=new Tags(titleofTag,action,attributes3);
console.log(Tagh1);
 titleofTag='<input>';
action='Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
 attributes4=[
    {titleOfAttr:'accept'},
    {actionOfAttr:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleOfAttr:'accesskey'},
    {actionOfAttr:'Переход к элементу с помощью комбинации клавиш. '},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleOfAttr:'align'},
    {actionOfAttr:'Определяет выравнивание изображения. '},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}
]
const Taginput=new Tags(titleofTag,action,attributes4);
console.log(Taginput)
 titleofTag='<form>';
 action='Связывает поле с формой по её идентификатору.';
 attributes5=[
    {titleOfAttr:'Идентификатор формы (значение атрибута id тега <form>.'},
    {actionOfAttr:'Идентификатор формы (значение атрибута id тега <form>.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Идентификатор формы (значение атрибута id тега <form>.'},
]
const Tagform=new Tags(titleofTag,action,attributes5);
console.log(Tagform)

titleofTag='<option>';
 action='ег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
attributes6=[
    {titleOfAttr:'disabled'},
    {actionOfAttr:'Заблокировать для доступа элемент списка.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Блокирует элемент списка для его выбора. '},
]
const Tagoption=new Tags(titleofTag,action,attributes6);
console.log(Tagoption)

titleofTag='<select>';
 action='Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее';
 attributes7=[
    {titleOfAttr:'disabled'},
    {actionOfAttr:'Заблокировать для доступа элемент списка.'},
    {browserSupport:'Internet Explorer,Chrome,Opera,Safari,Firefox,Android,iOS'},
    {MoreaboutTag:'Блокирует элемент списка для его выбора. '},
]
const Tagselect=new Tags(titleofTag,action,attributes7);
console.log(Tagselect)*/
/*
-- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*/
/*
let car={
    model:'BMW X0',
    manufacturer:'BMW',
    graduationYear:2021,
    MAxSpeed:200,
    EngineCapacity:1.5,
    drive:function (){
        console.log(`їдемо зі швидкістю ${this.MAxSpeed} на годину`)},
info:function (){
        if(this.driver){
            console.log(`Information about car:\n
    model:${this.model},\n
    manufacturer:${this.manufacturer},\n
    graduationYear:${this.graduationYear},\n
    MAxSpeed:${this.MAxSpeed},\n
    EngineCapacity:${this.EngineCapacity}\n
    Driver:${this.driver}`)
        }else {
            console.log(`Information about car:\n
    model:${this.model},\n
    manufacturer:${this.manufacturer},\n
    graduationYear:${this.graduationYear},\n
    MAxSpeed:${this.MAxSpeed},\n
    EngineCapacity:${this.EngineCapacity}`)
        }
    },
    increaseMaxSpeed:function (newSpeed){
        this.MAxSpeed+=newSpeed;
    },
    changeYear:function (newValue){
        this.graduationYear=newValue;
    },
    addDrive:function (driver){
        this.driver=driver;
    }
}
car.drive();
car.info();
car.increaseMaxSpeed(12);
car.changeYear(2001);
car.info();
let obj={
    driver:'Vasya'
}
car.addDrive(obj.driver);
car.info();*/
/*
РОБОТА В АУДИТОРІЇ*/
/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*/
/*
function Car(model,manufacturer,graduationYear,MAxSpeed,EngineCapacity){
    this.model=model;
    this.manufacturer=manufacturer;
    this.graduationYear=graduationYear;
    this.MaxSpeed=MAxSpeed;
    this.EngineCapacity=EngineCapacity;
    this.drive=function (){
        console.log(`їдемо зі швидкістю ${this.MaxSpeed} на годину`);
    };
    this.info=function (){
        if(this.driver){
            console.log(`Information about car:\n
    model:${this.model},\n
    manufacturer:${this.manufacturer},\n
    graduationYear:${this.graduationYear},\n
    MAxSpeed:${this.MaxSpeed},\n
    EngineCapacity:${this.EngineCapacity}\n
    Driver:${this.driver}`)
        }else {
            console.log(`Information about car:\n
    model:${this.model},\n
    manufacturer:${this.manufacturer},\n
    graduationYear:${this.graduationYear},\n
    MAxSpeed:${this.MaxSpeed},\n
    EngineCapacity:${this.EngineCapacity}`)
        }
    };
    this.increaseMaxSpeed=function (newSpeed){
        this.MaxSpeed+=newSpeed;
    }
    this.changeYear=function (newValue){
        this.graduationYear=newValue;
    }
    this.addDriver=function (driver){
        this.driver=driver;
    }
}
let car='TESLA X1000';
let manufacture='TESLA';
let year=2021;
let newSpeed=300;
let capacity=5;
let Cars=new Car(car,manufacture,year,newSpeed,capacity);
Cars.drive();
Cars.info();
Cars.increaseMaxSpeed(15);
Cars.changeYear(2024);
Cars.info();
let obj={driver:'Petrovich'}
Cars.addDriver(obj.driver);
Cars.info();*/
/*
- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*/
/*
class Car{
    constructor(model,manufacturer,graduationYear,MAxSpeed,EngineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.graduationYear = graduationYear;
        this.MaxSpeed = MAxSpeed;
        this.EngineCapacity = EngineCapacity;
    }
        drive (){
            console.log(`їдемо зі швидкістю ${this.MaxSpeed} на годину`);
        };
        info(){
            if(this.driver){
                console.log(`Information about car:\n
    model:${this.model},\n
    manufacturer:${this.manufacturer},\n
    graduationYear:${this.graduationYear},\n
    MAxSpeed:${this.MaxSpeed},\n
    EngineCapacity:${this.EngineCapacity}\n
    Driver:${this.driver}`)
            }else {
                console.log(`Information about car:\n
    model:${this.model},\n
    manufacturer:${this.manufacturer},\n
    graduationYear:${this.graduationYear},\n
    MAxSpeed:${this.MaxSpeed},\n
    EngineCapacity:${this.EngineCapacity}`)
            }
        };
        increaseMaxSpeed(newSpeed){
            this.MaxSpeed+=newSpeed;
        }
        changeYear(newValue){
            this.graduationYear=newValue;
        }
        addDriver(driver){
            this.driver=driver;
        }
}


let car='TESLA X1000';
let manufacture='TESLA';
let year=2021;
let newSpeed=300;
let capacity=5;
let Cars=new Car(car,manufacture,year,newSpeed,capacity);
Cars.drive();
Cars.info();
Cars.increaseMaxSpeed(15);
Cars.changeYear(2024);
Cars.info();
let obj={driver:'Petrovich'}
Cars.addDriver(obj.driver);
Cars.info();*/
/*
-створити класс попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом*/
/*
class Cinderella {
    constructor(name,age,footsize) {
        this.name=name;
        this.age=age;
        this.footsize=footsize;
    }
}
class Prince{
    constructor(name,age,ShoeFindSize) {
        this.name=name;
        this.age=age;
        this.ShoeFindSize=ShoeFindSize;
    }
    findCinderella (array){
        for (const arrayElement of array) {
            if(arrayElement.footsize===this.ShoeFindSize){
                console.log(`I find my Cinderella her name is ${arrayElement.name} `)
            }else{
                console.log("not found");
            }
        }
    }
}
let cinderella1 =new Cinderella("Ana",12,30);
let cinderella2 =new Cinderella("Tanya",15,42);
let cinderella3 =new Cinderella("Anna",22,40);
let cinderella4 =new Cinderella("Ola",23,35);
let cinderella5 =new Cinderella("Nana",16,36);
let cinderella6 =new Cinderella("Natalka",21,37);
let cinderella7 =new Cinderella("Shiki",26,38);
let cinderella8 =new Cinderella("Valen",28,39);
let cinderella9 =new Cinderella("Mira",29,42);
let cinderella10 =new Cinderella("Irina",30,44);
let Cinderels=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];

let prince=new Prince('Ivan',12,36);
prince.findCinderella(Cinderels);*/
/*
-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить*/
/*
function Cinderella(name,age,footSize){
    this.name=name;
    this.age=age;
    this.footsize=footSize;
}
function Prince(name,age,findSize){
    this.name=name;
    this.age=age;
    this.findSize=findSize;
    this.findCinderella=function(array) {
        for (const arrayElement of array) {
            if (arrayElement.footsize === this.findSize) {
                console.log(`I find my Cinderella her name is ${arrayElement.name} `)
            }
        }
    }
}
let cinderella1 =new Cinderella("Ana",12,30);
let cinderella2 =new Cinderella("Tanya",15,42);
let cinderella3 =new Cinderella("Anna",22,40);
let cinderella4 =new Cinderella("Ola",23,35);
let cinderella5 =new Cinderella("Nana",16,36);
let cinderella6 =new Cinderella("Natalka",21,37);
let cinderella7 =new Cinderella("Shiki",26,38);
let cinderella8 =new Cinderella("Valen",28,39);
let cinderella9 =new Cinderella("Mira",29,42);
let cinderella10 =new Cinderella("Irina",30,44);
let Cinderels=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10];
let prince=new Prince('Vasya',12,35);
prince.findCinderella(Cinderels)*/

/*Реалізовуємо свій компютерний магазин.
===
Необхідно реалізувати базовий клас комютера. Який має лише параметри:
    Оперативна память.
    Потужність процесора. (цифра від 0 до 1000)
Назва.
    В кожного компютера має бути метод включання.
===
Від базового компютрера треба реалізувати ноутбук.
    Він має нову властивість дюймаж монітора.

    У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
===
Від ноутбука потрібно зробити ультрабук.
    Він має нову змінну ваги.
    При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
===
Від базвого класу потрібно створити базовий ПК.
    В нього має бути новий метод запуску ігор.
    Кількість FPS визначається як потужність / опервтивку.
    Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

Компютер можна апгрейдити.
    Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
    Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
    Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
===
Від базового ПК необхідно зробити ігнорий ПК.
    Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
    При запуску однієї гри потужніть процесора має падати на 0.1%.
Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
    що на цьому відрі ігри не запускаються.*/

/*
class Computer{
    constructor(RAM,CPUPower,name) {
        this.RAM=RAM;
        CPUPower<=1000&&CPUPower>=0?this.CPUPower=CPUPower:continue;
        this.name=name;

    }
    upgradePc(CPUPower){
        if(CPUPower<=(this.CPUPower/100)*10){
         this.CPUPower+=CPUPower;
         console.log(this.CPUPower);
        }else{
            console.log("Over a 10%");
        }
    }
    upgradePC2(RAM){
        if(RAM===2){
            this.RAM=this.RAM*2;
            console.log(this.RAM);
        }else{
            console.log("Increase only in to 2 and reduce not accept");
        }
    }
}
class laptop extends  Computer{
    constructor(RAM,CPUPower,name,sizeOfMonitor) {
        super(RAM,CPUPower,name);
        this.sizeOFMonitor=sizeOfMonitor;
        this.PowerofBatter=Math.floor(this.CPUPower/(this.sizeOFMonitor*this.RAM));
    }
}
class ultraLaptop extends laptop{
    constructor(RAM,CPUPower,name,sizeOfMonitor,weight) {
        super(RAM,CPUPower,name,sizeOfMonitor);
        this.weight=weight;
        this.weight>2?console.log(' батарея тримає менше ніж 4 години'):console.log('all good');
    }
}
class basePC extends Computer{
    constructor(RAM,CPUPower,name,gameName) {
        super(RAM,CPUPower,name);
        this.gameName=gameName;
        this.numberOfFps=Math.floor(this.CPUPower/this.RAM);
        console.log(`You are Playing ${this.gameName} with ${this.numberOfFps} FSP`);
    }

}
class GamePc extends basePC{
    constructor(RAM,CPUPower,name,gameName) {
        super(RAM,CPUPower,name,gameName);
        this.numberOfFps=this.numberOfFps*2;
    }
    gamesName(){
        console.log(this.CPUPower);
        let i=this.gameName.length;
        console.log(i);
        while (i!=0){
            this.CPUPower=this.CPUPower-this.CPUPower/100*0.1;
            i--;
        }
        console.log(this.CPUPower);
    }
    Process(){
        if(this.CPUPower<500&&this.RAM<8){
            console.log("на цьому відрі ігри не запускаються")
        }else{
            console.log("на цьому відрі ігри запускаються")
        }
    }
}
let a=new GamePc(12,1000,'Asus',['dada','dasdada']);
a.gamesName();
a.Process()
class NewPearson{
    static boolean=true;
    constructor(pearson) {
        this.pearson=pearson;
    }
    func(){
        console.log(NewPearson.boolean);
    }
}
let c=new NewPearson('Vasya');
console.log(c);
let obj={
    status:123,
    bool:true,
    validator:'daa'
};
let result=JSON.stringify(obj);
let results=JSON.parse(result)
console.log(results);*/

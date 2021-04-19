// function getUP(value,cb) {
//     setTimeout(()=>{
//         if(value){
//             cb(null,"I get UP");
//         }else{
//             cb("I will sleep all day");
//         }
//     },Math.floor(Math.random()*(1000-100)+100))
// }
// function goBreakfast(value,cb){
//     setTimeout(()=>{
//         if(value){
//             cb(null,"I go breakfast");
//         }else{
//             cb("I don't have time for breakfast");
//         }
//     },Math.floor(Math.random()*(1000-100)+100))
// }
// function doExercise(value,cb){
//     setTimeout(()=>{
//         if(value){
//             cb(null,"I do exercise");
//         }else{
//             cb("I don't want do exercise");
//         }
//     })
// }
// function gotoUniversity(value,cb){
//     setTimeout(()=>{
//         if(value){
//             cb(null,'i go to University');
//         }else{
//             cb("I don't want to University");
//         }
//     },Math.floor(Math.random()*(1000-100)+100))
// }
// function doHomework(value,cb){
//     setTimeout(()=>{
//         if(value){
//             cb(null,"I do homework");
//         }else{
//             cb("I don't do homework");
//         }
//     },Math.floor(Math.random()*(1000-100)+100))
// }
// function watchLecture(value,cb){
//     setTimeout(()=>{
//         if(value){
//             cb(null,'I go to watch lecture');
//         }else{
//             cb("I don't want to watch lecture");
//         }
//     })
// }
// function doHomeworkAfterLecture(value,cb){
//     setTimeout(()=>{
//         if(value){
//             cb(null,"I do homework");
//         }else{
//             cb("I don't want homework");
//         }
//     })
// }
// getUP(true,(err,data)=>{
//   if(!err){
//       console.log(data);
//       goBreakfast(true,(err,data)=>{
//           if(!err){
//               console.log(data);
//               doExercise(true,(err,data)=>{
//                   if(!err){
//                       console.log(data);
//                       gotoUniversity(true,(err,data)=>{
//                           if(!err){
//                               console.log(data);
//                               doHomework(true,(err,data)=>{
//                                   if(!err){
//                                       console.log(data);
//                                       watchLecture(true,(err,data)=>{
//                                           if(!err){
//                                               console.log(data);
//                                               doHomeworkAfterLecture(true,(err,data)=>{
//                                                   if(!err){
//                                                       console.log(data);
//                                                   }else{
//                                                       console.log(err);
//                                                   }
//                                               })
//                                           }else{
//                                               console.log(err);
//                                           }
//                                       })
//                                   }else{
//                                       console.log(err);
//                                   }
//                               })
//                           }else{
//                               console.log(err);
//                           }
//                       })
//                   }else{
//                       console.log(err);
//                   }
//               })
//           }else{
//               console.log(err);
//           }
//       })
//   }else{
//       console.log(err);
//   }
// });
// function getUP(value) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("I get UP");
//             }else{
//                 reject("I will sleep all day");
//             }
//         },Math.floor(Math.random()*(1000-100)+100))
//     })
// }
// function goBreakfast(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("I go breakfast");
//             }else{
//                 reject("I don't have time for breakfast");
//             }
//         },Math.floor(Math.random()*(1000-100)+100))
//     })
// }
// function doExercise(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("I do exercise");
//             }else{
//                 reject("I don't want do exercise");
//             }
//         })
//     })
// }
// function gotoUniversity(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve('i go to University');
//             }else{
//                 reject("I don't want to University");
//             }
//         },Math.floor(Math.random()*(1000-100)+100))
//     })
// }
// function doHomework(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("I do homework");
//             }else{
//                 reject("I don't do homework");
//             }
//         },Math.floor(Math.random()*(1000-100)+100))
//     })
// }
// function watchLecture(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve('I go to watch lecture');
//             }else{
//                 reject("I don't want to watch lecture");
//             }
//         })
//
//     })
// }
// function doHomeworkAfterLecture(value){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(value){
//             resolve("I do lecture homework");
//         }else{
//             reject("I don't want homework");
//         }
//     })
// })
// }
// getUP(true).then((value)=>{
//     console.log(value);
//     return goBreakfast(value);
// }).then((value => {
//     console.log(value);
//     return doExercise(value);
// })).then(value => {
//     console.log(value);
//     return gotoUniversity(value);
// }).then(value => {
//     console.log(value);
//     return doHomework(value);
// }).then(value => {
//     console.log(value);
//     return watchLecture(value);
// }).then(value => {
//     console.log(value);
//     return doHomeworkAfterLecture(value);
// }).then(value => {
//     console.log(value);
// }).catch(error=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("I don't want do anything");
// })
// function getUP(value) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("I get UP");
//             }else{
//                 reject("I will sleep all day");
//             }
//         },Math.floor(Math.random()*(1000-100)+100))
//     })
// }
// function goBreakfast(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("I go breakfast");
//             }else{
//                 reject("I don't have time for breakfast");
//             }
//         },Math.floor(Math.random()*(1000-100)+100))
//     })
// }
// function doExercise(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("I do exercise");
//             }else{
//                 reject("I don't want do exercise");
//             }
//         })
//     })
// }
// function gotoUniversity(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve('i go to University');
//             }else{
//                 reject("I don't want to University");
//             }
//         },Math.floor(Math.random()*(1000-100)+100))
//     })
// }
// function doHomework(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve("I do homework");
//             }else{
//                 reject("I don't do homework");
//             }
//         },Math.floor(Math.random()*(1000-100)+100))
//     })
// }
// function watchLecture(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value){
//                 resolve('I go to watch lecture');
//             }else{
//                 reject("I don't want to watch lecture");
//             }
//         })
//
//     })
// }
// function doHomeworkAfterLecture(value){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(value){
//             resolve("I do lecture homework");
//         }else{
//             reject("I don't want homework");
//         }
//     })
// })
// }
// async function myDay(){
//     try {
//         let step=await getUP(true);
//         console.log(step);
//         let step2=await goBreakfast(true);
//         console.log(step2);
//         let step3=await doExercise(true);
//         console.log(step3);
//         let step4=await gotoUniversity(true);
//         console.log(step4);
//         let step5=await doHomework(true);
//         console.log(step5);
//         let step6=await watchLecture(true);
//         console.log(step6);
//         let step7=await doHomeworkAfterLecture(true);
//         console.log(step7);
//     }catch (error){
//         console.log(error);
//     }
//
// }
// myDay();
/*
Реалізувати друкарську машинку.
    У вас є текст "Hello World".
    Ваша функція має друкувати цей текст по 1 симоволу в браузері.
    КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
    Цим самим ви маєте симулювати написання даного тексту юзером.
    Приклад: "Hello"
Затримки:
    H (затримка 0.6)
e (затримка 0.1)
l (затримка 0.3)
l (затримка 0.7)
о (затримка 1)*/
// function Time(string){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             if (string) {
//                 resolve(string)
//             } else {
//                 reject("error");
//             }
//         },Math.floor(Math.random() * (1000 - 100) + 100))
//     })
// }
// string="Hello";
//
// async function result(){
//     for (const argument of string) {
//         console.log(await Time(argument));
//     }
// }
// result()
// let s=0;
// for (const elements of string) {
//     setTimeout(()=>{
//         console.log(elements);
//     },s+=Math.floor(Math.random() * (1000 - 100) + 100))
// }


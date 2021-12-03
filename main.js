/*
Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

    - Напишіть код,  котрий :
-- отримує текст з параграфа з id "content"*/

let element = document.getElementById('content');
console.log(element);

// -- отримує текст з блоку з id "rules"
let element1 = document.getElementById('rules');
console.log(element1);

// -- замініть текст параграфа з id 'content' на будь-який інший
let element2 = document.getElementById('content');
//element2.innerHTML = 'Lorem ipsum'
//console.log(element2)

// -- замініть текст параграфа з id 'rules' на будь-який інший
let element3 = document.getElementById('rules');
//element3.innerHTML = 'lorem ipsum'
//console.log(element3);

// -- змініть кожному елементу колір фону на червоний
let element4 = document.body.children;
/*for (const element4Element of element4) {
    element4Element.style.backgroundColor = 'red';
}*/

// -- змініть кожному елементу колір тексту на синій
let element5 = document.body.children;
for (const element5Element of element5) {
    element5Element.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let clas = document.getElementById('rules');
console.log(clas.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний*/
let element6 = document.getElementsByClassName('fc_rules');
for (const el of element6) {
    el.style.color = 'red' }


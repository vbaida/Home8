/*
Класна робота
Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який :
a) додає клас з назвою групи, елементу з ід main_header*/
let elem = document.getElementById('main_header');
    elem.classList.toggle('target')


//b) робить шириниу елементу ul 400px
let elem1 = document.getElementsByTagName('ul');
for (const el of elem1) {
    el.style.width = '400px'
    }
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elem2 = document.getElementsByClassName('linkList');
for (const el1 of elem2) {
    el1.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let elem3 = document.getElementsByClassName('listElement2');
for (const el3 of elem3) {
    el3.innerHTML = '<a href="#">new tekst</a>'
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
let elem4 = document.getElementsByTagName('li');
for (const el4 of elem4) {
    el4.style.background = 'grey'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let elem5 = document.getElementsByTagName('a');
for (const el5 of elem5) {
    el5.classList.toggle('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let elem6 = document.getElementsByTagName('a')
for (const el6 of elem6) {
       if (el6.innerText === 'link3') {
        el6.style.fontSize = '40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let elem7 = document.getElementsByTagName('a');
for (const el7 of elem7) {
    console.log(el7)
    el7.classList.toggle('element_XXX');
    el7.innerText = 'XXX'}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*let elem8 = document.getElementsByClassName('sub-header');
for (const el8 of elem8) {
    el8.style.background = prompt('Ввести колір фону: (red, blue, green)')
   }*/
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let elem9 = document.getElementsByClassName('sub-header');
// for (const el9 of elem9) {
//     if (el9.innerText === 'content 2 segment')
//     el9.style.color = prompt('Ввести колір тексту: (red, blue, green)')
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let elem10 = document.getElementsByClassName('content_1');
// for (const el10 of elem10) {
//        el10.innerText = prompt('Введіть текст')}

// l) отримати елементи p та змінити їм padding на 20px
let elem11 = document.getElementsByTagName('p');
for (const el11 of elem11) {
    el11.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)*/
let elem12 = document.getElementsByClassName('text2');
for (const el12 of elem12) {
    el12.classList.toggle('text2');
    el12.classList.toggle('mon-year');
}

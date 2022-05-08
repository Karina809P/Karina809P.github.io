const selects = document.querySelectorAll('select');;

const registrationImage = document.getElementById('logo.img');
const textToChange = document.getElementById('text-to-change');
const text = document.getElementById('text1');
const texti=document.getElementById('text2')
const textii=document.getElementById('text3')
const textiii=document.getElementById('text4')

selects[1].addEventListener('change', function() {

  switch(true) {
    case this.value === 'JavaScript' : registrationImage.src = "./img/Group 1.png";
    textToChange.textContent=' Опис курсу JavaScript '
    text.textContent='JavaScript ("джаваскрипт") - це скриптова мова програмування, яка використовується у створенні клієнтської сторони веб-сайту з метою "оживлення" сторінки і додавання їй інтерактивності. Також її застосовують на серверній стороні для роботи з базою даних та програмною логікою. Настільки широка сфера використання цієї мови говорить про її затребуваність на IT-ринку.'
    texti.textContent='17 годин'
    textii.textContent=' 8 занять'
    textiii.textContent='250€'
    break;
    case this.value === 'Java' : registrationImage.src = "./img/Group 2.png";
    textToChange.textContent='Опис курсу Java '
    text.textContent='Цей курс призначений для тих, хто починає вивчати Java. Ми почнемо з самих азів: компіляція та запуск Java-програм, синтаксис мови, система типів, основи об`єктно-орієнтованого програмування. Далі обговоримо найважливіші класи стандартної бібліотеки, включаючи нововведення Java 8. Для закріплення знань у курсі передбачені контрольні питання та практичні завдання.'
    texti.textContent='20 годин'
    textii.textContent='6 занять '
    textiii.textContent='275€'
    break;
    case this.value === 'C++' : registrationImage.src = "./img/c++.jpg";
    textToChange.textContent='Опис курсу C++'
    text.textContent='C++ - одна з найскладніших мов, яка вимагатиме від вас усидливості та терпіння, але ваша затребуваність завжди буде на висоті. Ви зможете створювати топові продукти будь-якої складності, адже на C++ можна писати все: драйвери пристроїв, програми для пристроїв, десктопні прикладні програми: ігри, бізнес-додатки, сервери для мережевих служб та багато іншого.'
    texti.textContent='34 години'
    textii.textContent='12 занять '
    textiii.textContent='340€'
    break;
    
}
 }) 
        
"use strict";
// const somePoints = 0;

// for (let i = 0; i <= 10; ++i) {
//   console.log(`Пункт № ${i};`);
// }

// if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
//   //     false      ||  (false && true) || false)

//   console.log("yes");
// }

// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

// const calcDivision = (a, b) => {
//   let rezult = a / b;
//   if (isFinite(rezult) && !isNaN(rezult)) {
//     return console.log(`Результат ділення: ${rezult}`);
//   }
// };
// calcDivision(20, 10);
// calcDivision(20, "10");
// calcDivision(100, 0);
// calcDivision(NaN, 3);
// calcDivision(3, 2);
// calcDivision("Text", "text");
// calcDivision(2, 110);
// calcDivision("10", 2);
// calcDivision();
// calcDivision(2);

//Створіть масив даних - 5 елементів, один з яких число 10
//Обробіть масив за допомогою методу перебору
//Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

// const someArray = [2, "10", 10, 9, "hello"];

// someArray.forEach((item, index) => {
//   if (item === 10) {
//     console.log(`Знайдено число: ${item} з індексом: ${index}`);
//   }
// });

// HW23 /////////////////////HW23/////// // HW23/////////////////////////////////  // HW23

// Задача №1
// Отримати в константу елемент <body>

// Задача №1
// const bodyElement = document.body;
// console.log(bodyElement);

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись
// як параметр функції, також мати значення за замовченням)

// // Задача №2
// const newElement = document.createElement(`ul`);
// newElement.innerHTML = `<li></li>`;

// const body = document.querySelector(`body`);
// if (body) {
//   body.prepend(newElement);
// }

// console.log(newElement);

// function list(q = 5) {
//   const body = document.querySelector(`body`);
//   let newElement = `<ul>`;

//   for (let i = 1; i <= q; i++) {
//     newElement += `<li>${i}</li>`;
//   }
//   newElement += `</ul>`;
//   body.insertAdjacentHTML("afterbegin", newElement);
// }

// console.log(list(9));

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// Задача №3

// const bodyElement = document.body;

// document.body.classList.add("loaded");

// if (document.body.classList.contains("loaded")) {
//   document.body.style.color = `green`;
// }

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента
// на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// Задача №4
// const itemElements = document.querySelectorAll(".item");

// itemElements.forEach((item) => {
//   item.classList.add("active");
// });

// if (itemElements.length) {
//   itemElements.forEach((itemElements, index) => {
//     itemElements.innerHTML = `<span>Елемент №${index + 1}</span>`;
//   });
// }
// console.log(itemElements);

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// Задача №5
// const button = document.querySelector(".button");
// function scrollToButton(element) {
//   if (element) {
//     element.scrollIntoView({
//       block: "start",
//       behavior: "smooth",
//     });
//   }
// }
// scrollToButton(button);
// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// Задача №6
// const link = document.querySelector(`.link`);

// if (link) {
//   link.setAttribute(`data-sending`, 100);
//   const value = parseFloat(link.getAttribute(`data-sending`));
//   console.log(value);

//   if (value < 200) {
//     link.style.cssText = `color: red`;
//   }
// }
// console.log(link);
// const dataLink = document.querySelector(`.link`);

// if (dataLink.getAttribute(`name`, `value`) && value < 200) {
//   dataLink.style.cssText = `color: red`;
// }

// HW2_24   HW2_24    HW2_24    HW2_24

///////////////////////////HW2_24///////////////////////////  HW2_24  //////////
// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

// document.addEventListener("click", addHtmlClass);

// function addHtmlClass(e) {
//   const targetElement = e.target;

//   if (targetElement.closest(".item")) {
//     const currentElement = targetElement.closest(".item");
//     changeClass(currentElement);
//   }
// }

// function changeClass(element) {
//   element.classList.toggle("active");
// }
// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

// body {
//   opacity: 0;
//   transition: opacity 0.5s ease;
// }

// body.loaded {
//   opacity: 1;
// }

// window.addEventListener("load", pageLoaded);
// function pageLoaded(event) {
//   document.body.classList.add("loaded");
// }
// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

// const header = document.querySelector("header");
// const footer = document.querySelector("footer");

// header.addEventListener("mouseenter", changeFooterColor);
// header.addEventListener("mouseleave", resetFooterColor);

// function changeFooterColor(e) {
//   footer.style.backgroundColor = "green";
// }
// function resetFooterColor(e) {
//   footer.style.backgroundColor = "";
// }
// Задача №4
// Дано в html: текст, елемент з класом item, текст.
// Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент
// в елементі item виводячи цифру яка
// збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має
// працювати інтервал має задаватись
// в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо
// до елементу item (його видно),
// і не запускатись повторно.

// const item = document.querySelector(".item");

// const options = {
//   root: null,
//   rootMargin: "0px 0px 0px 0px",
//   threshold: 0.3,
// };

// let onItem = false;

// const startInterval = (entries, options) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting && !onItem) {
//       let value = 0;
//       const delay = parseFloat(item.dataset.delay) || 1000;
//       const maxValue = +item.dataset.maxValue || 10;
//       onItem = true;
//       const interval = setInterval(() => {
//         item.textContent = value;
//         value++;
//         if (value >= maxValue) {
//           clearInterval(interval);
//         }
//       }, delay);
//     }
//   });
// };
// let observer = new IntersectionObserver(startInterval, options);
// let target = document.querySelector(".item");
// observer.observe(target);

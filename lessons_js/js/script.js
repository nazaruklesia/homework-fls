// const somePoints = 0;

// for (let i = 0; i <= 10; ++i) {
//   console.log(`Пункт № ${i};`);
// }

if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
  //     false      ||  (false && true) || false)

  console.log("yes");
}

// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку

// const calcDivision = (a, b) => {
//   if (
//     a !== 0 &&
//     b !== 0 &&
//     typeof a === "number" &&
//     !Number.isNaN(a) &&
//     typeof b === "number" &&
//     !Number.isNaN(b)
//   ) {
//     const resultDivision = a / b;
//     console.log(`Результат ділення: ${resultDivision}`);
//   } else if (a === undefined || b === undefined) {
//     console.log(`Результат ділення: потрібно ввести дані`);
//   } else {
//     console.log(`Результат ділення: упс, щось пішло не так`);
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

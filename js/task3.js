//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

const str = "Hallo";
const reverse = str.split('').reverse().join('');

console.log(reverse);
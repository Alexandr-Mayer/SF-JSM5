//Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
//Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let x;

x = null;

if (typeof x === "number" && !isNaN(x)) {
    console.log(x + " — число");
} else if (typeof x === "boolean") {
    console.log(x + " — логический тип");
} else if (typeof x === "string") {
    console.log(x + " — строка");
} else {
    console.log("Тип x не определен");
}
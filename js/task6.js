//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.


let arr = [2, 5, 2, 2, 2];
let result = true;
arr.forEach(function (item, index, array) {
    result &&= arr[0] === item ? true : false
});
console.log(result);





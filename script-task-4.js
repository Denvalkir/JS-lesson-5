//     Напишите функцию, которая принимает массив строк и возвращает новый массив,
// содержащий только уникальные строки. Используйте Set для решения этой задачи.

function getUniqueStrings(arr) {
  return new Set(arr);
}
console.log(getUniqueStrings(["apple", "banana", "apple", "orange", "banana"])); // ['apple', 'banana', 'orange']

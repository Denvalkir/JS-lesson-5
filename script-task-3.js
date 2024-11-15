// //     Создайте Map, который будет хранить имена людей и их возраст.
// // Напишите функции для добавления, удаления и получения возраста по имени.
// // Также реализуйте функцию, которая выводит всех людей и их возраст.

const people = new Map();

people.set("Денис", 34);
people.set("Игорь", 24);
people.set("Оля", 14);

// функция ищет в мапе по имени, если находит,
// то добавляет или меняет возраст найденного пользователя.
function peopleAdd(name, age) {
  return people.has(name)
    ? people.set(name, age)
    : "Вы ввели неправильное имя!";
}

// функция ищет в мапе по имени, если находит,
// то удаляет только возраст у найденного пользователя, "undefined".
function peopleDel(name) {
  return people.has(name)
    ? people.set(name, undefined)
    : "Вы ввели неправильное имя!";
}

// функция ищет в мапе по имени, если находит,
// то возвращает только возраст данного пользователя.
function peopleFindAge(name) {
  return people.has(name) ? people.get(name) : "Вы ввели неправильное имя!";
}

// функция выводит всех пользователей и их возраст.
function peopleAll() {
  return people.forEach((value, key) => {
    console.log(`${key}, ${value}`);
  });
}

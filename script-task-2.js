//    2. Создайте объект, представляющий студента, с такими свойствами, как имя, возраст и список предметов.
// Напишите метод, который будет выводить информацию о студенте в формате: "Имя: [имя], Возраст: [возраст], Предметы: [предметы]".

const student = {
  name: "John",
  age: 20,
  subjects: ["Math", "Science", "History"],
  getInfo: function () {
    console.log(
      `"Имя: ${this.name}, Возраст: ${this.age}, Предметы: ${this.subjects.join(
        ", "
      )}"`
    );
  },
};
student.getInfo(); // "Имя: John, Возраст: 20, Предметы: Math, Science, History"

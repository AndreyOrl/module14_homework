//Задание 1
// Создание экземпляра класса DOMParser. Он позволит парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который будем парсить
const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод и объявление будущих массивов
const listNode = xmlDOM.querySelector("list");
let studentNode = listNode.querySelectorAll("student");
let nameNode = []
let listObj = []

let studentsObject = {
  list: listObj
}

//Получение всех DOM-нод для имен

studentNode.forEach((student) => {
  nameNode.push(student.querySelector("name"))
})

//Заполнение массива объектов

for (let i = 0; i < studentNode.length; i++) {
  listObj.push({
    name: nameNode[i].querySelector("first").textContent + " " + nameNode[i].querySelector("second").textContent,
    age: Number(studentNode[i].querySelector("age").textContent),
    prof: studentNode[i].querySelector("prof").textContent,
    
    //получаем свойство из атрибута
    lang: nameNode[i].getAttribute('lang')})
}

console.log(studentsObject);
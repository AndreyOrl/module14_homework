//создаем JSON, который парсим
const jsonString = `
            {
             "list": [
              {
               "name": "Petr",
               "age": "20",
               "prof": "mechanic"
              },
              {
               "name": "Vova",
               "age": "60",
               "prof": "pilot"
              }
             ]
            }`;

//парсим элемент
const jsonData = JSON.parse(jsonString);

//записываем данные в обьект
const result = {
    list: [
        {
            name: jsonData.list[0].name,
            age: parseInt((jsonData.list[0].age), 10),
            prof: jsonData.list[0].prof
        }, {
            name: jsonData.list[1].name,
            age: parseInt((jsonData.list[1].age), 10),
            prof: jsonData.list[1].prof
        }
    ]
}

//выводим результат в консоль
console.log(result);
const axios = require('axios');
const URL = "https://new.czn-office.ru/api/ankets/saveAnketFormData"
const method = "POST" 
const a = {
    "configId":"167682",
    "email":null,
    "userName":"Владислав",
    "regnumber":null,
    "cznName":177752,
    "answers":"[[9,9,9,1,9,9,9,9,9,9,9,0,9,1,0,9,9,9,9,null],[2,0,[1]]]"
}

const r = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const r9 = () => {
    return r(7, 9)
}

const variants = {
    'Частная российская до 15 высокая сезоннось': [2,0, [1]],
    'Частная российская до 15 ничего из перечисленного': [2,0, [4]],
    'Государственное муниципальное до 16  ничего из перечисленного': [0,0, [4]],
    'Государственное муниципальное от 16 до 100 ничего из перечисленного': [0,1, [4]],
    'Государственное муниципальное от 101 до 250 ничего из перечисленного': [0,2, [4]]
}
const maleNames = [
    "Александр",'', "Дмитрий", "Иван", "Михаил", "Сергей", '',"Андрей",'', "Алексей", '',"Владимир", 
    "Юрий", "Василий", "Константин",'', "Павел", "Роман", "Григорий", "Евгений",'', "Аркадий", 
    "Олег",'', "Николай", '',"Виктор", "Максим", '',"Валентин",'', "Анатолий", "Леонид", "Борис", 
    "Ярослав", "'',Игорь", "Эдуард", "Станислав", "Георгий", "Фёдор",'', "Антон", "Тимофей", 
    "Виталий", "Егор", "Кирилл", "Артём", "Денис", "Леонид", "Арсений",'', "Даниил", "Матвей", 
    "Альберт", "Глеб", "Назар", '',"Игнат", '',"Тихон", "Прохор", "Ростислав", "Всеволод", 
    "Владислав",'', "Яков", "Юлиан", "Савелий", '',"Мирон", "Родион"
];
function getRandomName(array) {
    return array[Math.floor(Math.random() * array.length)];
}
const sendVote2 = (key) => {
    const part1 = [r9(),r9(),r9(),0,r9(),r9(),r9(),r9(),r9(),r9(),r9(),0,r9(),1,0,r9(),r9(),r9(),r9(),null]
    const part2 = variants[key] || variants['Частная российская до 15 ничего из перечисленного']
    const name = getRandomName(maleNames)

    const body =  {
        "configId":"167682",
        "email":null,
        "userName": name,
        "regnumber":null,
        "cznName":177752,
        "answers": JSON.stringify([part1, part2]),
    }

    axios({
        method,
        url: URL,
        data: body,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Response:', response);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
   
}

module.exports = {
    sendVote2
}
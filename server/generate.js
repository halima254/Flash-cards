var faker = require('faker');

var database = { subjects: []};

for (var i = 1; i<= 50; i++) {
  database.subjects.push({
    id: i,
    name: faker.class.subjectName(),
    description: faker.lorem.sentences(),
    imageUrl: "https://images.pexels.com/photos/1019470/abacus-mathematics-addition-subtraction-1019470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    
  });
}

console.log(JSON.stringify(database));
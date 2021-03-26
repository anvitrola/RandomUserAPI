const express = require('express');
const faker = require('faker');
const app = express();
const port = 2000;

var obj = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    gender: faker.name.gender(),
    email:faker.internet.email(),
    password:faker.internet.password()

}

app.get('/', (req, res) => {
  res.send(obj);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
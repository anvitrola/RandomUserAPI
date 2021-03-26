const express = require('express');
const faker = require('faker');
const app = express();
const port = 2000;
                                                                                         


app.get('/', (req, res) => {
  res.send(
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      gender: faker.name.gender(),
      email:faker.internet.email(),
      password:faker.internet.password(),
      birth: faker.date.past(50,2005).toLocaleDateString()
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
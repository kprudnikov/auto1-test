/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.json());

const brands = [
  'Audi',
  'BMW',
  'Mercedes-Benz',
  'Opel',
  'Porsche',
  'Volkswagen',
  'Alpine',
  'Bugatti',
  'Citroën',
  'DS',
  'Peugeot',
  'Renault',
  'Venturi',
];
const colors = [
  'Barbie Pink',
  'Blond',
  'Cadmium blue',
  'Blue-green',
  'Chinese purple',
  'Cyclamen ',
  'Douban Light',
  'Flavescent ',
  'Banana Mania',
  'Dark cerulean',
  'Bluebonnet',
  'Cadmium purple',
  'Chinese orange',
  'Citrine Brown',
  'Dark goldenrod',
  'Bitter lemon',
  'Catalina blue',
  'Blue raspberry',
  'Batorange',
  'Congo pink',
  'Coral pink',
  'Deep champagne',
  'Apricot',
  'Deep green',
  'Fluorescent blue',
  'Blueberry',
  'Debian red',
  'French rose',
];
const firstNames = [
  'Jackson',
  'Aiden',
  'Lucas',
  'Liam',
  'Noah',
  'Ethan',
  'Mason',
  'Caden',
  'Oliver',
  'Elijah',
  'Grayson',
  'Jacob',
];
const lastNames = [
  'Smith',
  'Jones',
  'Brown',
  'Johnson',
  'Williams',
  'Miller',
  'Taylor',
  'Wilson',
  'Davis',
  'White',
  'Clark',
  'Hall',
  'Thomas',
  'Thompson',
  'Moore',
  'Hill',
  'Walker',
  'Anderson',
];

function getRandomInArray(array) {
  return array[Math.floor(Math.random()*brands.length)];
}

function getCarName() {
  const randomBrand = getRandomInArray(brands);
  const randomColor = getRandomInArray(colors);
  return `${randomColor} ${randomBrand}`;
}

function getRandomId() {
  return Buffer.from(Math.floor((Math.random() * 1E12)).toString()).toString('base64').toLowerCase();
}

function getBid() {
  return {
    id: getRandomId(),
    carTitle: getCarName(),
    amount: Math.ceil((Math.random() * 10)),
    created: new Date(new Date().getTime() - Math.floor((Math.random() * 1E10))).toJSON(),
  }
}

function getMerchant(index=0) {
  const bids = [...new Array(Math.ceil(Math.random() * 10))].map(getBid);

  return {
    id: getRandomId(),
    firstName: getRandomInArray(firstNames),
    lastName: getRandomInArray(lastNames),
    avatarUrl: `https://randomuser.me/api/portraits/men/${index}.jpg`,
    phone: `+49${Math.ceil(Math.random() * 10000000)}`,
    hasPremium: Math.random() >= 0.5,
    bids,
  };
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "POST, GET", "DELETE");
  next();
});

app.get('/merchants', (req, res) => {
  res.send([...new Array(10)].map((el,i) => getMerchant(i)));
});

app.post('/merchants', (req, res) => {
  const merchant = Object.assign(getMerchant(), req.body || {});

  res.send(merchant);
});

app.patch('/merchants/:id', (req, res) => {
  // generally we want to return the updated version
  // but since data is randomly generated - lets return 204
  res.status(204);
  res.send();
});

app.delete('/merchants/:id', (req, res) => {
  res.status(204);
  res.send();
});

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});

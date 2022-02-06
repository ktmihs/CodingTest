// 13168

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const hash = new Map();
hash.set('Subway', 0).set('Bus', 1).set('Taxi', 2).set('Airplane', 3).set('KTX', 4).set('S-Train', 5).set('V-Train', 6).set('ITX-Saemaeul', 7).set('ITX-Cheongchun', 8).set('Mugunghwa', 9);

const [n, ticket] = input.shift().split(' ').map(Number);
const cities = input.shift().split(' ');
const m = +input.shift();
const travels = input.shift().split(' ');
const k = +input.shift();
const naeilro = input.map(i => i.split(' '));

const citiesHash = new Map();
cities.forEach((city, i) => citiesHash.set(city, i));

const dpOrigin = [...Array(n)].map((e) => Array(n).fill(10e9));
const dpNaeilro = [...Array(n)].map((e) => Array(n).fill(10e9));
for (let i = 0; i < n; i++) dpOrigin[i][i] = 0;
for (let i = 0; i < n; i++) dpNaeilro[i][i] = 0;

for (let [vehicle, depart, arrive, pay] of naeilro) {
  dpOrigin[citiesHash.get(depart)][citiesHash.get(arrive)] = Math.min(dpOrigin[citiesHash.get(depart)][citiesHash.get(arrive)], +pay);
  dpOrigin[citiesHash.get(arrive)][citiesHash.get(depart)] = Math.min(dpOrigin[citiesHash.get(arrive)][citiesHash.get(depart)], +pay);

  if (hash.get(vehicle) >= 5) {
    hash.get(vehicle) < 7 ? pay = Math.floor(+pay / 2) : pay = 0;
  }
  dpNaeilro[citiesHash.get(depart)][citiesHash.get(arrive)] = Math.min(dpNaeilro[citiesHash.get(depart)][citiesHash.get(arrive)], +pay);
  dpNaeilro[citiesHash.get(arrive)][citiesHash.get(depart)] = Math.min(dpNaeilro[citiesHash.get(arrive)][citiesHash.get(depart)], +pay);
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dpOrigin[i][j] > dpOrigin[i][k] + dpOrigin[k][j]) dpOrigin[i][j] = dpOrigin[i][k] + dpOrigin[k][j];
      if (dpNaeilro[i][j] > dpNaeilro[i][k] + dpNaeilro[k][j]) dpNaeilro[i][j] = dpNaeilro[i][k] + dpNaeilro[k][j];
    }
  }
}

let buyTicket = ticket;
let noTicket = 0;

for (let i = 0; i < m - 1; i++) {
  noTicket += dpOrigin[citiesHash.get(travels[i])][citiesHash.get(travels[i + 1])];
  buyTicket += dpNaeilro[citiesHash.get(travels[i])][citiesHash.get(travels[i + 1])];
}

buyTicket < noTicket ? console.log('Yes') : console.log('No');
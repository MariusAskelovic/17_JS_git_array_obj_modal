import { printMen, printDriverGender } from './modules/forEachFn.js';
import { youngWomen } from './modules/filterFn.js';
import { students } from './modules/studentsArr.js';
console.log('arrayOfObj.js file was loaded');

const people = [
  {
    // 0
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    // 1
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/* 
{
  name: 'Jonas',
  surname: 'Jonaitis',
  sex: 'male',
  age: 26,
  income: 1200,
  married: false,
  hasCar: false,
},
*/
// console.table(people);
const skArr = [1, 4, 5];

// printMen(people);

// const moterys = youngWomen(people);

// printDriverGender(people);

// // 5.1 Naudojant Array.prototype.map
// grazinti naujame masyve visų vairuojančių žmonių lytį.

const driversGendersArr = people
  .filter((x) => x.hasCar === true)
  .map((pObj) => pObj.sex);

// console.log('driversGendersArr ===', driversGendersArr);

/* 8. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva pakeičiant savybę 'income' į 'salary'
   pirma sukuriam nauja savybe i objekta 'salary'
   istrinti income */
/* 
org
{
  name: 'Jonas',
  surname: 'Jonaitis',
  sex: 'male',
  age: 26,
  income: 1200,
  married: false,
  hasCar: false,
},
rez
{
  name: 'Jonas',
  surname: 'Jonaitis',
  sex: 'male',
  age: 26,
  married: false,
  hasCar: false,
  salary: 1200,
},
*/
function changeIncomeToSalary() {
  // sukti cikla
  const salarayArr = people.map((pObj) => {
    // a. ciklo metu grazinti nauja norima objekta
    const naujasObj = {
      name: pObj.name,
      surname: pObj.surname,
      sex: pObj.sex,
      age: pObj.age,
      married: pObj.married,
      hasCar: pObj.hasCar,
      salary: pObj.income,
    };
    return naujasObj;
  });
  // console.table(salarayArr);
  // b. ciklo metu nusikopijuoti pObj
  // atlikti copijai pakeitimus
  // grazinti kopija

  // grazinti pakeista masyva
  return salarayArr;
}
const graza1 = changeIncomeToSalary();
// console.log('graza1 ===', graza1);
// console.table(people);

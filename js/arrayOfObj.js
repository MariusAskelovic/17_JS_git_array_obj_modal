import { printMen, printDriverGender } from './modules/forEachFn.js';
import { youngWomen } from './modules/filterFn.js';
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

// 0
// name: 'Jonas',
// surname: 'Jonaitis',
// sex: 'male',
// age: 26,
// income: 1200,
// married: false,
// hasCar: false,

console.table(people);

// printMen(people);

// const moterys = youngWomen(people);
// console.log('moterys ===', moterys.length);
// printDriverGender(people);

// 5.1 Naudojant Array.prototype.map grazinti naujame masyve visų vairuojančių žmonių lytį.

const driversGendersArr = people
  .filter((pObj) => pObj.hasCar === true)
  .map((pObj) => pObj.sex);
// console.log('driversGendersArr ===', driversGendersArr);

// Pagal people masyvą, naudojant Array.prototype.map,
// suformuokite masyva pakeičiant savybę 'income' į 'salary'
// pirma sukuriam nauja savybe i objekta 'salary' istrinti income

function changeIncomeToSalary() {
  // sukti cikla
  const salaryArr = people.map((pObj) => {
    // A. ciklo metu grazinti nauja norima objekta
    const naujasObj = {
      name: pObj.name,
      surname: pObj.surname,
      sex: pObj.sex,
      age: pObj.age,
      salary: pObj.income,
      married: pObj.married,
      hasCar: pObj.hasCar,
    };
    return naujasObj;
  });
  console.table(salaryArr);
  return salaryArr;
  // B. ciklo metu nusikopijuoti pObj
  // ir atlikti kopijai pakeitimus
  // grazinti kopija

  // grazinti pakeista masyva
}
changeIncomeToSalary();

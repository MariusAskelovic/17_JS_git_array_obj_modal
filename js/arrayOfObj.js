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

// =================== practise

const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9],
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6],
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6],
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8],
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8],
      },
    ],
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8],
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8],
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9],
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8],
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8],
      },
    ],
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10],
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8],
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10],
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10],
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8],
      },
    ],
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8],
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9],
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9],
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7],
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9],
      },
    ],
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8],
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10],
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6],
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4],
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9],
      },
    ],
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9],
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10],
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10],
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7],
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8],
      },
    ],
  },
];
// console.table(students);

const avgMarks = [];
students.forEach((studentObj) => {
  // console.log('studentObj ===', studentObj);
  studentObj.modules.forEach((moduleObj) => {
    // console.log('moduleObj ===', moduleObj);
    avgMarks.push(
      moduleObj.marks.reduce((total, num) => total + num, 0) /
        moduleObj.marks.length
    );
  });
});
// console.log(avgMarks);
// console.table(students);

const bothNamesStrArr = [];
people.forEach((vienasStudentas) => {
  return bothNamesStrArr.push(
    vienasStudentas.name + ' ' + vienasStudentas.surname
  );
});
// console.log(bothNamesStrArr);

function facultyList(arrName) {
  const newArr = [];
  arrName.forEach((oneStudentObj) => newArr.push(oneStudentObj.faculty));
  return newArr;
}
let checkFacultyList = facultyList(students);
// console.log('checkFacultyList ===', checkFacultyList);

const informatikaiArr = students.filter(
  (oneObj) => oneObj.faculty === 'Informatikos fakultetas'
);
console.table(informatikaiArr);

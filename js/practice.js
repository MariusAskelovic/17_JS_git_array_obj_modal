import { students } from './db/db.js';
console.log('practice.js file was loaded');

/*
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
*/

console.table(students);

// isspausdinti pirmo studento Inžinerinis projektas pazymius
const paz = students[0].modules[3].marks;
console.log('paz ===', paz);

// 1. getStudentsFromYear(2) - grazintu visus antro
// kurso studentus (argumentas yra kelinto kurso studentus grazinti)

function getStudentsFromYear(kelintoKursoAtrinkti) {
  const atrinkta = students.filter(
    (studObj) => studObj.course === kelintoKursoAtrinkti
  );
  // console.table(atrinkta, ['name', 'course', 'faculty']);
  // console.log('atrinkta ===', atrinkta);
  return atrinkta;
}
const kaGrazino = getStudentsFromYear(1);
console.log('kaGrazino ===', kaGrazino);

// 7. Informatikos fakulteto studentų vidurkius

function getSutentAvgFromFaculty() {
  // atrinkti tik Informatikos fakulteto studentus
  const infoFacultyStudents = students.filter(
    (studObj) => studObj.faculty === 'Informatikos fakultetas'
  );
  console.table(infoFacultyStudents);
  // gauti kiekvieno atrinkto studento vidurkius
  // const vienoStudVid = infoFacultyStudents[0].modules
  //   .map(getAvgFromModuleEl)
  //   .reduce((total, sk, i, arr) => total + sk / arr.length, 0);
  // console.log('vienoStudVid ===', vienoStudVid);
  // getSudAvg(infoFacultyStudents[0]);
  const studAvgArr = infoFacultyStudents.map(getSudAvg);
  console.log('studAvgArr ===', studAvgArr);
}
// debugger;
getSutentAvgFromFaculty();

// gauti bendra vidurki

// helper fn
function getAvgFromModuleEl(modEl) {
  const avg = modEl.marks.reduce(
    (total, sk, i, arr) => total + sk / arr.length,
    0
  );
  return avg;
}

function getSudAvg(studObj) {
  const vienoStudVid = studObj.modules
    .map(getAvgFromModuleEl)
    .reduce((total, sk, i, arr) => total + sk / arr.length, 0);
  console.log('vienoStudVid ===', vienoStudVid);
  return vienoStudVid;
}

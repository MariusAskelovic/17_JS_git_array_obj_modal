export function printMen(arr) {
  // 1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.
  arr.forEach((personObj) => {
    //   console.log(personObj.sex);
    if (personObj.sex === 'male') {
      console.log(personObj);
    }
  });
}

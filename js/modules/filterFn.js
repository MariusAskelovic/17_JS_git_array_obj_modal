// 2. Naudojant Array.prototype.filter grazinti visas moteris jaunesnes nei 35 metai.
export function youngWomen(arr) {
  //   const atrinktiObj = people
  //     .filter((personObj) => personObj.sex === 'female')
  //     .filter((personObj) => personObj.age < 35);
  const atrinktiObj = arr.filter(
    (personObj) => personObj.sex === 'female' && personObj.age < 35
  );
  console.table(atrinktiObj);
  return atrinktiObj;
}

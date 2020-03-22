module.exports = function countCats(matrix) {
  //throw 'Not implemented';
  let result = 0;
  if (!matrix || matrix.length <= 0) {
    return 0;
  } else {
    matrix.map((element) => {
      element.forEach(el => {
        if (el === "^^") {
          result += 1
        } else {};
      });
    })
  }
  return result;
};


const example = [
  ['##', 'dd', '00'],
  ['^^', '..', 'ss'],
  ['AA', 'dd', 'Oo'],
];

const example2 = [
  []
];
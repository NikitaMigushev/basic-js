module.exports = function createDreamTeam(members) {
  // throw 'Not implemented';

  if (Array.isArray(members)) {
    let result = [];
    members.map((element, index) => {
      let type = typeof (element);
      if (type === 'string') {
        let split = element.split('');
        let firstCharacter = split[0].toUpperCase();
        result.push(firstCharacter);
      } else {

      }
    })

    return result.sort().join('');
  } else {
    return false;
  }

};

// const example = [
//   'amelia',
//   'ruby',
//   'lily',
//   'grace',
//   'millie',
//   'daisy',
//   'freya',
//   'erin',
//   'megan',
//   'jasmine',
//   'brooke',
// ]

// console.log(module.exports(example));
module.exports = function createDreamTeam(members) {
  // throw 'Not implemented';

  if (Array.isArray(members)) {
    let result = [];
    members.map((element, index) => {
      let type = typeof (element);
      if (type === 'string') {
        let split = element.split('');
        let firstCharacter = split[0];
        result.push(firstCharacter);
      } else {

      }
    })
    return result.sort();
  } else {
    return false;
  }

};

const example = [
  'Amelia',
  null,
  undefined,
  'Ruby',
  'Lily',
  11,
  'Grace',
  22,
  'Millie',
  'Daisy',
  true,
  'Freya',
  false,
  'Erin',
  new Set([1, 2, 3, 4, 5]),
  'Megan',
  {
    'John': 'Smith'
  },
  'Jasmine',
  1,
  2,
  3,
  4,
  5,
  'Brooke',
]
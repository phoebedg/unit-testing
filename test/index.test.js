const functions = require('../src/index');

test('Addition', function(){
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test('Longest String', function(){
  const expected = 'panda';
  const result = functions.longestString(['cat', 'dog', 'bear', 'panda']);
  expect(result).toBe(expected);
});

// test('l337', function(){
//   const expected = 'C0n57ruc70r';
//   const result = functions.replaceInstances("Constructor");
//   expect(result).toBe(expected);
// });

test('Unique String', function(){
  const expected = ['a','1','4','2'];
  const result = functions.uniqueStrings(['a','1','4','4','2','a']);
  expect(result).toEqual(expected);
})

test('Developer', function(){
  const expected = {name: 'Harry', languages: ['Python', 'JavaScript', 'Ruby']};
  const result = new functions.Developer('Harry', ['Python', 'JavaScript', 'Ruby']);
  expect(result).toEqual(expected);
})

test('Learn Language', function(){
  const expected = ['Python', 'JavaScript', 'Ruby', 'PHP'];
  const phoebe = new functions.Developer('Phoebe', ['Python', 'JavaScript', 'Ruby']);
  phoebe.learnLanguage('PHP');
  const result = phoebe.languages;
  expect(result).toEqual(expected);
});

test('Garden'), function(){
  const expected = {tulip: 15, rosebush: 3, appletree: 1};
  const result = new functions.Garden({tulip: 15, rosebush: 3, appletree: 1});
  expect(result).toEqual(expected);
}

test('Extend', function(){
  const expected = {tulip: 15, rosebush: 3, appletree: 1, poppy: 6};
  const newGarden = new functions.Garden({tulip: 15, rosebush: 3, appletree: 1});
  newGarden.plant({poppy: 6});
  const result = newGarden;
  expect(result).toEqual(expected);
 });

test('Harvest', function(){
  const expected = {tulip: 9, rosebush:1};
  const newGarden = new functions.Garden({tulip: 15, rosebush: 3, appletree: 1});
  newGarden.harvest({tulip: 6, rosebush: 2, appletree: 1});
  const result = newGarden;
  expect(result).toEqual(expected);
})

test('concat', function(){
  const expected = 'constructorlabs';
  const result = functions.concat(['constructor', 'labs', 1]);
  expect(result).toEqual(expected);
})

test('negativeOnly', function(){
  const expected = [-5, -10, -123];
  const result = functions.negativeOnly([1, 3, -5, -10, 46, -123, 122]);
  expect(result).toEqual(expected);
})

test('camelise', function(){
  const expected = 'makeMeACamel';
  const result = functions.camelise('Make me a camel');
  expect(result).toEqual(expected);
})

test.only('merging', function(){
  const expected = {a: 6, b: 12, c: 19} ;
  const result = functions.merging([{a: 6}, {a: 7, b: 12}, {a: 2, b: 5, c: 19}]);
  expect(result).toEqual(expected);
})
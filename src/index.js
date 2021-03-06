function add(a, b) {
  return a + b;
}

exports.add = add;

function longestString(array) {
  return array.sort(function(a, b) {
    return b.length - a.length;
  })[0];
}

exports.longestString = longestString;

function replaceInstances(string) {
  const formula = {
    i: 1,
    l: 1,
    z: 2,
    e: 3,
    a: 4,
    s: 5,
    g: 6,
    t: 7,
    b: 8,
    q: 9,
    o: 0
  }
  return [...string].map(function(item){
    return typeof formula[item] === 'number' ? formula[item] : item;
  }).join('');
}

exports.replaceInstances = replaceInstances;

function uniqueStrings(array) {
  const newArr = array.filter(function(element, index) {
    return array.indexOf(element) == index;
  });
  return newArr;
}

exports.uniqueStrings = uniqueStrings;

function Developer(name, languages) {
  this.name = name;
  this.languages = languages;
}

Developer.prototype.learnLanguage = function(language) {
  this.languages.push(language);
  this.languages = uniqueStrings(this.languages);
};

exports.Developer = Developer;

function Garden(plants) {
  for (let prop in plants) {
    if (plants.hasOwnProperty(prop)) {
      this[prop] = plants[prop];
  // OR
  // Object.keys(plants.forEach(key) => {
  //    this[key] = plants[key]
  //})
    }
  }
}

Garden.prototype.plant = function(newPlants) {
  for (let key in newPlants) {
    this[key] = newPlants[key];
  }
  // OR same code as above.
};

exports.Garden = Garden;

Garden.prototype.harvest = function(plantHarvest) {
  Object.keys(plantHarvest).forEach(key => {
    this[key] -= plantHarvest[key];
    if (this[key] === 0) {
      delete this[key];
    }
  });
};
exports.Garden = Garden;

function concat(array) {
  const newArr = array.filter(function(el) {
    return typeof el !== "number";
  });
  return newArr.join("");
}

exports.concat = concat;

function negativeOnly(array) {
  const negArr = array.filter(function(num) {
    return num < 0;
  });
  return negArr;
}

exports.negativeOnly = negativeOnly;

function camelise(string) {
  return string
    .split(" ")
    .map(function(str, i) {
      if (i === 0) return str.toLowerCase();
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join("");
}
exports.camelise = camelise;

function merging(arr){
  const sorted = arr.slice().sort(function(a,b){
    return Object.keys(a).length < Object.keys(b).length;
  })
  return Object.assign({}, ...sorted);
}
exports.merging = merging;
let me = {
    'name' : 'Umar',
    'age' : 31,
    'height' : `'5'6"`,
    'homeState' : 'Michigan'
}


me.age = 1000;

console.log(me.age);

me['place of residence'] = 'Novi';

console.log(me['place of residence']);

console.log(me);
console.log(me.name);

// slimer

const monster = {
    name: 'Slimer',
    color: 'greenish',
    variety: 'plasm or ghost or something'
}

console.log(monster.name);

monster.variety = 'creature';

monster['age'] = 6;

console.log(monster);

monster.scare = () => {
    console.log('Booo!!');
}

monster.scare();

monster.introduce = function() {
    console.log(`Hi my name is ${monster.name}`);
}

monster.introduce();
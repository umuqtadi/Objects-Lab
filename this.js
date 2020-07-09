const garcia = {
    albums: ['shady grove', 'run for the roses', 'hooteroll', 'Garcia', 'Reflections'],
    instruments: ['Vocals', 'pedal steel', 'electric guitar', 'acoustic guitar', 'banjo'],
    alive: false,
    quote: 'Im shopping around for something to do that no one will like',
    friends: [{
      name: 'Bobby weir',
      hobby: 'guitar'
    },
    {
      name: 'Bob Dylan',
      hobby: 'writing songs'
    },
    {
      name: 'Allen Ginsberg',
      hobby: 'writing poems'
    },
    {
      name: 'Phil Lesh',
      hobby: 'Playing dope bass lines'
    }]
}

console.log(garcia.albums[2]);
console.log(garcia.friends[0].name);
console.log(garcia.friends[2].hobby);
console.log(garcia.instruments[4]);

garcia.alive = true;

garcia["quote"] = 'Everybody just be nice to each other';
console.log(garcia);

garcia['speak'] = () => {console.log('Heyy, Thats a good song!')};

garcia.speak();

garcia.letsPlay = () => {console.log('La daaa da, La daa, da, da')}

garcia.letsPlay();


const foo = {
    value: 12,
    getValue() {
        return this.value;
    }
}

console.log(foo.getValue());

const person = {
    name: 'Umar',
    getName: function() {
        return this.name;
    }
}

console.log(person.getName());


const game = {
    timer: 10,
    start(){
        const gameTimer = setInterval( () => {
          console.log('hi', this)
          this.timer -= 1;

        if(this.timer <=0) {
            console.log('GAMEOVER')
        }
        }, 1000);
      },
}

// game.start()

const player = {
    score: 10,
    name: 'Umar',
    lives: 3,
    keepScore: (number) => {
        this.score += number
    }
}
// this is used to refer to an object itself
player.keepScore(10);
console.log(player.score);

const movie = {
    title: 'Eraserhead',
    director: 'David Lynch',
    year: 1978
}

for(let key in movie) {
    console.log(key)
}

for(let key in movie) {
    console.log(movie[key]);
}
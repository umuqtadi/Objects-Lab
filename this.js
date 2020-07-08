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
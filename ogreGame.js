// Creating a text game where two objects attack each other until one is out of hit points
// They should have alternating turns
// Should get a message letting you know who won

const adventurer = {
    name: 'Batman',
    hp: 100,
    attack: function(enemy) {
        return enemy.hp -= 10;
    }
}

const ogre = {
    name: 'Bane',
    hp: 75,
    attack: function(enemy) {
        return enemy.hp -= 7;
    }
}

function game(player1, opponent) {
    while(player1.hp > 0 && opponent.hp > 0) {
        player1.attack(opponent);
        opponent.attack(player1);
        console.log(`Currently ${player1.name} HP is: ${player1.hp}. ${opponent.name} HP is: ${opponent.hp}.`);
    }
    return
}

game(adventurer, ogre);
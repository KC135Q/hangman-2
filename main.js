// contains the logic of your app. Running it in Terminal/Bash will start the game.
//  The app should end when a player guesses the correct word or runs out of guesses.
var game     = require('./game');
var letter   = require('./letter');
var word     = require('./word');
var inquirer = require('inquirer');

game();
letter();
word();
var gameWord = '';

function start() {
    this.gameWord = game.word;
    console.log("Word: "+ this.gameWord);
}

function getLetter() {
    
}

start();
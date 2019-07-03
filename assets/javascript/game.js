var target = 0;
var sumGuess = 0;
var wins = 0;
var losses = 0;
var blueCrystal = 0;
var redCrystal = 0;
var greenCrystal = 0;
var orangeCrystal = 0;

// Function to generate crystal and total values at document ready

$(document).ready(function () {
    console.log("start");
    blueCrystal = Math.floor(Math.random() * 10) + 1;
    redCrystal = Math.floor(Math.random() * 10) + 1;
    greenCrystal = Math.floor(Math.random() * 10) + 1;
    orangeCrystal = Math.floor(Math.random() * 10) + 1;
    target = Math.floor(Math.random() * 100) + 4;

    $("#target-number").text(target);
    console.log("target score = " + target);
});

// Game reset function after wins/losses

function reset() {
    target = 0;
    sumGuess = 0;
    blueCrystal = 0;
    redCrystal = 0;
    greenCrystal = 0;
    orangeCrystal = 0;

    console.log("start");
    blueCrystal = Math.floor(Math.random() * 10) + 1;
    redCrystal = Math.floor(Math.random() * 10) + 1;
    greenCrystal = Math.floor(Math.random() * 10) + 1;
    orangeCrystal = Math.floor(Math.random() * 10) + 1;
    target = Math.floor(Math.random() * 100) + 4;

    $("#target-number").text(target);
    console.log("target score = " + target);
}

// Rules to tell when you win or lose and what to do

function scoreRules() {
    if (sumGuess === target) {
        wins++;
        $("wins").text(wins);
        console.log("win");
        reset();
    } else if (sumGuess > target) {
        losses++;
        $("losses").text(losses);
        console.log("loss");
        reset();
    }
};

// Crystal images have values and can be clicked
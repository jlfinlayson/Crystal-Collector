var target = 0;
var sumGuess = 0;
var wins = 0;
var losses = 0;
var blueCrystal = 0;
var redCrystal = 0;
var greenCrystal = 0;
var orangeCrystal = 0;

// Function to generate crystal and total values

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

function scoreRules() {
    if (sumGuess === target) {
        wins++;
        $("wins").text(wins);
        console.log("win");
    } else if (sumGuess > target) {
        losses++;
        $("losses").text(losses);
        console.log("loss");
    }
};

function reset() {
    var target = 0;
    var sumGuess = 0;
    var wins = 0;
    var losses = 0;
    var blueCrystal = 0;
    var redCrystal = 0;
    var greenCrystal = 0;
    var orangeCrystal = 0;

    console.log("start");
    blueCrystal = Math.floor(Math.random() * 10) + 1;
    redCrystal = Math.floor(Math.random() * 10) + 1;
    greenCrystal = Math.floor(Math.random() * 10) + 1;
    orangeCrystal = Math.floor(Math.random() * 10) + 1;
    target = Math.floor(Math.random() * 100) + 4;

    $("#target-number").text(target);
    console.log("target score = " + target);
}
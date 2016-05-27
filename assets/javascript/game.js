$(document).ready(function(){
    var number = 19 + Math.floor((Math.random()*(101)));// Number guessed by Computer
    var guess = new Array(4); // Array of size 4 declared for 4 crystals
    for (var i = 0; i < guess.length; i++){
        guess[i] = 1 + Math.floor((Math.random()*(11))); // set the value for crystal (i+1)
    }
    var result = 0; // sum of guesses so far
    var wins = 0; // # of wins so far
    var losses = 0; // # of losses so far
    console.log(number, result, wins, losses); 
    // Print to device the starting status of the game
    $("#number").html("Number to Guess: " + number);
    $("#result").html("Your result so far: " + result);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    // Check if any button is clicked...
    $('input').on("click", function() {
        var i = $(this).attr("value") // i-th crystal clicked
        result += guess[i]; // result updated with i-th crystal click
        if (result >= number) { // current game over with win or loss
            if (result == number) {
            wins++;
            alert("Yay! You won!!");
            } // exact match. So win.
            else {
            losses++;
            alert("Better luck next time!");
            } // result exceeds number.  So loss.
            // refresh with new number, guess array and initial result set to zero.
            number = 19 + Math.floor((Math.random()*(101)));
            for (var i = 0; i < guess.length; i++){
                guess[i] = 1 + Math.floor((Math.random()*(11)));
            }
            result = 0;
        }
        console.log(number, result, wins, losses);
        // Print to device the updated status of the game
        $("#number").html("Number to Guess: " + number);
        $("#result").html("Your result so far: " + result);
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + losses);
    })
})
$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var score = 0;
    var scoreTotal = 0;
    var computerNum = 0;

    function reset() {
        randomNum = 0;
        computerNum();
        score = 0;
        scoreTotal = 0;

    };


    var computerNum = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log("Computer Number: " + computerNum);
    $(".computerNum").html("Computer number: " + computerNum)

    var winner = function() {
        alert("You win!");
        wins++;
        $("#wins").html("Wins: " + wins);
        reset();
    };
    var loser = function() {
        alert("You lose!!");
        losses++;
        $("#losses").html("Losses: " + losses);
        reset();
    };







    $('.gemButton').on("click", function() {
        var gemValue = parseInt($(this).val());
        score += gemValue;
        console.log(score);
        $(".scoreTotal").html(score);
        if (score == computerNum) {
            winner();
            reset();
        } else if (score > computerNum) {
            loser();
            reset();
        };
    });


})

// selects random numebr between 19-120 and displays it in html
var targetNumber;
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#number-to-guess").text(targetNumber);

var counter = 0;
wins = 0;
losses = 0;
counter = 0;
document.getElementById("wins").innerHTML = (wins);
document.getElementById("losses").innerHTML = (losses);
document.getElementById("userGuessTotal").innerHTML = (counter);


//assign unique number from 1-12 for each of the houses


// this array will be used for "do" qualifier- if item already exists in array, generate a new number
var assignedNums = [];

//assign first random number 1-12
var gryffindor = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
assignedNums.push(gryffindor);


var hufflepuff
do {
    hufflepuff = Math.floor(Math.random() * (12 - 1 + 1)) + 1;; // re-randomize
} while ($.inArray(hufflepuff, assignedNums) > -1);
assignedNums.push(hufflepuff);


var ravenclaw
do {
    ravenclaw = Math.floor(Math.random() * (12 - 1 + 1)) + 1;; // re-randomize
} while ($.inArray(ravenclaw, assignedNums) > -1);
assignedNums.push(ravenclaw);


var slytherin
do {
    slytherin = Math.floor(Math.random() * (12 - 1 + 1)) + 1;; // re-randomize
} while ($.inArray(slytherin, assignedNums) > -1);
assignedNums.push(slytherin);
console.log(slytherin)





$("#gryffindor").attr("data-number", gryffindor);
$("#hufflepuff").attr("data-number", hufflepuff);
$("#ravenclaw").attr("data-number", ravenclaw);
$("#slytherin").attr("data-number", slytherin);
console.log(gryffindor, hufflepuff, ravenclaw, slytherin)
$(".houseCrest").on("click", function () {

    var clickValue = ($(this).attr("data-number"));
    clickValue = parseInt(clickValue);
    // console.log(clickValue);
    counter += clickValue;
    // console.log(counter);
    document.getElementById("userGuessTotal").innerHTML = (counter);
    // console.log(counter);
    // console.log(targetNumber);
    console.log(gryffindor, hufflepuff, ravenclaw, slytherin)


    if (counter === targetNumber) {

        wins++;

        document.getElementById("wins").innerHTML = (wins);
        document.getElementById("losses").innerHTML = (losses);
        console.log(targetNumber)
        console.log(counter)
        counter = 0;
        document.getElementById("userGuessTotal").innerHTML = (counter);
        reset();

    }

    else if (counter >= targetNumber) {
        losses++;
        document.getElementById("wins").innerHTML = (wins);
        document.getElementById("losses").innerHTML = (losses);
        console.log(targetNumber);
        console.log(counter);
        reset();


    }

});

function reset() {
    counter = 0;
    document.getElementById("userGuessTotal").innerHTML = (counter);
    targetNumber;
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#number-to-guess").text(targetNumber);
    assignedNums = [];
    gryffindor = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    assignedNums.push(gryffindor);


    hufflepuff
    do {
        hufflepuff = Math.floor(Math.random() * (12 - 1 + 1)) + 1;; // re-randomize
    } while ($.inArray(hufflepuff, assignedNums) > -1);
    assignedNums.push(hufflepuff);


    ravenclaw
    do {
        ravenclaw = Math.floor(Math.random() * (12 - 1 + 1)) + 1;; // re-randomize
    } while ($.inArray(ravenclaw, assignedNums) > -1);
    assignedNums.push(ravenclaw);


    slytherin
    do {
        slytherin = Math.floor(Math.random() * (12 - 1 + 1)) + 1;; // re-randomize
    } while ($.inArray(slytherin, assignedNums) > -1);
    assignedNums.push(slytherin);
    console.log(slytherin)

}




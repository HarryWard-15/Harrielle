danielleWord = "";
harryWord = "";
counter = 0;

function assignWord() {
    if(counter == 0) {
        harryWord = document.getElementById("harryPassword").value;
        danielleWord = document.getElementById("daniellePassword").value;
        document.getElementById("harryPassword").value = "";
        document.getElementById("daniellePassword").value = "";
        document.getElementById("button").disabled = true;
        document.getElementById("button").innerHTML = "Already Submitted";
        document.getElementById("button").style.backgroundColor = "grey";
        document.getElementById("button").style.opacity = 0.5;
        document.getElementById("harryPassword").type = "text";
        document.getElementById("daniellePassword").type = "text";
    } else if(counter >= 1 ) {
        changeRight();
        harryHint = document.getElementById("harryPassword").value;
        danielleHint = document.getElementById("daniellePassword").value;
        changeRight();
    }
    counter =+ 1;

}

function markGuess() {
    harryGuess = document.getElementById("harryGuess").value;
    danielleGuess = document.getElementById("danielleGuess").value;
    document.getElementById("harryGuess").value = "";
    document.getElementById("danielleGuess").value = "";
    if(harryGuess == danielleWord && danielleGuess == harryWord) {
        document.getElementById("overlayDraw").style.display = "block";
    } else if(harryGuess == danielleWord) {
        document.getElementById("overlayDanielle").style.display = "block";
    } else if(danielleGuess == harryWord) {
        document.getElementById("overlayHarry").style.display = "block";
    }
    document.getElementById("harryLastGuess").value = harryGuess;
    document.getElementById("danielleLastGuess").value = danielleGuess;

    changeLeft();
}

function changeLeft() {
    document.getElementById("title").innerHTML = "Enter a Hint For Your Passphrase";
    document.getElementById("harryWord").innerHTML = "Give Danielle a Hint";
    document.getElementById("danielleWord").innerHTML = "Give Harry a Hint";

    document.getElementById("button1").disabled = true;
    document.getElementById("button1").innerHTML = "Already Submitted";
    document.getElementById("button1").style.backgroundColor = "grey";
    document.getElementById("button1").style.opacity = 0.5;

    document.getElementById("button").innerHTML = "Submit Hints";
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.backgroundColor = "rgb(75, 134, 111)";
    document.getElementById("button").style.opacity = 1;
}

function changeRight() {
    document.getElementById("button").disabled = true;
    document.getElementById("button").innerHTML = "Already Submitted";
    document.getElementById("button").style.backgroundColor = "grey";
    document.getElementById("button").style.opacity = 0.5;

    document.getElementById("button1").innerHTML = "Submit Hints";
    document.getElementById("button1").disabled = false;
    document.getElementById("button1").style.backgroundColor = "rgb(75, 134, 111)";
    document.getElementById("button1").style.opacity = 1;

    document.getElementById("harryHint").value = harryHint;
    document.getElementById("danielleHint").value = danielleHint
}
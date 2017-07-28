var wins=0;

var loses=0;

var guessesLeft=9;

var guesses=[];

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

 


//Pick Letter Randomly
function generateRandomLetter(){
    //Generate a random number between 0 and 25 - line 12 is a variable that makes it easier to read
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    var randomLetter = alphabet[randomIndex];
    return randomLetter;
    
}

var newLetter = generateRandomLetter();
console.log(newLetter);

//Let User Type Letter

document.onkeyup = function (event) {
    
    var letter = String.fromCharCode(event.keyCode);
    console.log(letter);
    
    //Push's letter to guesses variable and shows uses whath they have guessed
    guesses.push(letter);
    document.getElementById("guessCount").innerHTML=guesses;
    
    //Score
    
    if (letter === newLetter){
        //adds one to win
        alert("Yea you got it!");
        wins += 1;
        document.getElementById("winCount").innerHTML = wins;
        console.log(wins + " is your score");
        newLetter = generateRandomLetter();
        console.log(newLetter + " is the new letter");
        guessesLeft=8;
        var guessLeftElem = document.getElementById("guessLeft");
        guessLeftElem.innerHTML=guessesLeft;
        guesses=[];
        
    }else if (guessesLeft === 0) {
        //adds one to loss
        loses+=1;
        document.getElementById("lossCount").innerHTML = loses;
        newLetter = generateRandomLetter();//generates new letter
        console.log(newLetter + " is the new letter");
        guessesLeft=9;
        guesses=[];
        
    }else{
        //add guess
        guessLeft();
        
    }
    
    if (letter == newLetter) { //was in window.onkeyup =function(event)
    
        alert("Yea you got it!");
        newLetter=generateRandomLetter();
        console.log(newLetter + " is the new letter");
        //Check this code not not resetting
        
    }else{
        alert("Try again!");
        
    }
       

    
}


function reloadIt(){
    
    location.reload();
    
}



//Update Guesses left

function guessLeft(){
    guessesLeft-=1;
    var guessLeftElem = document.getElementById("guessLeft");
    guessLeftElem.innerHTML=guessesLeft;
    if (guessesLeft !==0) {
        
        console.log("You have " + guessesLeft + " left!");
        
    }else{
        
        console.log("You have lost");
        alert("The letter was " + newLetter);
    }
    
};







//document.getElementById("winCount").innerHTML; 

//document.getElementById("guessesLeft").innerHTML = "Howdy";



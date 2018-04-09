$(document).ready(function(){

    //global variables
    
var wins=0;
var losses=0;
var gemNumbers=0;

// creating the random number by the computer 
var computerNumber= (Math.floor(Math.random() * 120)+ 9);
console.log("computer", computerNumber);


//making the computers number appear on the page
$("#numberbox").text(computerNumber);

//setting certain variables to randomly change
var gemOne= (Math.floor(Math.random() * 12)+ 1);
console.log(gemOne);
var gemTwo= (Math.floor(Math.random() * 12)+ 1);
console.log(gemTwo);
var gemThree= (Math.floor(Math.random() * 12)+ 1);
console.log(gemThree);
var gemFour= (Math.floor(Math.random() * 12)+ 1);
console.log(gemFour);

$("#gem1").on('click', function(){

    gemNumbers= gemNumbers + gemOne;
    $("#totalscore").text(gemNumbers);

    if (gemNumbers === computerNumber) {
        winner();
    }
    else if(gemNumbers > computerNumber) {
        loser();}
    });

$("#gem2").on('click', function(){

    gemNumbers= gemNumbers + gemTwo;
    $("#totalscore").text(gemNumbers);
    
    if (gemNumbers === computerNumber) {
        winner();
    }
    else if(gemNumbers > computerNumber) {
        loser();}
    });

$("#gem3").on('click', function(){

        gemNumbers= gemNumbers + gemThree;
        $("#totalscore").text(gemNumbers);
        
        if (gemNumbers === computerNumber) {
            winner();
        }
        else if(gemNumbers > computerNumber) {
            loser();}
        });

$("#gem4").on('click', function(){

        gemNumbers = gemNumbers + gemFour;
            $("#totalscore").text(gemNumbers);
            
        if (gemNumbers === computerNumber) {
                winner();
            }
        else if(gemNumbers > computerNumber) {
                loser();
            }
            });

function winner(){
    wins++;
    $('#wins').text("Wins: "+ wins);
    reset();
}; 

function loser(){
    losses++;
    $('#losses').text("Losses: "+losses);
    reset();
}

function reset(){
     computerNumber= (Math.floor(Math.random() * 120)+ 9);
     gemOne= (Math.floor(Math.random() * 12)+ 1);
     gemTwo= (Math.floor(Math.random() * 12)+ 1);
     gemThree= (Math.floor(Math.random() * 12)+ 1);
     gemFour= (Math.floor(Math.random() * 12)+ 1);
    $("#totalscore").text(gemNumbers);
    $("#numberbox").text(computerNumber);
    gemNumbers=0;

};

});



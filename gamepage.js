var playername1=localStorage.getItem("player1name")
var playername2=localStorage.getItem("player2name")
var pleyer1score=0
var pleyer2score=0
var word=0
var word2=0
var answer=0
var playerturn="player1"
var answerturn="player2"
document.getElementById("player1").innerHTML=playername1+":"
document.getElementById("player2").innerHTML=playername2+":"
document.getElementById("player1score").innerHTML= pleyer1score
document.getElementById("player2score").innerHTML= pleyer2score
document.getElementById("question").innerHTML= "Question Turn-"+playername1
document.getElementById("answer").innerHTML= "Answering Turn-"+playername2
function Plop() {
    word=document.getElementById("yass").value
    word2=document.getElementById("yash").value
    answer=word*word2
    question="<h4 id='pink'Q.>"+word+"x"+word2+"</h4>"
    textbox="<br>"+"answer:"+"<input type='text' id='why'>"
    checkbutton="<br>"+"<br>"+"<button class='btn btn-info' onclick='Yolp()'>"+"check"+"</button>"
    row=question+textbox+checkbutton
    document.getElementById("output").innerHTML=row
    document.getElementById("yass").value=""
    document.getElementById("yash").value=""
}
function Yolp() {
    word=document.getElementById("why").value
    wordl=word.toLowerCase()
    if (wordl==answer) {
        if (answerturn=="player1") {
            pleyer1score=pleyer1score + 1
            document.getElementById("player1score").innerHTML=pleyer1score
        }
        else{
            pleyer2score=pleyer2score+1
            document.getElementById("player2score").innerHTML=pleyer2score
        }
    }
    if (playerturn=="player1") {
        playerturn="player2"
        document.getElementById("question").innerHTML="Question Turn - "+playername2
    }
    else{
        playerturn="player1"
        document.getElementById("question").innerHTML="Question Turn - "+playername1
    }
    if (answerturn=="player2") {
        answerturn="player1"
        document.getElementById("answer").innerHTML="Answering Turn - "+playername1
    }
    else{
        answerturn="player2"
        document.getElementById("answer").innerHTML="Answering Turn - "+playername2
    }
    document.getElementById("output").innerHTML=""
}
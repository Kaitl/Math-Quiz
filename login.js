function Ye() {
    var player1=document.getElementById("Steve").value
    var player2=document.getElementById("Bob").value
    localStorage.setItem("player1name",player1)
    localStorage.setItem("player2name",player2)
    window.location="gamepage.html"
}
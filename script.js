let box1 = document.getElementById("1");
let box2 = document.getElementById("2");
let box3 = document.getElementById("3");
let box4 = document.getElementById("4");
let box5 = document.getElementById("5");
let box6 = document.getElementById("6");
let box7 = document.getElementById("7");
let box8 = document.getElementById("8");
let box9 = document.getElementById("9");
let boxes = document.querySelectorAll(".square");
let start = document.querySelector(".play");
let popup = document.querySelector(".popup");
let title1 = document.getElementById("player1");
let title2 = document.getElementById("player2");
let restart = document.querySelector(".clear");
let turn = 0;

const player = (name) =>{
    this.name = name;
    this.winStatus = false;
    this.wins = 0;
    return {name,winStatus,wins};
}
let player1 = player("Player 1");
let player2 = player("Player 2");
let create = function(){
    if(document.getElementById("player1Name").value != "")
        player1.name = document.getElementById("player1Name").value;
    if(document.getElementById("player2Name").value != "")
        player2.name = document.getElementById("player2Name").value;
    popup.style.visibility="hidden";
}
let instantiate = () =>{
    title1.textContent = "X " + player1.name + " " + player1.wins;
    title2.textContent = "O " + player2.name + " " + player2.wins;
}
let restartBoard = () =>{
    boxes.forEach(box => box.textContent = "");
}
let play = function(){
    if(this.textContent == ""){
        if(turn % 2 == 0){
        this.textContent = "X";
        this.style.color = "#ff3b3f";
        }
        else{
        this.textContent = "O";
        this.style.color = "#caebf2";
        }
        turn++;
        if(checkWin())
        {
            restartBoard();
            instantiate();
        }

    }
}
let whoWon = (box) =>{
    if(box.textContent == "X")
        player1.wins++;
    else
        player2.wins++;
}
let checkWin = () =>{
    if(box1.textContent == box2.textContent && box1.textContent == box3.textContent && box3.textContent == box2.textContent && box1.textContent != ""){
        whoWon(box1);
        return true;
    }
    else if(box4.textContent == box5.textContent && box4.textContent == box6.textContent && box6.textContent == box5.textContent && box4.textContent != ""){
        whoWon(box4);
        return true;
    }
    else if(box7.textContent == box8.textContent && box7.textContent == box9.textContent && box9.textContent == box8.textContent && box7.textContent != ""){
        whoWon(box7);
        return true;
    }
    else if(box1.textContent == box4.textContent && box1.textContent == box7.textContent && box7.textContent == box4.textContent && box1.textContent != ""){
        whoWon(box1);
        return true;
    }
    else if(box2.textContent == box5.textContent && box2.textContent == box8.textContent && box8.textContent == box5.textContent && box2.textContent != ""){
        whoWon(box2);
        return true;
    }
    else if(box3.textContent == box6.textContent && box3.textContent == box9.textContent && box9.textContent == box6.textContent && box3.textContent != ""){
        whoWon(box3);
        return true;
    }
    else if(box1.textContent == box5.textContent && box1.textContent == box9.textContent && box9.textContent == box5.textContent && box1.textContent != ""){
        whoWon(box1);
        return true;
    }
    else if(box7.textContent == box5.textContent && box7.textContent == box3.textContent && box3.textContent == box5.textContent && box7.textContent != ""){
        whoWon(box7);
        return true;
    }
    else
        return false;
}
instantiate();
boxes.forEach(box => box.addEventListener("click",play));
start.addEventListener("click",create);
restart.addEventListener("click",restartBoard);


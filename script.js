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
let turn = 0;
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
            console.log("Winner!");
        else
            console.log("Not Yet");
    }
}
let checkWin = () =>{
    if(box1.textContent == box2.textContent && box1.textContent == box3.textContent && box3.textContent == box2.textContent && box1.textContent != "")
        return true;
    else if(box4.textContent == box5.textContent && box4.textContent == box6.textContent && box6.textContent == box5.textContent && box4.textContent != "")
        return true;
    else if(box7.textContent == box8.textContent && box7.textContent == box9.textContent && box9.textContent == box8.textContent && box7.textContent != "")
        return true;
    else if(box1.textContent == box4.textContent && box1.textContent == box7.textContent && box7.textContent == box4.textContent && box1.textContent != "")
        return true;
    else if(box2.textContent == box5.textContent && box2.textContent == box8.textContent && box8.textContent == box5.textContent && box2.textContent != "")
        return true;
    else if(box3.textContent == box6.textContent && box3.textContent == box9.textContent && box9.textContent == box6.textContent && box3.textContent != "")
        return true;
    else if(box1.textContent == box5.textContent && box1.textContent == box9.textContent && box9.textContent == box5.textContent && box1.textContent != "")
        return true;
    else if(box7.textContent == box5.textContent && box7.textContent == box3.textContent && box3.textContent == box5.textContent && box7.textContent != "")
        return true;
    else
        return false;
}
boxes.forEach(box => box.addEventListener("click",play));

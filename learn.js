let items = document.querySelectorAll('.item');
let features = Array.from(document.querySelectorAll("#parent div"))
let turn = "x";

let square = [];

function reloading(num1, num2, num3){
    setTimeout(function(){
        location.reload()
    }, 3000)

    document.getElementById("item" + num1).style.background = "gray";
    document.getElementById("item" + num2).style.background = "gray";
    document.getElementById("item" + num3).style.background = "gray";
}

function winner(){
    for(let i = 1; i < 10;i++){
            square[i] = document.getElementById("item" + i).innerHTML;
    }
    if(square[1] === square[2] && square[2] === square[3] && square[1] != ""){
            reloading(1,2,3)
        }else if(square[4] === square[5] && square[5] === square[6] && square[5] != ""){
            reloading(4,5,6)
        }else if(square[7] === square[8] && square[8] === square[9] && square[7] != ""){
            reloading(7,8,9)
        }else if(square[1] === square[4] && square[4] === square[7] && square[4] != ""){
            reloading(1,4,7)
        }else if(square[2] === square[5] && square[5] === square[8] && square[5] != ""){
            reloading(2,5,8)
        }else if(square[3] === square[6] && square[6] === square[9] && square[6] != ""){
            reloading(3,6,9)
        }else if(square[1] === square[5] && square[5] === square[9] && square[5] != ""){
            reloading(1,5,9)
        }else if(square[3] === square[5] && square[5] === square[7] && square[5] != ""){
            reloading(3,5,7)
        }
}

function play(id){
    let element = document.getElementById(id);
    if(turn === "x" && element.innerHTML == ""){
        element.innerHTML = "X";
        turn = "o"

            setTimeout(function(){
            let empty = features.filter(cell => cell.innerHTML === "")
            let RandomChioces = Math.floor(Math.random() * 1);
            empty[RandomChioces].innerHTML = "O";
            turn = "x";
        }, 1000)
    }
    winner()
}





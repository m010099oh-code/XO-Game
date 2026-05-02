let items = document.querySelectorAll('.item');
let features = Array.from(document.querySelectorAll("#parent #row .item"))
let turn = "x";
let square = [];

function oneR(){


return{

    reload: function(num1, num2, num3){

        setTimeout(() => {
            let check = features.filter(e => e.innerHTML !== "");
            check.forEach(elemen => {
                elemen.innerHTML = '';
                elemen.style.background = 'black';
                elemen.style.color = '#00ff2a';
                elemen.style.boxShadow = '0px 0px 0px 3px #00ff2a inset';
            })
        }, 3000)

    document.getElementById("item" + num1).style.background = "#00ff2a";
    document.getElementById("item" + num2).style.background = "#00ff2a";
    document.getElementById("item" + num3).style.background = "#00ff2a";
    document.getElementById("item" + num1).style.color = "#000";
    document.getElementById("item" + num2).style.color = "#000";
    document.getElementById("item" + num3).style.color = "#000";

    document.getElementById("item" + num1).style.boxShadow = "0px 0px 0px 3px black inset";
    document.getElementById("item" + num2).style.boxShadow = "0px 0px 0px 3px black inset";
    document.getElementById("item" + num3).style.boxShadow = "0px 0px 0px 3px black inset";
    document.querySelector('.title').innerHTML = `${square[num2]} winner`;
    document.querySelector('.title').style.color = "yellow";
},

    winner:function(){
    for(let i = 1; i < 10;i++){
            square[i] = document.getElementById("item" + i).innerHTML;
    }
    if(square[1] === square[2] && square[2] === square[3] && square[1] != ""){
            this.reload(1,2,3)
        }else if(square[4] === square[5] && square[5] === square[6] && square[5] != ""){
            this.reload(4,5,6)
        }else if(square[7] === square[8] && square[8] === square[9] && square[7] != ""){
            this.reload(7,8,9)
        }else if(square[1] === square[4] && square[4] === square[7] && square[4] != ""){
            this.reload(1,4,7)
        }else if(square[2] === square[5] && square[5] === square[8] && square[5] != ""){
            this.reload(2,5,8)
        }else if(square[3] === square[6] && square[6] === square[9] && square[6] != ""){
            this.reload(3,6,9)
        }else if(square[1] === square[5] && square[5] === square[9] && square[5] != ""){
            this.reload(1,5,9)
        }else if(square[3] === square[5] && square[5] === square[7] && square[5] != ""){
            this.reload(3,5,7)
        }
},






    play: function(id){
    let element = document.getElementById(id);
    if(turn === "x" && element.innerHTML == ""){
        element.innerHTML = "X";
        turn = "o";
        document.querySelector('.title').innerHTML = "O turn";
        setTimeout(function(){
            let empty = features.filter(cell => cell.innerHTML === "")
            let RandomChioces = Math.floor(Math.random() * empty.length);
            empty[RandomChioces].innerHTML = "O";
            turn = "x";
            document.querySelector('.title').innerHTML = "X turn";
        }, 1000)
    }
    document.querySelector('.title').style.color = "yellow";
    this.winner()
}

}



}

oneR()

document.querySelector(".change").onclick = function(){
    let turning = "one";
    items.forEach(elements => {
        elements.onclick = () => {
            if(turning === "one" && elements.innerHTML == ""){
                elements.innerHTML = "X";
                turning = "o";
                document.querySelector('.title').innerHTML = "O turn";
            }else{
                elements.innerHTML = "O";
                turning = "one";
                document.querySelector('.title').innerHTML = "X turn";
            }
            win()
        }
    })

    //let sq = [];
    function reloa(num1, num2, num3){

        setTimeout(() => {
            let emp = features.filter(el => el.innerHTML !== '')
            emp.forEach(e => {
                e.innerHTML = '';
                e.style.background = 'black';
                e.style.color = '#00ff2a';
                e.style.boxShadow = '0px 0px 0px 3px #00ff2a inset';
            })
        }, 3000)

        document.getElementById("item" + num1).style.background = "#00ff2a";
    document.getElementById("item" + num2).style.background = "#00ff2a";
    document.getElementById("item" + num3).style.background = "#00ff2a";
    document.getElementById("item" + num1).style.color = "#000";
    document.getElementById("item" + num2).style.color = "#000";
    document.getElementById("item" + num3).style.color = "#000";

    document.getElementById("item" + num1).style.boxShadow = "0px 0px 0px 3px black inset";
    document.getElementById("item" + num2).style.boxShadow = "0px 0px 0px 3px black inset";
    document.getElementById("item" + num3).style.boxShadow = "0px 0px 0px 3px black inset";
    document.querySelector('.title').innerHTML = `${square[num2]} winner`;
    document.querySelector('.title').style.color = "yellow";
    
    }

    function win(){
        for(let i = 1; i < 10;i++){
            square[i] = document.getElementById("item" + i).innerHTML;
        }
        if(square[1] === square[2] && square[2] === square[3] && square[1] != ""){
            reloa(1,2,3)
        }else if(square[4] === square[5] && square[5] === square[6] && square[5] != ""){
            reloa()
        }else if(square[7] === square[8] && square[8] === square[9] && square[7] != ""){
            reloa()
        }else if(square[1] === square[4] && square[4] === square[7] && square[4] != ""){
            reloa()
        }else if(square[2] === square[5] && square[5] === square[8] && square[5] != ""){
            reloa()
        }else if(square[3] === square[6] && square[6] === square[9] && square[6] != ""){
            reloa()
        }else if(square[1] === square[5] && square[5] === square[9] && square[5] != ""){
            reloa()
        }else if(square[3] === square[5] && square[5] === square[7] && square[5] != ""){
            reloa()
        }else if(square[1] !== '' && square[2] !== '' && square[3] !== '' && square[4] !== "" && square[5] !== '' && square[6] !== '' && square[7] !== '' && square[8] !== '' && square[9] !== ''){
            reloa()
        }
    }
}


document.querySelector('#with').onclick = function(){
    features.forEach(e => {
        e.onclick = function(id){
            oneR().play(this.id)
            oneR().winner()
        }
    })
    document.querySelector('.change').classList.remove("classing")
    document.querySelector('#with').classList.add("classing2")
};




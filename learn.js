let All = document.querySelectorAll('.item');
    let features = Array.from(document.querySelectorAll('#parent #row div'));
    let turn = 'x';
    let RandomChoices;
    let win;
    let square = [];

    let Xscore = 0;
    let Oscore = 0;
     function reload(num1, num2, num3, num4, num5, num6, num7, num8, num9){
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
        if(square[num1] === 'X'){Xscore++;document.querySelector('.Xscore').innerHTML = Xscore;}
        else if(square[num1] === 'O'){Oscore++;document.querySelector('.Oscore').innerHTML = Oscore;}

        setTimeout(function(){
            let EmptySquare = features.filter(index => index.innerHTML !== "");
            EmptySquare.forEach(parametar => {
                parametar.innerHTML = "";
                parametar.style.background = '';
                parametar.style.boxShadow = '';
                parametar.style.color = '';
                if(parametar.className === 'blue'){
                    parametar.style.color = 'rgb(0, 200, 255)';
                }else if(parametar.className === 'red'){
                    parametar.style.color = 'rgba(255, 9, 9, 0.865)';
                }else if(parametar.className === 'yellow'){
                    parametar.style.color = 'rgb(234, 255, 0)';
                }
            })
        }, 3000)
    }

    function reloading(/*n1,n2,n3,n4,n5,n6,n7,n8,n9*/){
        features.forEach(i => {
            i.style.background = '#00ff2a';
            i.style.color = 'black';
            setTimeout(() => {
                i.style.background = '';
                i.style.color = '';
            }, 3000)
        })
        let EmptyBoxes = features.filter(element => element.innerHTML !== "");
        EmptyBoxes.forEach(Feature => {
            setTimeout(() => {
                Feature.innerHTML = "";
            }, 3000)
        })
        // && n2 && n3 && n4 && n5 && n6 && n7 && n8 && n9


    }
    function winner(){
        for(let i = 1; i < 10; i++){
            square[i] = document.getElementById('item' + i).innerHTML;
        }
        if(square[1] === square[2] && square[2] === square[3] && square[1] != ""){
            reload(1,2,3)
        }else if(square[4] === square[5] && square[5] === square[6] && square[5] != ""){
            reload(4,5,6)
        }else if(square[7] === square[8] && square[8] === square[9] && square[7] != ""){
            reload(7,8,9)
        }else if(square[1] === square[4] && square[4] === square[7] && square[4] != ""){
            reload(1,4,7)
        }else if(square[2] === square[5] && square[5] === square[8] && square[5] != ""){
            reload(2,5,8)
        }else if(square[3] === square[6] && square[6] === square[9] && square[6] != ""){
            reload(3,6,9)
        }else if(square[1] === square[5] && square[5] === square[9] && square[5] != ""){
            reload(1,5,9)
        }else if(square[3] === square[5] && square[5] === square[7] && square[5] != ""){
            reload(3,5,7)
        }else if(square.slice(1,9).every(cell => cell !== "")){
            reloading(/*1,2,3,4,5,6,7,8,9*/)
            document.querySelector('.title').innerHTML = 'Drow';
            Xscore = '';
            Oscore = '';
            document.querySelector('.Xscore').innerHTML = Xscore;
            document.querySelector('.Oscore').innerHTML = Oscore;
        }




        
    } 


    function theParentFunction(){
        All.forEach(element => {
        element.onclick = function(){
            if(turn === 'x' && element.innerHTML == ""){
                element.innerHTML = 'X';
                turn = 'o';
                document.querySelector('.title').innerHTML = 'O turn';
            }else if(turn === 'o' && element.innerHTML == ""){
                element.innerHTML = 'O';
                turn = 'x';
                document.querySelector('.title').innerHTML = 'X turn';
            }
            winner()
        }
    })

    }
    theParentFunction();

    function theSecondFunction(){
        All.forEach(theSon => {
            theSon.onclick = function(){

                    if(turn === 'x'){
                    theSon.innerHTML = 'X';
                    turn = 'o';
                    document.querySelector('.title').innerHTML = 'O turn';

                    setTimeout(function(){
                        let ComputerTurnOfPlay = features.filter(notEmpty => notEmpty.innerHTML === "");
                        RandomChoices = Math.floor(Math.random() * ComputerTurnOfPlay.length);
                        ComputerTurnOfPlay[RandomChoices].innerHTML = 'O';
                        turn = 'x';
                        winner()
                    }, 1000)
                }
                winner();
        }
        })
    }
    document.querySelector('.change').onclick = function(){theSecondFunction()}
    document.querySelector('.with').onclick = function(){theParentFunction()}
let dis = 'display';
    document.querySelector('.details').onclick = function(){
        if(dis === 'display'){
            document.querySelector('.details').style.height = '120px';
            dis = 'hide';
        }else{
            document.querySelector('.details').style.height = '30px';
            dis = 'display';
        }
    }

    function blue(){
        document.querySelectorAll('.item').forEach(all => {
            all.style.cssText = `
            background-color: black;
            color: rgb(0, 200, 255);
            font-size: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25vmin;
            width: 25vmin;
            box-shadow: 0px 0px 10px 3px rgb(0, 200, 255) inset;
            cursor: pointer;
            filter: brightness(150%);
            `;
        })
        document.querySelector('.title').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgb(0, 200, 255) inset;
            color: rgb(0, 200, 255);
            font-size: 35px;
        `;
        document.querySelector('.change').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgb(0, 200, 255) inset;
            color: rgb(0, 200, 255);
            font-size: 30px;
            border: none;
            padding: 10px;
            transition: width .2s;
        `;
        document.querySelector('.with').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgb(0, 200, 255) inset;
            color: rgb(0, 200, 255);
            font-size: 30px;
            border: none;
            padding: 10px;
            transition: width .2s;
        `;
    }

    function red(){
        document.querySelectorAll('.item').forEach(all => {
            all.style.cssText = `
            background-color: black;
            color: rgba(255, 9, 9, 0.865);
            font-size: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25vmin;
            width: 25vmin;
            box-shadow: 0px 0px 10px 3px rgba(255, 9, 9, 0.865) inset;
            cursor: pointer;
            filter: brightness(150%);
            `;
        })
        document.querySelector('.title').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgba(255, 9, 9, 0.865) inset;
            color: rgba(255, 9, 9, 0.865);
            font-size: 35px;
        `;
        document.querySelector('.change').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgba(255, 9, 9, 0.865) inset;
            color: rgba(255, 9, 9, 0.865);
            font-size: 30px;
            border: none;
            padding: 10px;
            transition: width .2s;
        `;
        document.querySelector('.with').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgba(255, 9, 9, 0.865) inset;
            color: rgba(255, 9, 9, 0.865);
            font-size: 30px;
            border: none;
            padding: 10px;
            transition: width .2s;
        `;
    }

    function yellow(){
        document.querySelectorAll('.item').forEach(all => {
            all.style.cssText = `
            background-color: black;
            color: rgb(234, 255, 0);
            font-size: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25vmin;
            width: 25vmin;
            box-shadow: 0px 0px 10px 3px rgb(234, 255, 0) inset;
            cursor: pointer;
            filter: brightness(150%);
            `
        })
        document.querySelector('.title').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgb(234, 255, 0) inset;
            color: rgb(234, 255, 0);
            font-size: 35px;
        `;
        document.querySelector('.change').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgb(234, 255, 0) inset;
            color: rgb(234, 255, 0);
            font-size: 30px;
            border: none;
            padding: 10px;
            transition: width .2s;
        `;
        document.querySelector('.with').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgb(234, 255, 0) inset;
            color: rgb(234, 255, 0);
            font-size: 30px;
            border: none;
            padding: 10px;
            transition: width .2s;
        `;
    }

    function Default(){
        document.querySelectorAll('.item').forEach(all => {
            all.style.cssText = `
            background-color: black;
            color: rgb(0, 255, 64);
            font-size: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25vmin;
            width: 25vmin;
            box-shadow: 0px 0px 0px 3px rgb(0, 255, 64) inset;
            cursor: pointer;
            filter: brightness(150%);
            `
        })
        document.querySelector('.title').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgb(0, 255, 64) inset;
            color: rgb(0, 255, 64);
            font-size: 35px;
        `;
        document.querySelector('.change').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgb(0, 255, 64) inset;
            color: rrgb(0, 255, 64);
            font-size: 30px;
            border: none;
            padding: 10px;
            transition: width .2s;
        `;
        document.querySelector('.with').style.cssText = `
            width: 200px;
            height: 50px;
            background: black;
            box-shadow: 0px 0px 2px 2.5px rgb(0, 255, 64) inset;
            color: rgb(0, 255, 64);
            font-size: 30px;
            border: none;
            padding: 10px;
            transition: width .2s;
        `;
    }




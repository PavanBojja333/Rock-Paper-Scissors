let user = 0;
let comp = 0;

const choice = document.querySelectorAll(".image");
const msg = document.querySelector("#msg");
const reset=document.querySelector("#btn");

const us = document.querySelector("#us");
const co = document.querySelector("#co");



const compGen = () =>{
    const a=["rock" , "paper" , "scissor"];
    const ind = Math.floor(Math.random() * 3);
    return a[ind];
};

const winner = (userWin , userChoice , compChoice)=>{
    console.log(userChoice);
    console.log(compChoice);
    if(userWin){
        user+=1;
        us.innerText = user;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comp+=1;
        co.innerText = comp;
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    const compChoice = compGen();

    if(userChoice === compChoice){
        msg.innerText = `Draw Game! Play again`;
        msg.style.backgroundColor = 'grey';
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "scissor";
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock";
        }
        else{
            userWin = compChoice === "paper";
        }

        winner(userWin , userChoice , compChoice);
    }

};


choice.forEach((val) =>{
    val.addEventListener("click" , () =>{
        const userChoice = val.getAttribute("id");
        playGame(userChoice);
    });
});

reset.addEventListener("click" , () =>{
    user =0 ;
    comp =0;
    us.innerText = user;
    co.innerText =comp;
    msg.innerText="Start again";
    msg.style.backgroundColor="rgb(4, 32, 53)";
})
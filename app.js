let gameSequence=[];
let userSequence=[];
let buttons=["yellow","purple","green","pink"]
// console.log("HI")

let gameStart=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(gameStart==false)
   {
          console.log("Game started");
          gameStart=true;
          levelUp();
   }      
}) 
function buttonFlash(btn)
{
          btn.classList.add("flash");
          setTimeout(function(){
                    btn.classList.remove("flash");
          },256);
}
function levelUp(){
          userSequence=[];
          level++;
          h2.innerText=`Your level is ${level}`;
          let ranIndx=Math.floor(Math.random()*3);
          let randcolor=buttons[ranIndx];
          let randbtn=document.querySelector(`.${randcolor}`);
          // console.log(ranIndx);
          // console.log(randcolor);
          // console.log(randbtn);
          gameSequence.push(randcolor);
          console.log(gameSequence);

          buttonFlash(randbtn);

}
let btns=document.querySelectorAll(".btn");
function checkAnswer(ind){
          // console.log(`Level is ${level}`)
          // let ind=level-1;
          if(gameSequence[ind]===userSequence[ind])
          {
                    if(gameSequence.length==userSequence.length)
                    {
                              setTimeout(levelUp,1000);
                    }
          }else
          {
                    h2.innerHTML=`Game Over Your Score was <b> ${level} <b> <br> Press any to Restart `;
                    document.querySelector("body").style.backgroundColor="red";
                    setTimeout(function(){
                              document.querySelector("body").style.backgroundColor="white";     
                    },150);
                    reset();
          }
}
function btnpress()
{
          let btn1=this;
          buttonFlash(btn1);
          let color=btn1.getAttribute("id");
          userSequence.push(color);
          console.log(userSequence);
          checkAnswer(userSequence.length-1);
}
for(btn of btns)
{
          btn.addEventListener("click", btnpress);
}
function reset()
{
          gameStart=false;
          gameSequence=[];
          userSequence=[];
          level=0;
}
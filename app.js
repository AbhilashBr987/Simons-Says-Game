let gameSeq=[];
let userSeq=[];
let btns=['yellow','red','purple','green'];
let started=false;
let level=0;
let maximum=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
	if(started==false){
		started=true;

		levelUp();
	}
});
function gameFlash(btn){
	btn.classList.add("flash");
	setTimeout(function(){
		btn.classList.remove("flash");
	},250);
}
function userFlash(btn){
	btn.classList.add("userFlash");
	setTimeout(function(){
		btn.classList.remove("userFlash");
	},250);
}
function levelUp(){
	userSeq=[];
	level++;
	h2.innerText=`Level ${level}`;
	let randnumber=Math.floor(Math.random()*4);
	let randColor=btns[randnumber];
	gameSeq.push(randColor);
	console.log(gameSeq);
	let randBtn=document.querySelector(`.${randColor}`);
	gameFlash(randBtn);
}
function checkAns(index){
	if(userSeq[index]==gameSeq[index]){
		if(userSeq.length==gameSeq.length){
			setTimeout(levelUp,1000);
		}
	}else{
		h2.innerHTML=`Game Over!!! Your Score was <b>${Math.max(0,level-1)}</b><br>Press Any Key to Start`;
		document.querySelector("body").style.backgroundColor="red";
		setTimeout(function(){
			document.querySelector("body").style.backgroundColor="white";
		},200);
		reset();
	}
}
function btnPress(){
	let btn=this;
	userFlash(btn);
	userColor=btn.getAttribute("id");
	userSeq.push(userColor);
	checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
	btn.addEventListener("click",btnPress);
}
function reset(){
	started=false; 
	gameSeq=[];
	maximum=Math.max(maximum,level);
	h3=document.querySelector("h3");
	h3.innerText=`Highest Score : ${Math.max(0,maximum-1)}`;
	level=0;
	userSeq=[];

}

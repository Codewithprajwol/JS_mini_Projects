const submitBtn=document.querySelector('.submit');
const startBtn=document.querySelector('.start-button');
const input=document.querySelector('#input');
const formArea=document.querySelector('#form-area');
const information=document.querySelector('.information');
const outputArea=document.querySelector('.Output-area');
const guessedSpan=document.querySelector('.guessed-number');

const randomNumber=Math.floor(Math.random()*100);
const guessedArray=[];

const pattern=/^(0|[1-9][0-9]*)$/;
const displayData=['Too Low!!','Too High!!','You Won :)',`you have lost.. Actual no. was ${randomNumber}`]
startBtn.disabled=true;



input.addEventListener('input',(e)=>{
    if(!pattern.test(input.value)){
        input.value="";
    }
})
formArea.addEventListener('submit',(e)=>{
    e.preventDefault();
})


submitBtn.onclick=function(){
    if(!input.value){
        outputArea.style.display="none";
    }
      
          if(input.value>=0 && input.value<=100)
          {
          guessedArray.push(input.value)
          outputArea.style.display="flex"
          }
    
  
    if(parseInt(input.value) < randomNumber){
        information.innerText=displayData[0];
     }
     else if(parseInt(input.value)== randomNumber){
         information.innerText=displayData[2];
         startBtn.disabled=false;
         startBtn.style.border='2px solid black';
         submitBtn.disabled=true;
     }
     else if (parseInt(input.value) > randomNumber){
         information.innerText=displayData[1];
     }

     if(guessedArray.length<=10){
           guessedSpan.innerText=guessedArray.join(', ');
     }
     else if(guessedArray.length>10){
           information.innerText=displayData[3];
           startBtn.disabled=false;
           startBtn.style.border='2px solid black';
           submitBtn.disabled=true;
     }


    if(input.value>=0 && input.value<100){
        input.value="";
        input.focus();
    }
}

    
startBtn.addEventListener('click',()=>{
    outputArea.style.display="none"
    submitBtn.disabled=false;
    startBtn.disabled=true;
    startBtn.style.border='1px solid black';
    location.reload();
})
const startBtn=document.querySelector('#start');
const pauseBtn=document.querySelector('#pause');
const resetBtn=document.querySelector('#reset');
const slider=document.querySelector('.inner-progress-bar');

let widthValue=0;
let intervalData;
startBtn.addEventListener('click',(e)=>{
    intervalData=setInterval(() => {
        slider.style.width=widthValue++ + "%";
    },100);
    startBtn.disabled=true;
    startBtn.style.cursor="not-allowed";
    pauseBtn.style.cursor="pointer";
    pauseBtn.disabled=false;
    
    if(widthValue>100){
       clearInterval(intervalData); 
    }
})

pauseBtn.addEventListener('click',(e)=>{
    clearInterval(intervalData)
    startBtn.disabled=false;
    startBtn.style.cursor="pointer";
    pauseBtn.style.cursor="not-allowed";
    pauseBtn.disabled=true;
})

resetBtn.addEventListener('click',(e)=>{
    widthValue=0;
    slider.style.width=widthValue + "%";
})
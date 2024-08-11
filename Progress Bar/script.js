const startBtn=document.querySelector('#start');
const pauseBtn=document.querySelector('#pause');
const resetBtn=document.querySelector('#reset');
const slider=document.querySelector('.inner-progress-bar');

const colorchanger=[
    {color:'red'},
    {color:'orange'},
    {color:'green'},
]

let widthValue=0;
let intervalData;



startBtn.addEventListener('click',(e)=>{
    intervalData=setInterval(() => {
        slider.style.width=widthValue++ + "%";
        
        if(widthValue<30){
    slider.style.backgroundColor=colorchanger[0].color;
         }

        if(widthValue>30){
    slider.style.backgroundColor=colorchanger[1].color;
         }

        if(widthValue>70){
    slider.style.backgroundColor=colorchanger[2].color;
         }

        if(widthValue>100){
            pauseBtn.disabled=true;
    pauseBtn.style.cursor="not-allowed";
            clearInterval(intervalData)
        }
    },100);
    startBtn.disabled=true;
    startBtn.style.cursor="not-allowed";
    pauseBtn.style.cursor="pointer";
    pauseBtn.disabled=false;
})

pauseBtn.addEventListener('click',(e)=>{
    clearInterval(intervalData)
    startBtn.disabled=false;
    startBtn.style.cursor="pointer";
    pauseBtn.style.cursor="not-allowed";
    pauseBtn.disabled=true;
})

resetBtn.addEventListener('click',(e)=>{
    clearInterval(intervalData)
    widthValue=0;
    slider.style.width=widthValue + "%";
    startBtn.disabled=false;
    startBtn.style.cursor="pointer"
    pauseBtn.disabled=false;
    pauseBtn.style.cursor="pointer"
    
})
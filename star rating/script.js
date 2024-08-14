const emojiContainer=document.querySelector('.emoji-container');
const stars=document.querySelectorAll('.star');

const emoji=['','😭','😥','😙','🤗','😍']


const starContainer=document.querySelector('.ratting-container');
let condition=true;
let dataValue;

//listner code for Mousemove
const mouseMoveEventHandler=(e)=>{
    const datavalue=e.target.dataset.index;
        stars.forEach((star,index)=>{
   
                if(index<datavalue){
                    star.classList.add('fa-solid');
                    star.style.transform="scale(1.2)";
                }
                else{
                    star.classList.remove('fa-solid');
                    star.style.transform="scale(1)";
                
                }
            })

}

//listner code for first time mouseLeave event
function mouseLeaveEventHandler(e){

    starContainer.addEventListener('mousemove',mouseMoveEventHandler)


        stars.forEach((star)=>{
            star.style.transform="scale(1)";
                star.classList.remove('fa-solid');
        })
}

//listner code for after click mouseLeave event
function testAgainEventListner(){
    stars.forEach((star,index)=>{
   
        if(index<dataValue){
            star.classList.add('fa-solid');
            star.style.transform="scale(1.2)";
        }
        else{
            star.classList.remove('fa-solid');
            star.style.transform="scale(1)";
        
        }
    })
}


 //it is for checking the condition
 function RunEventWithCondition(){
        if(condition){
            starContainer.addEventListener('mousemove',mouseMoveEventHandler)
            starContainer.addEventListener('mouseleave',mouseLeaveEventHandler)
        }
        else{
            starContainer.removeEventListener('mouseleave',mouseLeaveEventHandler)
            starContainer.addEventListener('mouseleave',testAgainEventListner)
     }
    }
   RunEventWithCondition()


   //click operation is performed
starContainer.addEventListener('click',(e)=>{
    condition=false;
    dataValue=e.target.dataset.index
    stars.forEach((star,index)=>{

            if(index<dataValue){
                star.classList.add('fa-solid');
                star.style.transform="scale(1.2)";
            }
            else{
                star.classList.remove('fa-solid');
                star.style.transform="scale(1)";
            
            }
        })
    
    emojiContainer.textContent=emoji[e.target.dataset.index] || emoji[0];
    RunEventWithCondition()
})

const gridChanger=document.querySelector('#change-grid');
const btnContainer=document.querySelector('.inner-container')
const validationPattern=/^(3|4|5)$/;

let currentTarget='X'

function Makegrid({value=3}){
    if(!validationPattern.test(value)){
        gridChanger.value="";
        return;
    }
    btnContainer.innerHTML="";

    const fragment = document.createDocumentFragment();

    btnContainer.style.gridTemplateColumns=`repeat(${value},70px)`
    for(let i=1;i<=value*value;i++){
        const btn=document.createElement('button');
        btn.classList.add('click-btn')
        fragment.appendChild(btn)
    }
    btnContainer.appendChild(fragment);

        const button=document.querySelectorAll('.click-btn')
         console.log(button)
}

gridChanger.addEventListener('input',()=>{
    Makegrid({value:gridChanger.value})

})
Makegrid({});

//?let's use event deligation
function gameLogic(e){
    
    if(e.target.classList.contains('click-btn')){
       const btn=e.target;

       if(btn.innerHTML===''){
          btn.innerHTML=`<b>${currentTarget}</b>`

          currentTarget=currentTarget==='X'? 'O':'X';
       }
    }
}
btnContainer.addEventListener('click',gameLogic)


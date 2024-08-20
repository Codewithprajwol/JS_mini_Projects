const gridChanger=document.querySelector('#change-grid');
const btnContainer=document.querySelector('.inner-container')
const validationPattern=/^(3|4|5)$/;

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
        fragment.appendChild(btn)
    }
    btnContainer.appendChild(fragment);
}

gridChanger.addEventListener('input',()=>{
    Makegrid({value:gridChanger.value})

})

Makegrid({});

const input=document.querySelector('#input');
const btn=document.querySelector('#show-btn');
const horizontal=document.querySelector('#Horizontal');
const vertical=document.querySelector('#Vertical');
const message=document.querySelector('#Message');
const popupContainer=document.querySelector('.Popup');



function SelectInfo({ver,hor,mes}){
  const popup=document.createElement('div');
  popup.classList.add('inner-popup');
  if(hor=='right' && ver=='top'){
     popup.classList.add('right');
  }
popup.textContent=`I love you RadhaKrishna very Much.`;
popupContainer.appendChild(popup)

  }
  

   


btn.addEventListener('click',(e)=>{
   SelectInfo({ver:vertical.value ,
        hor:horizontal.value,
        mes:message.value
   })     
})
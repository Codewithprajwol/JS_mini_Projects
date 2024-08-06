
const input=document.querySelector('#input');
const btn=document.querySelector('#show-btn');
const horizontal=document.querySelector('#Horizontal');
const vertical=document.querySelector('#Vertical');
const message=document.querySelector('#Message');
const popupContainer=document.querySelector('.Popup');



function SelectInfo({ver,hor,mes}){
  if(hor=='right'){
    popupContainer.classList.add('right');
  }
  else{
    popupContainer.classList.remove('right')
  }

  if( ver=='bottom'){
    popupContainer.classList.add('bottom');
  }
  else{
    popupContainer.classList.remove('bottom')
  }
  const popup=document.createElement('div');
  popup.classList.add('inner-popup');
  popup.textContent=input.value;
  popupContainer.appendChild(popup)


  setTimeout(()=>{
    
  },1000)
  }

btn.addEventListener('click',(e)=>{
   SelectInfo({ver:vertical.value ,
        hor:horizontal.value,
        mes:message.value
   })     
})
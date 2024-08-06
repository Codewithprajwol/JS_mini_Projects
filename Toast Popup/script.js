
const input=document.querySelector('#input');
const btn=document.querySelector('#show-btn');
const horizontal=document.querySelector('#Horizontal');
const vertical=document.querySelector('#Vertical');
const message=document.querySelector('#Message');
const popupContainer=document.querySelector('.Popup');
const ProgressBar=document.querySelector('#progressBar');

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
  popup.classList.add(mes)
  popupContainer.appendChild(popup)

  function removeAnimation(){
    if(hor == 'right'){
      popup.classList.add('hide1');
    }
    else{
  popup.classList.add('hide');
    }
}
// popup.remove();
  setTimeout(removeAnimation,ProgressBar.value*1000)
  // setTimeout(()=>{
  //   popup.remove();
  //   console.log('i am done')
  // },ProgressBar.value+.1*1000)
  }

btn.addEventListener('click',(e)=>{
   SelectInfo({ver:vertical.value ,
        hor:horizontal.value,
        mes:message.value
   })     
})
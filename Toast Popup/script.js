
const input=document.querySelector('#input');
const btn=document.querySelector('#show-btn');
const horizontal=document.querySelector('#Horizontal');
const vertical=document.querySelector('#Vertical');
const message=document.querySelector('#Message');
const popupContainer=document.querySelector('.Popup');
const ProgressBar=document.querySelector('#progressBar');

function SelectInfo({ver,hor,mes}){
  const popup=document.createElement('div');
  popup.classList.add('inner-popup');
  popup.textContent=input.value;
  popup.classList.add(mes)
  const closeIcon=document.createElement('span');
  closeIcon.classList.add('close-icon')
  closeIcon.innerText=' ✕';
  popup.appendChild(closeIcon);
  popupContainer.appendChild(popup)

  // addding classes
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

// function for remove animation
  function removeAnimation(){
    if(hor == 'right'){
      popup.classList.add('hide1');
    }
    else{
      popup.classList.add('hide');
    }
  }

//click remove event listner
  closeIcon.addEventListener('click',(e)=>{
    removeAnimation();
    setTimeout(()=>popup.remove(),100)
  })


  //adding settimeout for removing popup
  setTimeout(removeAnimation,ProgressBar.value*1000)
  setTimeout(()=>{
    popup.remove();
    console.log('i am done')
  },ProgressBar.value+.1*1000)
  }


  
  // adding event listner when button is clicked
btn.addEventListener('click',(e)=>{
   SelectInfo({ver:vertical.value ,
        hor:horizontal.value,
        mes:message.value
   })     
})
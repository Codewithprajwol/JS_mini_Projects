const items = document.querySelectorAll(".slider .items");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slider=document.querySelector('.slider');

let active = 3;

function showSlides() {
  let incrementor = 0;
  items[active].style.zIndex = 1;
  items[active].style.transform = 'none';
  items[active].style.filter='none';
  items[active].style.opacity=1;
  for (let i = active + 1; i <items.length; i++) {
    incrementor++;
    items[i].style.zIndex = `${-incrementor}`;
    items[i].style.transform = `translateX(${
      incrementor * 115
    }px) scale(${1-0.2*incrementor}) perspective(16px) RotateY(-1deg)`;
    items[i].style.filter='blur(5px)';
    items[i].style.opacity=incrementor>2? 0 :0.8;
  }
  incrementor=0;
  for (let i = active - 1; i>=0; i--) {
    incrementor++;
    items[i].style.zIndex = `${-incrementor}`;
    items[i].style.transform = `translateX(${-
      incrementor * 115
    }px) scale(${1-0.2*incrementor}) perspective(16px) RotateY(1deg)`;
    items[i].style.filter='blur(5px)';
    items[i].style.opacity=incrementor>2? 0 :0.8;
  }
}

showSlides();

next.addEventListener('click',()=>{ 
    active = (active + 1)<items.length ? active+1 : active;
    showSlides();
  });
  
  prev.onclick = function() {
    active = (active - 1 )>=0 ? active-1 :active;
    showSlides();
  };

 

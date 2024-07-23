const zoomImage=document.getElementById('image-zoom');
zoomImage.addEventListener('mousemove', function(e){
    zoomImage.style.setProperty('--display','block');
    let pointer={
        x:(e.offsetX*100)/zoomImage.offsetWidth,
        y:(e.offsetY*100)/zoomImage.offsetHeight
    }
    zoomImage.style.setProperty('--zoom-x',`${pointer.x}%`)
    zoomImage.style.setProperty('--zoom-y',`${pointer.y}%`)
})

zoomImage.addEventListener('mouseleave',(e)=>{
    zoomImage.style.setProperty('--display','none');
})

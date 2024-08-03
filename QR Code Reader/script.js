const image=document.querySelector('#QR-image');
const input=document.querySelector('#query')
const searchBtn=document.querySelector('.search-button');

const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

searchBtn.addEventListener('click',(e)=>{

    image.src=url + input.value;
})
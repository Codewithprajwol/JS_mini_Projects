const memeGenerator=document.querySelector('.hero-section>h2')
const title=document.querySelector('.title')
const img=document.querySelector('.meme-image')
const authorName=document.querySelector('.author-name');


function getNewJokes(){
fetch('https://meme-api.com/gimme/wholesomememes')
.then((response)=>response.json())
.then((data)=>{
    data.title.length>30?title.textContent="Meme" : title.textContent=data.title;
    img.setAttribute('src',data.url)
    authorName.textContent=data.author;
});
}

getNewJokes()

memeGenerator.addEventListener('click',()=>{
    getNewJokes();
})

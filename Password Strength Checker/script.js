const password=document.querySelector('#password')
const caseName=document.querySelector('.case');
function textCheck(data){
    let filterdData;
    const arrayData=[...data];
    if(arrayData.length){
     filterdData=arrayData[arrayData.length-1]
    }
   
 
   if(/[a-z]/.test(filterdData)){
    caseName.firstElementChild.style.color="#008000";
    console.log('yo ta lowercase raixa hai')
   }
   else if(/[A-Z]/.test(filterdData)){
    console.log('yo to uppercase raixa');
   }
   else if(/[0-9]/.test(filterdData)){
    console.log('yo ta number raixa');
   }
   else if(/[\W_]/.test(filterdData)){
    console.log('yo ta special symbol raixa ')
   }
   else{
    console.log('yo ta kei haina')
   }
}
function eventHandler({info}){
   const finaldata=textCheck(info)
}

password.addEventListener('input',()=>{
    eventHandler({info:password.value})
})
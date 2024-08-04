const input=document.querySelector('#input');

function CheckNumberOnly(info){
   return [...info].filter((num)=>Number.isInteger( +num) && num !==' ').join('');
}

function takeInput(data){
    const filteredData=CheckNumberOnly(data)
const format=  filteredData.length>3 ? `+(${filteredData.substring(0,3)}) - ${filteredData.substring(3)}` : filteredData;
 return format;
}

input.addEventListener('input',()=>{
  input.value= takeInput(input.value)
})

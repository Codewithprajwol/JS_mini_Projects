const mainInput=document.querySelector('#input');
const Input=document.querySelector('#input1');
const Input1=document.querySelector('#input2')
const Input2=document.querySelector('#input3')
const Input3=document.querySelector('#input4')
const Input4=document.querySelector('#input5')
const Input5=document.querySelector('#input6')

mainInput.addEventListener('input',(e)=>{


    const Data=mainInput.value;
    Input.value=Data.toUpperCase();
    Input1.value=Data.toLowerCase();
    Input4.value=Data.replaceAll(' ','_');
    Input3.value=Data.replaceAll(' ','-');
})

// const testData='my name is Prajwol Shrestha'

// function Camel(Data){
//    finalData=[...Data]
// finalData[0].toUpperCase();
//     finalData.forEach((data,index)=>{
//         if(data.includes(' ')){
//        finalData[index+1].toUpperCase()
//        console.log(finalData)
//         }
//      })

// }

// Camel(testData);

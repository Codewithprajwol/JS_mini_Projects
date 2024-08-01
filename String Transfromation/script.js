const mainInput=document.querySelector('#input');
const upperCase=document.querySelector('#input1')
const lowerCase=document.querySelector('#input2');
const cameCase=document.querySelector('#input3')
const snakeCase=document.querySelector('#input4')
const KebabCase=document.querySelector('#input5')
const pascalCase=document.querySelector('#input6')
const trim=document.querySelector('#input5')





// function textTransform({data=mainInput.value.trim()}){
//     // const camelCase=data.toLowerCase().split(' ').reduce((a,b)=>a + b[0]?.toUpperCase()+b.substring(1).toLowerCase());
// lowerCase.textContent=data.toLowerCase();
// }

// mainInput.addEventListener('input',textTransform);
// textTransform({})

function textTransform({ data } = {}) {
    data = data || mainInput.value.trim();

    lowerCase.textContent = data.toLowerCase();
}

mainInput.addEventListener('input', () => textTransform({}));




const mainInput=document.querySelector('#input');
const upperCase=document.querySelector('#input1')
const lowerCase=document.querySelector('#input2');
const camelCase=document.querySelector('#input3')
const KebabCase=document.querySelector('#input4')
const snakeCase=document.querySelector('#input5')
const trim=document.querySelector('#input6')
const pascalCase=document.querySelector('#input7')

// function textTransform({data=mainInput.value.trim()}){
//     // const camelCase=data.toLowerCase().split(' ').reduce((a,b)=>a + b[0]?.toUpperCase()+b.substring(1).toLowerCase());
// lowerCase.textContent=data.toLowerCase();
// }

// mainInput.addEventListener('input',textTransform);
// textTransform({})
function textTransform({ data } = {}) {
    data = data || mainInput.value.trim();
const camelCaseOutput=data.toLowerCase().split(' ').reduce((a,b)=>a + b[0]?.toUpperCase()+b.substring(1).toLowerCase());
    lowerCase.textContent = data.toLowerCase();
    upperCase.textContent= data.toUpperCase();
    camelCase.textContent=camelCaseOutput;
    pascalCase.textContent=camelCaseOutput ? camelCaseOutput[0].toUpperCase()+camelCaseOutput.substring(1) : '';
    trim.textContent=data;
    snakeCase.textContent=data.split(' ').join('_');
    KebabCase.textContent=data.split(' ').join('-');
}

mainInput.addEventListener('input', () => textTransform({}));
textTransform({});

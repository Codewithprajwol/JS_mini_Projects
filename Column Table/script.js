const row=document.querySelector('#row');
const column=document.querySelector('#column');
const parentTable=document.querySelector('.table');

// const table=document.createElement('table');
// table.setAttribute('border','1');
// let clutter=""


function displayChanges(){
    for(let i=1;i<=column.value;i++){
          for(let j=1;j<=row.value;j++){
            clutter=`<th>${i}</th>
            
            `
        }
        table.innerHTML+=clutter;
        clutter="";
    }

}

// row.addEventListener('change',()=>{
//     console.log(row.value)
//     for(let i=0;i<row.value;i++){
//         clutter+=`
//         <tr>
//         <td>${i+1}</td>
//         </tr>`
//     }
  
//     table.innerHTML=clutter;
//     clutter=""
// })
// column.addEventListener('change',()=>{
//     console.log(column.value)
//     for(let i=0;i<column.value;i++){
//         clutter+=`
//             <th class="test">${i+1}</th>
//        `
//     }
  
//     table.innerHTML=clutter;
//     clutter=""
// })
// row.addEventListener('change',displayChanges)
// column.addEventListener('change',displayChanges)


for(let i=1;i<=column.value;i++){
    const box=document.createElement('div');
    box.classList.add('box');
    box.innerText=`${i}`;
    
    parentTable.append(box);
}
for(let i=1;i<=row.value;i++){
    const box=document.createElement('div');
    box.classList.add('box');
    box.innerText=`${i}`;
    
    parentTable.append(box);
}

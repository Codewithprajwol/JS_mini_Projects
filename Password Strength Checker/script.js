const password=document.querySelector('#password');
const meter=document.querySelector('#meter');
const lcel=document.querySelector('#Lcel');
const ucel=document.querySelector('#Ucel');
const nel=document.querySelector('#Nel');
const sel=document.querySelector('#Sel');
const passwordStrength=document.querySelector('.pwd-strength>b')
const characterInfo=document.querySelector('.char-info>b')

const hasNumber=/\d/
const hasUpperCase=/[A-Z]/
const hasLowerCase=/[a-z]/
const hasSymbol=/[^A-Za-z0-9]/

const validation=[
    {difficulty:'weak',},
    {difficulty:'Medium'},
    {difficulty:'Strong'}
]

function getLength(score){
    
  if(score>8){
      return validation[2]
    }
  if(score>5){
    return validation[1];
  }
  else{
    return validation[0];
  }
}

function getScore(info){
  let score=0;
  if(info.length>3){
    score=Math.min(6,Math.floor(info.length/2));
    score+=hasNumber.test(info)+hasUpperCase.test(info)+hasLowerCase.test(info)+hasSymbol.test(info);
  }
  return score;
}

function updataeUi(score,length,char,indicator){
    characterInfo.textContent=char;
    meter.value=score *10;
    passwordStrength.textContent=length.difficulty;
    lcel.className=indicator.Lc;
    nel.className=indicator.Num;
    ucel.className=indicator.Uc;
    sel.className=indicator.Sym;
}

function eventHandler(info){
    const score=getScore(info);
    const length=getLength(score);
    const [Uc,Lc,Num,Sym]=[
        hasUpperCase.test(info),
        hasLowerCase.test(info),
        hasNumber.test(info),
        hasSymbol.test(info)
    ]
    
    updataeUi(score,length,info.length,{Uc,Lc,Num,Sym})
}
     
password.addEventListener('input',()=>{
    eventHandler(password.value)
})


const [one,two,three,four]=[1,2,3,4]
 const data1={one,two,three,four}
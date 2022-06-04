import App from "./c.js";

//const app=new App(data);

const WIDTH=window.innerWidth
const main=document.getElementById('h');
if(WIDTH<=500){
//main.style.width=(WIDTH*0.75)+"px";
console.log(WIDTH);
}

const input=document.querySelectorAll('input');
const btn1=document.getElementById('btn-1');
const btn2=document.getElementById('btn-2');

const moy=document.querySelectorAll('.moy');
const div=document.querySelectorAll('.div');


const app=new App(input);
app.getData(input);
//console.log(app.arr);
function setData(){}
input.forEach((element,index) => {
    element.addEventListener('change',()=>{
        

        moy[0].innerHTML='<span class="moy_mod">'+app.t1(0,1);
        moy[1].innerHTML='<span class="moy_mod" >'+app.t1(2,3);
        moy[2].innerHTML='<span class="moy_mod" >'+app.t1(4,5);
        moy[3].innerHTML='<span class="moy_mod" >'+app.t1(6,7);
        moy[4].innerHTML='<span class="moy-UE" >'+app.UEF(moy);
        moy[5].innerHTML='<span class="moy_mod">'+app.t2(8,9);
        moy[6].innerHTML='<span class="moy_mod">'+app.t2(10,11);
        moy[7].innerHTML='<span class="moy_mod">'+app.t2(12,13);
        moy[8].innerHTML='<span class="moy-UE">'+app.UEM(moy);
        moy[9].innerHTML='<span class="moy_mod">'+input[14].value;
        moy[10].innerHTML='<span class="moy-UE">'+input[14].value;
        moy[11].innerHTML='<span class="moy_mod">'+input[15].value;
        moy[12].innerHTML='<span class="moy-UE">'+input[15].value;
        moy[13].innerHTML='<span>'+app.moy_S(document.querySelectorAll('.moy-UE'))

        app.coff(document.querySelectorAll('.moy_mod'))
        app.coff1(document.querySelectorAll('.moy_mod'))
        app.coffF(document.querySelectorAll('.moy_mod'))
        //console.log(app.coff_UED);
        //console.log(app.coff_UET2);
    })
});


const moy2=document.querySelectorAll('.moy-2');

//console.log(moy2);
btn1.addEventListener('click',()=>{
const moy3=document.querySelectorAll('.moy_mod');
const card=document.querySelector('.card')
const title=document.getElementById('title')

if(app.moy_S(document.querySelectorAll('.moy-UE'))>0){
for (let index = 0; index < 2; index++) {
div[index].style.display='flex'    

}
}
moy2[0].innerHTML="<span>"+app.UEF(moy);
moy2[1].innerHTML="<span>"+app.coffF(moy3);
moy2[2].innerHTML="<span>"+app.UEM(moy);
moy2[3].innerHTML="<span>"+app.coff1(moy3);
moy2[4].innerHTML="<span>"+input[14].value;
input[14].value<10?moy2[5].innerHTML=0:moy2[5].innerHTML=2;
moy2[6].innerHTML="<span>"+input[15].value;
input[15].value<10?moy2[7].innerHTML=0:moy2[7].innerHTML=1;
moy2[8].innerHTML="<span>"+app.moy_S(document.querySelectorAll('.moy-UE'))
app.moy_S(document.querySelectorAll('.moy-UE'))>10?moy2[9].innerHTML=30:moy2[9].innerHTML="<span>"+app.coff(moy3);
const moy111=app.moy_S(document.querySelectorAll('.moy-UE'));
if(moy111>10){
    card.style.background="rgba(29, 170, 29, 0.845)"
    btn2.style.background="rgba(29, 170, 29, 0.845)"
    title.innerText="نتائج  جيدة"
    if(moy111>15){
        title.innerText="نتائج  جيدة جدا"
    }
}else if(moy111<10){
    card.style.background="rgb(193, 20, 20)"
    btn2.style.background="rgb(193, 20, 20)"
    title.innerText="نتائج تحت متوسط"
    if(moy111<6){
        title.innerText="نتائج سيئة جدا"
    }
}

})

document.querySelector('.div1').addEventListener('click',()=>{
    for (let index = 0; index < 2; index++) {
        div[index].style.display='none'    
    }
})
btn2.addEventListener('click',()=>{

    for (let index = 0; index < 2; index++) {
    div[index].style.display='none'    
    }
    
})


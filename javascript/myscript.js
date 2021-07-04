let allcanvas={
    games:[
        {herf:"https://weichang0307.github.io/music-game-made/",name:'music-game-made'},
    ],
    tools:[
        {herf:"https://weichang0307.github.io/canvas-drawer/",name:'canvas-drawer'},
        {herf:'https://weichang0307.github.io/music-made/',name:'music-made'},
        {herf:'https://weichang0307.github.io/img-get-rid-of-color/',name:'img-get-rid-of-color'}
        
    ]
}
let allthreejs={
    games:[
        {herf:'https://weichang0307.github.io/3Dzombies/',name:'3Dzombies'},
        {herf:'https://weichang0307.github.io/wave-interference/',name:'wave-interference'}
    ]
}
let divhome=document.getElementById('home')
let divsearch=document.getElementById('search')



function canvashtml(element,base,div){
    let inner=base
    inner+='<h2>&emsp;'+element+'</h2>'
    for(let i of allcanvas[element]){
        inner+='<h3>&emsp;&emsp;<a href='+i.herf+' target="_blank" id='+i.name+'>'+i.name+'</a><br></h3>'
    }
    if(div!=null){
        div.innerHTML=inner
    }else{
        return inner
    }
    
}
function threejshtml(element,base,div){
    let inner=base
    inner+='<h2>&emsp;'+element+'</h2>'
    for(let i of allthreejs[element]){
        inner+='<h3>&emsp;&emsp;<a href='+i.herf+' target="_blank" id='+i.name+'>'+i.name+'</a><br></h3>'
    }
    if(div!=null){
        div.innerHTML=inner
    }else{
        return inner
    }

}
function inithomepage(){
    let inner=''
    inner+='<h1>Canvas</h1>'
    canvashtml('games',inner,divhome)
    canvashtml('tools',divhome.innerHTML,divhome)
    divhome.innerHTML+='<h1>Three js</h1>'
    threejshtml('games',divhome.innerHTML,divhome)

}
inithomepage()








let form01=document.getElementById('form01')
let input01=document.getElementById('input01')

form01.addEventListener('submit',(e)=>{
    let searched=''
    e.preventDefault()
    let keyword=input01.value.trim().toLowerCase()/*
    for(let i of Object.keys(allcanvas)){
        if(i.includes(keyword)){
            searched+=canvashtml(i,'',null)
        }
    }
    for(let i of Object.keys(allthreejs)){
        if(i.includes(keyword)){
            searched+=canvashtml(i,'',null)
        }
    }*/
    if(searched===''){
        for(let y of Object.keys(allcanvas)){
            for(let i of allcanvas[y]){
                if(i.name.includes(keyword)){
                    searched+='<h3>games&emsp;&emsp;<a href='+i.herf+' target="_blank" id='+i.name+'>'+i.name+'</a><br></h3>'
                }
            }
        }
        for(let y of Object.keys(allthreejs)){
            for(let i of allthreejs[y]){
                if(i.name.includes(keyword)){
                    searched+='<h3>games&emsp;&emsp;<a href='+i.herf+' target="_blank" id='+i.name+'>'+i.name+'</a><br></h3>'
                }
            }
        }
    }
    if(searched===''||keyword===''){
        alert('nothing is found by keyword:'+keyword)
    }else{
        divhome.style.display='none'
        divsearch.style.display='block'
        divsearch.innerHTML=searched
    }
    
    

})
let homebtn=document.getElementById('homebtn')
homebtn.addEventListener('click',(e)=>{
    divsearch.style.display='none'
    divhome.style.display='block'
})

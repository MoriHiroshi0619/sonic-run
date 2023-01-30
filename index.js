const sonic = document.querySelector('.sonic');
const enemy = document.querySelector('.enemy');
const cloud = document.querySelector('.clouds');
const score = document.querySelector('.score');
const pageWidth = window.innerWidth;
var s = 0;
console.log(`width da janela = ${pageWidth}`);


//media querry do js da gambiarra master de todas
if(pageWidth <= 570){
    var sonicSpin = +27 ;
}else{
    var sonicSpin = +50
}

const sonicLeftposition = +window.getComputedStyle(sonic).left.replace('px', '');
const sonicWidth = +window.getComputedStyle(sonic).width.replace('px', '');

const jump = () => {
    sonic.classList.add('jump');
    sonic.src = 'imagem/sonic-jump.GIF';
    sonic.style.width = `${sonicWidth-sonicSpin}px`; //-50px
    setTimeout(() => {
        sonic.classList.remove('jump');
        sonic.src = 'imagem/sonic-run.GIF';
        sonic.style.width = `${sonicWidth}px`
    }, 600);
}


const loop = setInterval(() => {

    const enemyPosition = enemy.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    const cloudPosition = cloud.offsetLeft;

    var sonicColiFront = sonicLeftposition + sonicWidth - 20;
    
    score.innerHTML = `score -> ${s}`;
    s++;

    //console.log(`left = ${sonicLeftposition}`)
    // console.log(`width = ${sonicWidth}`)
    //console.log(sonicColiFront )
    

    if(enemyPosition <= sonicColiFront  && enemyPosition >= sonicLeftposition - 50  && sonicPosition <= 65){
        enemy.style.animation = 'none'; 
        enemy.style.left = `${enemyPosition}px`;
        
        sonic.style.animation = 'none';
        sonic.src = './imagem/sonic-game-over.png';
        sonic.style.width = `${sonicWidth+30}px`;
        sonic.style.bottom = `${sonicPosition}px`;
        
        cloud.style.left = `${cloudPosition}px`;
        cloud.style.animation = 'none';   

        clearInterval(loop); 
        document.removeEventListener('keydown', jump);    
    }
},10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump); 





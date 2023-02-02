const sonic = document.querySelector('.sonic');
const enemy = document.querySelector('.enemy');
const cloud = document.querySelector('.clouds');
const cloud2 = document.querySelector('.clouds2');
const score = document.querySelector('.score');
const playButton = document.querySelector('#play');
const menuBoard = document.querySelector('#menu-board');
const scoreBoard = document.querySelector('#score-board');
const gameOverBoard = document.querySelector('#gameOver-board');
const scored = document.querySelector('#scored');
const retryButton = document.querySelector('#retry');


const pageWidth = window.innerWidth;

//media querry do js da gambiarra master de todas
if(pageWidth <= 570){
    //mobile
    var sonicSpin = +27 ;
    var sonicWait = 75;
    var sonicRun = 100;
}else{
    //desktop
    var sonicSpin = +50;
    var sonicWait = 105;
    var sonicRun = 140;
}

sonic.src = 'imagem/sonic-wait.GIF'
sonic.style.width = `${sonicWait}px`;
sonic.style.bottom = '0px';


function play(){
    menuBoard.style.visibility = 'hidden';
    gameOverBoard.style.visibility = 'hidden'
    scoreBoard.style.visibility = 'visible';
    
    sonic.src = 'imagem/sonic-run.GIF';
    sonic.style.width = `${sonicRun}px`
    sonic.style.bottom = '-7px';
    
    enemy.style.visibility = 'visible';
    enemy.classList.add('run');
    
    
    var s = 0;
    const sonicLeftposition = +window.getComputedStyle(sonic).left.replace('px', '');
    const sonicWidth = +window.getComputedStyle(sonic).width.replace('px', '');
    

    const jump = () => {
        sonic.classList.add('jump');
        sonic.src = 'imagem/sonic-jump.gif';
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
        const cloud2Position = cloud2.offsetLeft;
    
        var sonicColiFront = sonicLeftposition + sonicWidth - 20;
        
        score.innerHTML = `score -> ${s}`;
        s++;
            
        console.log('loop');
        if(enemyPosition <= sonicColiFront  && enemyPosition >= sonicLeftposition - 50  && sonicPosition <= 65){
            document.removeEventListener('keydown', jump);    
            document.removeEventListener('touchstart', jump);
            enemy.classList.remove('run');

            enemy.style.animation = 'none'; 
            enemy.style.left = `${enemyPosition}px`;
            
            sonic.style.animation = 'none';
            sonic.style.width = `${sonicWidth+30}px`;
            sonic.style.bottom = `${sonicPosition}px`;
            sonic.src = 'imagem/sonic-game-over.png';
            
            cloud.style.left = `${cloudPosition}px`;
            cloud.style.animation = 'none';   

            cloud2.style.left = `${cloud2Position}px`;
            cloud2.style.animation = 'none';   
            
            clearInterval(loop); 
            gameOVer(s);
        }
    },10);

    document.addEventListener('keydown', jump);
    document.addEventListener('touchstart', jump); 
}

function gameOVer(s){
    scoreBoard.style.visibility = 'hidden';
    gameOverBoard.style.visibility = 'visible'
    scored.innerText = `scored ${s} pts`
    sonic.src = 'imagem/sonic-game-over.png';
    retryButton.addEventListener('click', function(){
        location.reload();
    });
}


playButton.addEventListener('click', play);





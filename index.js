const sonic = document.querySelector('.sonic');
const enemy = document.querySelector('.enemy');
const cloud = document.querySelector('.clouds');

const jump = () => {
    sonic.classList.add('jump');
    sonic.src = 'imagem/sonic-jump.GIF';
    sonic.style.width = `90px`;
    setTimeout(() => {
        sonic.classList.remove('jump');
        sonic.src = 'imagem/sonic-run.GIF';
        sonic.style.width = '140px '
    }, 600);
}

const loop = setInterval(() => {

    const enemyPosition = enemy.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    const cloudPosition = cloud.offsetLeft;

    //console.log(sonicPosition);

    if(enemyPosition <= 300 && enemyPosition >= 130 && sonicPosition <= 65){
        enemy.style.animation = 'none';
        enemy.style.left = `${enemyPosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;
        sonic.src = './imagem/sonic-game-over.png';
        sonic.style.width = '170px';

        cloud.style.left = `${cloudPosition}px`;
        cloud.style.animation = 'none';

    }
},10);

document.addEventListener('keydown', jump);
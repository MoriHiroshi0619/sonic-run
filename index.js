const sonic = document.querySelector('.sonic');
const enemy = document.querySelector('.enemy');

const jump = () => {
    sonic.classList.add('jump');
    sonic.src = 'imagem/sonic-jump.GIF';
    sonic.style.width = `100px`;
    setTimeout(() => {
        sonic.classList.remove('jump');
        sonic.src = 'imagem/sonic-run.GIF';
        sonic.style.width = '140px '
    }, 500);
}

const loop = setInterval(() => {

    const enemyPosition = enemy.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    //console.log(sonicPosition);

    if(enemyPosition <= 300 && enemyPosition >= 130 && sonicPosition <= 65){
        enemy.style.animation = 'none';
        enemy.style.left = `${enemyPosition}px`;

        sonic.style.animation = 'none';
        setInterval(500 );
        sonic.style.bottom = `${sonicPosition}px`;
    }
},10);

document.addEventListener('keydown', jump);
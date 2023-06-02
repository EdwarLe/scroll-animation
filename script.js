const imparBox = document.querySelectorAll('.content');

console.log(imparBox[3]);

let scrollYMed = window.onscroll = () => {
    let y = window.scrollY;
    return console.log(y);
}

console.log(scrollYMed);

window.onscroll = () => {desplazamiento_lateral()};

function desplazamiento_lateral () {
    imparBox.forEach(e => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            imparBox[2].classList.add('content__show');
        } else {
            imparBox[2].classList.remove('content__show');
        }
        
    });
}

//verificación para la subida al github por error que sale desde el GitBash


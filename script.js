var impar = document.querySelectorAll('.content:nth-child(2n+4');

window.onscroll = () => {desplazamiento_lateral()};

function desplazamiento_lateral () {
    impar.forEach(e => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            impar[2].className('content__show');
            console.log(impar[2]+"esto es el 3");
        }
        
    });
}


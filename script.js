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
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            imparBox[2].classList.add('content__show__rigth');
        } else {
            imparBox[2].classList.remove('content__show__rigth');
        } if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) {
            imparBox[3].classList.add('content__show__left');
        } else {
            imparBox[3].classList.remove('content__show__left');
        } if (document.body.scrollTop >= 450 || document.documentElement.scrollTop >= 450) {
            imparBox[4].classList.add('content__show__rigth');
        } else {
            imparBox[4].classList.remove('content__show__rigth');
        } if (document.body.scrollTop >= 650 || document.documentElement.scrollTop >= 650) {
            imparBox[5].classList.add('content__show__left');
        } else {
            imparBox[5].classList.remove('content__show__left');
        } if (document.body.scrollTop >= 850 || document.documentElement.scrollTop >= 850) {
            imparBox[6].classList.add('content__show__rigth');
        } else {
            imparBox[6].classList.remove('content__show__rigth');
        } if (document.body.scrollTop >= 1050 || document.documentElement.scrollTop >= 1050) {
            imparBox[7].classList.add('content__show__left');
        } else {
            imparBox[7].classList.remove('content__show__left');
        } if (document.body.scrollTop >= 1250 || document.documentElement.scrollTop >= 1250) {
            imparBox[8].classList.add('content__show__rigth');
        } else {
            imparBox[8].classList.remove('content__show__rigth');
        } if (document.body.scrollTop >= 1450 || document.documentElement.scrollTop >= 1450) {
            imparBox[9].classList.add('content__show__left');
        } else {
            imparBox[9].classList.remove('content__show__left');
        } if (document.body.scrollTop >= 1650 || document.documentElement.scrollTop >= 1650) {
            imparBox[10].classList.add('content__show__rigth');
        } else {
            imparBox[10].classList.remove('content__show__rigth');
        } if (document.body.scrollTop >= 1750 || document.documentElement.scrollTop >= 1750) {
            imparBox[11].classList.add('content__show__left');
        } else {
            imparBox[11].classList.remove('content__show__left');
        }
        
    });
}


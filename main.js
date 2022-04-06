const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');
const text = document.querySelector(".sec-text");
const elements = document.getElementsByClassName('alpha');
const elements2 = document.getElementsByClassName('blast');
const elements3 = document.getElementsByClassName('blast1');
const elements4 = document.getElementsByClassName('blast2');
var body = document.body;

$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})

document.addEventListener('mousemove', (e) =>{
    var elem = document.createElement('div');
    elem.setAttribute('class', 'trail');
    elem.setAttribute('style', `left: ${e.clientX - 10}px; top: ${e.clientY - 10}px;`);

    elem.onanimationend = () => {
        elem.remove();
    }

    body.insertAdjacentElement('beforeend', elem);
})



off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if (soundState === 'off') {
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = '#08fdd8';
        myAudio.play();
    }
    else if (soundState === 'on') {
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = '#f50057';
        myAudio.pause();
    }
}

// Play Music Functionality

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const sideNav = document.querySelector('.aside');

btnBars.addEventListener('click', () => myFanc('open'));
btnTimes.addEventListener('click', () => myFanc('close'));

const myFanc = (navCondition) => {
    if (navCondition === 'open') {
        sideNav.classList.add('show-nav');
        btnTimes.style.display = 'block';
        btnBars.style.display = 'none';
    }
    else if (navCondition === 'close') {
        sideNav.classList.remove('show-nav');
        btnTimes.style.display = 'none';
        btnBars.style.display = 'block';
    }
}

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "full-stack developer. ";
    }, 0);
    setTimeout(() => {
        text.textContent = "front-end developer. ";
    }, 4000);
    setTimeout(() => {
        text.textContent = "back-end developer. ";
    }, 8000);
    setTimeout(() => {
        text.textContent = "programmer. ";
    }, 12000);
    setTimeout(() => {
        text.textContent = "coder. ";
    }, 16000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 20000);

for (let i = 0; i<=elements2.length; i++)
{
    elements3[i].addEventListener('animationend',function(e){
        elements3[i].classList.remove('animated');
    });

    elements3[i].addEventListener('mouseover',function(e){
        elements3[i].classList.add('animated')
    });

    elements4[i].addEventListener('animationend',function(e){
        elements4[i].classList.remove('animated');
    });

    elements4[i].addEventListener('mouseover',function(e){
        elements4[i].classList.add('animated')
    });

    elements[i].addEventListener('animationend',function(e){
        elements[i].classList.remove('animated');
    });

    elements[i].addEventListener('mouseover',function(e){
        elements[i].classList.add('animated')
    });
    
    elements2[i].addEventListener('animationend',function(e){
        elements2[i].classList.remove('animated');
    });

    elements2[i].addEventListener('mouseover',function(e){
        elements2[i].classList.add('animated')
    });
    
}

// Canvas tag functionality






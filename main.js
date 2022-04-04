const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');
const text = document.querySelector(".sec-text");

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
        text.textContent = "programmer. ";
    }, 4000);
    setTimeout(() => {
        text.textContent = "coder. ";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);






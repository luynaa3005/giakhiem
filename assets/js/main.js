import vansta from "./vanta_bird.js"
import polygon from "./particles.js"

const avatar = document.getElementById("avatar");
const music = document.querySelector(".music");
const intro = document.querySelector('.intro')
const sound = new Howl({
    src: "./assets/music/we_dont_talk_anymore.mp3",
});

//open avatar in current tab
avatar.onclick = (e) => window.open(avatar.getAttribute("src"), "_self");


//cancel open devtool with right mouse
document.addEventListener("contextmenu", e => e.preventDefault());

//display animation with day
const d = new Date();
let day = d.getDate();

if (day % 2 == 1) {
    VANTA.BIRDS(vansta);
} else {
    particlesJS("particles-js", polygon);
}

//play music
music.addEventListener("click", () => {
    if (music.classList.contains("music--playing")) {
        music.classList.remove("music--playing");
        sound.pause();
    } else {
        music.classList.add("music--playing");
        sound.play();
    }
})

sound.on('end', () => music.classList.remove("music--playing"));

//intro
window.addEventListener("load", function () {
    setTimeout(function () {
        intro.style.display = "none"
    }, 3000)
})

const today = new Date();
const dayBd = today.getDate();
const monthBd = today.getMonth() + 1;

if (dayBd === 8 && monthBd === 5) {
    document.documentElement.style.setProperty('--content-intro', 'Khải Nghiêm sinh nhật vui vẻ!');
}
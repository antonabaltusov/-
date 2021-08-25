import { DateTime } from "./luxon.js";
import diffToHtml from "./common.js";
import "../node_modules/howler/dist/howler.js";

var sound = new Howl({
    src: ['/sound/sound.mp3']
  });

const form = document.getElementById('timer_start_form');
const tabloTime = document.getElementById('show_time');
const stop = document.getElementById('stop_timer');
const pausa = document.getElementById('pausa_timer');

form.onsubmit = (event) => {
    event.preventDefault();
    timerGo(event);
};
const timerGo = (event, dataTime) => {
    let time;
    let working = true;

    if(dataTime){
        time = dataTime;
    }else {
        const formData = new FormData(event.target);
        time = DateTime.fromISO(formData.get('time'));
    }

    diffToHtml(tabloTime, time.toObject())    

    const interval = setInterval(() => {
        time = time
            .minus({ second: 1 })
        diffToHtml(tabloTime, time.toObject())
        if (time.toFormat("HH mm ss") == "00 00 00") {
            clearInterval(interval);
            tabloTime.innerHTML = ("время вышло");
            sound.play();
        }
    }, 1000);

    stop.addEventListener("click", () => {
        clearInterval(interval);
        tabloTime.innerHTML = ("Задайте времz");
        sound.play();
    });

    pausa.addEventListener("click", () => {
        if (working) {
            working = false;
            clearInterval(interval);
            pausa.innerHTML = "contineu";
        } else {
            working = true;
            console.log(time);
            timerGo(undefined, time);
            pausa.innerHTML = "pausa";
        }
    })
}



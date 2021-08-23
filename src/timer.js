// b. Вынесите общие функции обоих разделов в отдельный модуль.
// c. Включите в таймер поле для установки времени и кнопки «Старт», «Стоп».
// d. Для обновления времени на странице используйте setInterval().
// e. Добавьте звуковое сопровождение, когда время заканчивается. Для работы со звуком воспользуйтесь сторонней библиотекой, например, Howler.js.
import { DateTime } from "./luxon.js";
// import soundSrc from "../sound/sound.mp3"

// Setup the new Howl.
// const sound = new Howl({
//     src: [soundSrc]
// });
//console.log(sound);
// Play the sound.
//sound.play();

const form = document.getElementById('timer_start_form');
const tabloTime = document.getElementById('show_time');
const stop = document.getElementById('stop_timer');
const pausa = document.getElementById('pausa_timer');

let working = false;

form.onsubmit = (event) => {
    event.preventDefault();
    working = true;

    console.log('ghbdtn');
    console.log('event ' + event.target);
    const formData = new FormData(event.target);
    console.log(formData);

    const startTime = DateTime.fromISO(formData.get('time'))
    console.log(startTime.toFormat("'ч'HH 'мин'mm 'сек'ss"));
    tabloTime.innerHTML = startTime.toFormat("'ч'HH 'мин'mm 'сек'ss");
    timerGo(startTime);
}
const timerGo = (time) => {
    let working = true;

    const interval = setInterval(() => {
        time = time
            .minus({ second: 1 })
        tabloTime.innerHTML = time.toFormat("'ч'HH 'мин'mm 'сек'ss");
        if (time.toFormat("HH mm ss") == "00 00 00") {
            clearInterval(interval);
            tabloTime.innerHTML = ("время вышло");
            sound.play();
        }
    }, 1000);

    stop.addEventListener("click", () => {
        clearInterval(interval);
        tabloTime.innerHTML = ("ч00 мин00 сек00");
        sound.play();
    });

    pausa.addEventListener("click", () => {
        if (working) {
            working = false;
            clearInterval(interval);
            pausa.innerHTML = "contineu";
        } else {
            working = true;
            timerGo(time);
            pausa.innerHTML = "pausa";
        }
    })
}


//export { form, stop }



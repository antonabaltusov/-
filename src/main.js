import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import changeProgramm from "./change_programm.js";
import "./timer.js";

const cangeButton = document.getElementById("change_programm");
cangeButton.addEventListener("click", () => changeProgramm(cangeButton, timer, dateCalcForm))


const timer = document.getElementById("timer");
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        console.log(diff);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}


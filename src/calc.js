import { diffDates } from "./datecalc.js";
import { formatError } from "./utils.js";
import diffToHtml from "./common.js";

const dateCalcResult = document.getElementById("datecalc__result");

export default function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        diffToHtml(dateCalcResult, diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}
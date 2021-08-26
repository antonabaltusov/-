import handleCalcDates from "./calc.js";
import changeProgramm from "./change_programm.js";
import "./timer.js";
import '../styles/main.scss'

const cangeButton = document.getElementById("change_programm");
const dateCalcForm = document.getElementById("datecalc");

cangeButton.addEventListener("click", () => changeProgramm(cangeButton, dateCalcForm));
dateCalcForm.addEventListener("submit", handleCalcDates);




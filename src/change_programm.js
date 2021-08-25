const timer = document.getElementById("timer");

export default function changeProgramm(cangeButton, dateCalcForm) {
    if (cangeButton.innerHTML === "таймер") {
        timer.style.display = "block";
        dateCalcForm.style.display = "none";
        cangeButton.innerHTML = "калькулятор";
    } else {
        timer.style.display = "none";
        dateCalcForm.style.display = "block";
        cangeButton.innerHTML = "таймер";
    }
};
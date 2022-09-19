import Countdown from "./countdown.js";
/* Contador regressivo de promoções*/
const tempoLoja = new Countdown ("30 September 2022 20:00:00 GMT-0300");
const firstTime = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    firstTime.forEach((tempo, index) => {
        tempo.innerHTML = tempoLoja.total[index];
    });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
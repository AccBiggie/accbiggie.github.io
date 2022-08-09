/* Contador regressivo de promoções*/
import Countdown from "./countdown.js";

const tempoLoja = new Countdown ("08 August 2022 20:00:00 GMT-0300");
const tempos = document.querySelectorAll(`[data-time]`);

tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoLoja.total[index];
});


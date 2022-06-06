let digitalElement = document.querySelector('.digital')
let secondsElement = document.querySelector('.p_s')
let minutesElement = document.querySelector('.p_m')
let hourElement = document.querySelector('.p_h')

// Selecionei os 4 elementos que vão ser utilizados para o projeto para definir as horas de forma digital e analógica.

function updateClock() {
 let now = new Date();
 let hour = now.getHours();
 let minute = now.getMinutes();
 let second = now.getSeconds();

 digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}` // Aqui a template string irá pegar dentro do HTML a class 'digital' e irá exibir as horas em formato digital através das funções "GET" que inseri anteriormente.

 let secondsDeg = ((360 / 60) * second) - 90;
 let minutesDeg = ((360 / 60) * minute) - 90;
 let hourDeg = ((360 / 12) * hour) - 90;

 secondsElement.style.transform = `rotate(${secondsDeg}deg)`
 minutesElement.style.transform = `rotate(${minutesDeg}deg)`
 hourElement.style.transform = `rotate(${hourDeg}deg)`
}

// Realizei o cálculo em relação aos segundos, minutos e horas, fiz a divisão pegando a hora atual da função -90 graus para estabelecer a hora de forma correta no relógio analógico.

function fixZero(time) {
    if(time < 10) {  // Caso a hora contenha segundos menores do que 10, deve-se retornar o 0+ o segundo daquele momento entre 00 e 09
        return '0'+time;
    } else {
        return time;
    }
}

setInterval(updateClock, 1000);
updateClock()
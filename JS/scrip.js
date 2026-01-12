const concierto = new Date("2026-06-11T21:00:00"); // cambia a túa data/hora

const days = document.getElementById("dias");
const hours = document.getElementById("horas");
const minutes = document.getElementById("minutos");
const seconds = document.getElementById("segundos");

function actualizarContaAtras() {
    const agora = new Date();
    const comezaConcerto = concierto - agora; // milisegundos que faltan


    if (comezaConcerto <= 0) {
        console.log("¡El concierto ha comenzado!");
        clearInterval(id);
        return;
    }

    // Dividir entre 1000, 60, 60, 24 converte milisegundos → segundos → minutos → horas → días
    const segundos = Math.floor(comezaConcerto / 1000) % 60;
    const minutos = Math.floor(comezaConcerto / 1000 / 60) % 60;
    const horas = Math.floor(comezaConcerto / 1000 / 60 / 60) % 24;
    const dias = Math.floor(comezaConcerto / 1000 / 60 / 60 / 24);
    console.log(
        `Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s para o concerto`
    );

    days.textContent = dias
    hours.textContent = horas
    minutes.textContent = minutos
    seconds.textContent = segundos

}

actualizarContaAtras(); // unha vez ao inicio
const id = setInterval(actualizarContaAtras, 1000); // logo cada segundo


function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
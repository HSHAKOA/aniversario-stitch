// Defina a data do aniversário (ano, mês-1, dia)
const birthday = new Date(2024, 11, 31); // Exemplo: 31 de dezembro de 2024

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerHTML = days + " ";
    document.getElementById('hours').innerHTML = hours + " ";
    document.getElementById('minutes').innerHTML = minutes + " ";
    document.getElementById('seconds').innerHTML = seconds + " ";
    
    if (diff < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "Feliz Aniversário!";
    }
}

// Atualiza a cada segundo
const countdown = setInterval(updateCountdown, 1000);

// Executa imediatamente para evitar atraso inicial
updateCountdown();

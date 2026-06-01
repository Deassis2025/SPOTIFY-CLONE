// Puxando os elementos do HTML
const audio = document.getElementById('audio-player');
const btnPlay = document.querySelector('.btn-play');

// Variável para saber se a música está tocando ou não
let isPlaying = false;

// Evento de clique no botão de play
btnPlay.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        btnPlay.textContent = '▶️'; // Volta pro ícone de play
    } else {
        audio.play();
        btnPlay.textContent = '⏸️'; // Muda pro ícone de pause
    }
    
    // Inverte o estado atual
    isPlaying = !isPlaying;
});

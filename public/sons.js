const music = document.getElementById('backgroundMusic');

function playBackgroundMusic() {
    music.muted = false;
    music.play();
}

playBackgroundMusic()
document.addEventListener('DOMContentLoaded', function() {
    var audioButton = document.getElementById('audioButton');
    var audio = document.getElementById('birthdayAudio');
    var celebration = document.getElementById('celebration');
    var isPlaying = false;
    var celebrationInterval;

    audioButton.addEventListener('click', function() {
        if (!isPlaying) {
            audio.play();
            audioButton.textContent = 'Jeda';
            isPlaying = true;
            startCelebration();
        } else {
            audio.pause();
            audioButton.textContent = 'sedikit tambahan';
            isPlaying = false;
            stopCelebration();
        }
    });

    function startCelebration() {
        celebration.classList.remove('hidden');
        celebrationInterval = setInterval(function() {
            createBalloon();
            createCandle();
        }, 1000); // Membuat balon dan lilin setiap 1 detik
    }

    function stopCelebration() {
        clearInterval(celebrationInterval);
        celebration.classList.add('hidden');
        celebration.innerHTML = '';
    }

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = getRandomColor();
        celebration.appendChild(balloon);
        
        // Menghapus balon setelah animasi selesai
        
    }

    function createCandle() {
        const candle = document.createElement('div');
        candle.classList.add('candle');
        candle.style.left = `${Math.random() * 100}%`;
        celebration.appendChild(candle);
        
        // Menghapus lilin setelah animasi selesai

    }

    function getRandomColor() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#feca57', '#ff9ff3'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Menghentikan perayaan ketika audio selesai
    audio.addEventListener('ended', function() {
        stopCelebration();
        audioButton.textContent = 'Putar Lagu';
        isPlaying = false;
    });
});

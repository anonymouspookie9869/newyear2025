function changeName() {
    let newName = prompt("Enter the name of the wisher:");
    if (newName) {
        document.getElementById("name").textContent = newName;
    }
}

// Snowflake generation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 10 + 5 + 'px';
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.getElementById('snowflakes').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);

function openBox() {
    document.querySelector('.gift-box').style.display = 'none';
    document.getElementById('greeting').style.display = 'block';
    document.getElementById('greeting').classList.add('fadeIn');

    // Show fireworks and play sound
    const fireworksContainer = document.getElementById('fireworks-container');
    fireworksContainer.style.display = 'block';

    const sound = document.getElementById('fireworks-sound');
    sound.play();
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + 'vw';
    document.getElementById('fireworks-container').appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 2500);
}

setInterval(createFirework, 1000);

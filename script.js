const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;

// Fade out and switch theme
function switchTheme() {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    toggleThemeBtn.textContent = isLightMode ? '🌙' : '☀️';
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

    // Fade in effect
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
}

// Fade out effect before switching theme
function fadeOutAndSwitch() {
    document.body.style.opacity = 0; // Fade out
    setTimeout(switchTheme, 300); // Delay theme switch
}

toggleThemeBtn.addEventListener('click', fadeOutAndSwitch);

// Apply saved theme
(function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        toggleThemeBtn.textContent = '🌙'; 
    }
})();

// Fade in effect on page load
window.onload = () => {
    document.body.style.opacity = 1; // Fade in after loading
};

function createStars() {
    const starContainer = document.querySelector('.twinkling-stars');
    starContainer.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 5 + 2; 
        const style = {
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 2 + 1}s` 
        };
        Object.assign(star.style, style);
        starContainer.appendChild(star);
    }
}

createStars();

// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault(); 
            const targetSection = document.querySelector(href); 
            targetSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        } else {
            window.location.href = href;
        }
    });
});

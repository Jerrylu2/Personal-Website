let timeout;
const timeline = document.querySelector('.timeline-nav');

function showTimeline() {
    if (!timeline) return;
    
    timeline.classList.add('visible');
    
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
        timeline.classList.remove('visible');
    }, 1500); // Hide after 1.5 seconds of inactivity
}

window.addEventListener('scroll', showTimeline);
window.addEventListener('mousemove', showTimeline);

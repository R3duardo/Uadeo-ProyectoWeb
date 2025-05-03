document.addEventListener('DOMContentLoaded', function() {
    let seconds = 5;
    const countdownElement = document.getElementById('countdown');
    
    if (countdownElement) {
        const countdown = setInterval(function() {
            seconds--;
            countdownElement.textContent = seconds;
            
            if (seconds <= 0) {
                clearInterval(countdown);
                window.location.href = 'autos.html';
            }
        }, 1000);
    }
}); 
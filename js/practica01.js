document.addEventListener('DOMContentLoaded', function() {
    const numberElement = document.querySelector('.number');
    const plusButton = document.querySelector('.plusButton');
    const minusButton = document.querySelector('.minusButton');
    const resetButton = document.querySelector('.resetButton');
    
    let count = 0;
    
    function updateCounter(newValue) {
        const oldValue = count;
        count = newValue

        numberElement.textContent = count;
        
        numberElement.classList.add('animate');
        
        if (count > 0) {
            numberElement.style.color = '#2ecc71';
        } else if (count < 0) {
            numberElement.style.color = '#e74c3c';
        } else {
            numberElement.style.color = '#fff';
        }
        
        if (newValue > oldValue) {
            numberElement.style.transform = 'scale(1.2)';
        } else if (newValue < oldValue) {
            numberElement.style.transform = 'scale(0.8)';
        }
        setTimeout(() => {
            numberElement.classList.remove('animate');
            numberElement.style.transform = 'scale(1)';
        }, 300);
    }

    function increase() {
        updateCounter(count + 1);
    }
    
    function decrease() {
        updateCounter(count - 1);
    }
    
    function reset() {
        numberElement.style.transform = 'rotate(360deg) scale(0.5)';
        
        setTimeout(() => {
            updateCounter(0);
            numberElement.style.transform = 'rotate(0) scale(1)';
        }, 300);
    }
    
    plusButton.addEventListener('click', increase);
    minusButton.addEventListener('click', decrease);
    resetButton.addEventListener('click', reset);
    
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowUp':
            case '+':
                increase();
                plusButton.classList.add('active');
                setTimeout(() => plusButton.classList.remove('active'), 200);
                break;
            case 'ArrowDown':
            case '-':
                decrease();
                minusButton.classList.add('active');
                setTimeout(() => minusButton.classList.remove('active'), 200);
                break;
            case 'r':
            case 'R':
            case '0':
                reset();
                resetButton.classList.add('active');
                setTimeout(() => resetButton.classList.remove('active'), 200);
                break;
        }
    });
});
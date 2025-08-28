let progressbar = document.querySelectorAll('.the-progress span');
let skills = document.getElementsByClassName('our-skills')[0];

let numbers = document.querySelectorAll('.number');
let stat = document.querySelector('.stat');

let started = false; 
let filled = false;  

function fillProgressBars() {
    progressbar.forEach(span => {
        span.style.width = span.dataset.width;
    });
}

function startCounting() {
    numbers.forEach(number => {
        let goal = +number.dataset.goal;
        let counter = 0;

        let interval = setInterval(() => {
            if (counter <= goal) {
                number.textContent = counter;
                counter++;
            } else {
                clearInterval(interval);
            }
        }, 50); 
    });
}

window.addEventListener("scroll", function () {
    if (window.scrollY >= skills.offsetTop - 200 && !filled) {
        fillProgressBars();
        filled = true;
    }

    if (window.scrollY >= stat.offsetTop - 200 && !started) {
        startCounting();
        started = true;
    }
});

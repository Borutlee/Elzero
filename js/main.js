let progressbar = document.querySelectorAll('.the-progress span');
let skills = document.getElementsByClassName('our-skills')[0];

let counter = 0;
let numbers = document.querySelectorAll('.number');
let stat = document.querySelector('.stat');

// animated progressbar (skills section)
window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - 200) {
        progressbar.forEach(span => {
            span.style.width = span.dataset.width;
        })
    }
}

// counting function
window.addEventListener("scroll", function () {
    window.onscroll = function () {
        if (window.scrollY >= stat.offsetTop - 200) {
            numbers.forEach(number => {
                setInterval(() => {
                    if (counter <= number.dataset.goal) {
                        number.textContent = counter;
                        counter++
                    }
                }, 500);
            })
        }
    }

});
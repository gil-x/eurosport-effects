const widget = document.querySelector('.widget');
const count = document.querySelector('.count .text');


let nb = 24;

function updateCounter() {
    if (nb > 10) {
        nb--;
        count.textContent = `55:${nb}`;
    } else {
        nb = 24;
    }
}

let counter = setInterval(updateCounter, 1000);


window.addEventListener('keydown', function() {
    console.log("hello!");
    widget.classList.toggle('hidden');
});

const widget = document.querySelector('.widget');


window.addEventListener('keydown', function() {
    console.log("hello!");
    widget.classList.toggle('hidden');
});

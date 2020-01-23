
// Modals
let modal = document.getElementById('modalOne');
let modalButtons = document.querySelectorAll('.modal_btn');
console.log(modalButtons);
let closeBtn = document.querySelector('.closeBtn');

modalButtons.forEach((btn) => {
    btn.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal () {
    modal.style.display = 'block';
}

function closeModal () {
    modal.style.display = 'none';
}

function clickOutside (e) {
    if(e.target == modal)
        modal.style.display = 'none'
}
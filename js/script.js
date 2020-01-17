// Toggling sidebar
function showSidebar () {
    let sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu__icon');
    menu.addEventListener('click', () => {
       if (sidebar.style.opacity == 0) {
           sidebar.style.opacity = 1;
           sidebar.style.left = 0;

       } else {
           sidebar.style.opacity = 0;
           sidebar.style.left = '-1000px';
       }
    });
}

showSidebar();

// Accordion

function toggleContent () {
    let titles = document.querySelectorAll('.acc-item__title');
    titles.forEach((title) => {
        title.addEventListener('click', function () {
            let target = this.getAttribute("data-target");
            let item = document.querySelector(target);
            item.classList.toggle("content__visible");
            title.classList.toggle('active');

        })
    })
}

toggleContent();

// Drag and Drop functionality

const block = document.querySelector('.drag-drop__block');
const columns = document.querySelectorAll('.drag-drop__item ');

// Fill listeners
block.addEventListener('dragstart', dragStart);
block.addEventListener('dragend', dragEnd);

// Loop through columns
for(const column of columns) {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
}
// Drag functions
function dragStart () {
    console.log('start');
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd () {
    console.log('end');
    this.className = 'drag-drop__block';
}

function dragOver (e) {
    e.preventDefault();
    console.log('over');
}
function dragEnter (e) {
    e.preventDefault();
    this.className += ' hovered';
    console.log('enter');
}
function dragLeave () {
    console.log('leave');
    this.className = 'drag-drop__item';
}
function dragDrop () {
    console.log('drop');
    this.className = 'drag-drop__item';
    this.append(block);
}

// Modals
let modal = document.getElementById('modalOne');
let modalBtn = document.getElementById('modalShow');
let closeBtn = document.querySelector('.closeBtn');

modalBtn.addEventListener('click', openModal);
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
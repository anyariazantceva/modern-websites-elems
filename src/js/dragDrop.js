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
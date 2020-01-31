// Accordion

const toggleContent = () => {
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

export default toggleContent
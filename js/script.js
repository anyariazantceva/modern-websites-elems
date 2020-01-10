//
function showSidebar () {
    let sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('.menu__icon');
    menu.addEventListener('click', () => {
       if (sidebar.style.opacity === '0') {
           sidebar.style.opacity = '1';
           sidebar.style.left = '0px';

       } else {
           sidebar.style.opacity = '0';
           sidebar.style.left = '-1000px';
       }
    });
}

showSidebar();
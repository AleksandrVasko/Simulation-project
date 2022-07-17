
const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    
    const handleNenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleNenu);
    closeBtn.addEventListener('click', handleNenu); 
    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleNenu));
     

};

export default menu;
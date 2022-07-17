const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const modalWindow = modal.querySelector('.popup-content');
    let count = 0;
    let interval;

    const animationModal = () => {
        count++;
        interval = requestAnimationFrame(animationModal);
        if (count < 47) {
            modalWindow.style.left = count * 13 + 'px';
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (document.body.clientWidth > 768) {
                modalWindow.style.left = '0px';
                modal.style.display = 'block';
                interval = requestAnimationFrame(animationModal);
            } else {
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        count = 0;
        cancelAnimationFrame(interval);
        modal.style.display = 'none';
    });
};

export default modal;
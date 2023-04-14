const menuToggleBtn = document.querySelector('.menu-toggle-icon');
const menuElement = document.querySelector('.menu');

const toggleMenuBtn = () => {
   menuToggleBtn.classList.toggle('activated');
   menuElement.classList.toggle('activated');
};

menuToggleBtn.addEventListener('click', toggleMenuBtn);
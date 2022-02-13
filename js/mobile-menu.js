(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-Menu-open]'),
    closeMenuBtn: document.querySelector('[data-Menu-close]'),
    Menu: document.querySelector('[data-Menu]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.Menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
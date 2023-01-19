(function () {
  // объявление переменных
  const burgerItem = document.querySelector('.header__burger-menu');
  const menu = document.querySelector('.header__menu');
  const menuCloseItem = document.querySelector('.header__menu-close');

  // раскрытие бургер меню
  burgerItem.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle('header__menu-active');
    document.getElementById('burger-menu').style.display = 'none';
    document.getElementById('close-menu').style.display = 'flex';
    document.querySelector('.page').classList.add('overflove-hidden');
    document.querySelector('.header__menu-background').classList.toggle('header__menu-background_active');
  });

  // закрытие бургер меню по клику на Х
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__menu-active');
    document.getElementById('burger-menu').style.display = 'flex';
    document.getElementById('close-menu').style.display = 'none';
    document.querySelector('.page').classList.remove('overflove-hidden');
    document.querySelector('.header__menu-background').classList.toggle('header__menu-background_active');
  });

  // сворачивание бургер меню при клике на область вне меню
  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const menu_is_active = menu.classList.contains("header__menu-active");

    if (!its_menu && menu_is_active) {
        menu.classList.toggle("header__menu-active");
        document.getElementById('burger-menu').style.display = 'flex';
        document.getElementById('close-menu').style.display = 'none';
        document.querySelector('.page').classList.remove('overflove-hidden');
        document.querySelector('.header__menu-background').classList.toggle('header__menu-background_active');
    }
  });

})();
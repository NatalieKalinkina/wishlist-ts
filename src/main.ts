const logo:HTMLImageElement | null= document.querySelector('.header__logo');

const handleLogoClick = () => {
  console.log('Клик по лого');
}

logo?.addEventListener('click', handleLogoClick);
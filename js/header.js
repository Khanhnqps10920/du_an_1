window.onscroll = () => {
  const header = document.querySelector('.header');
  if (header) {
    const info = header.querySelector('.header__info');

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      header.style.background = 'rgba(0,0,0,0.5)';
      header.style.padding = '0';
      info.style.display = 'none';
    } else {
      header.style.background = 'none';
      info.style.display = 'flex';
      header.style.padding = '2rem';
    }
  }
}
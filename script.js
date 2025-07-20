window.addEventListener('scroll', () => {
  const scrolled = 5*(window.scrollY);
  const blurValue = Math.min(scrolled / 50, 10);
  document.querySelector('.background').style.filter = `blur(${blurValue}px)`;
});

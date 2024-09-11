const button = document.querySelector('.btn--toggle');
const hamburger = document.querySelector('.hamburger-menu');
const appStore = document.querySelector('.icon-appstore');
const googlePlay = document.querySelector('.icon-googleplay');
const downArrow = document.querySelector('.down-arrow');
const faqArrow = document.querySelectorAll('.faq-arrow');
const mail = document.querySelector('.mail');

button.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    hamburger.setAttribute('src', '/images/hamburger-menu-light.svg');
    appStore.setAttribute('src', '/images/appstore-light.svg');
    googlePlay.setAttribute('src', '/images/googleplay-light.svg');
    downArrow.setAttribute('src', '/images/down-arrow-light.svg');
    faqArrow.forEach((arrow) => {
      arrow.setAttribute('src', '/images/faq-down-arrow-light.svg');
    });
    mail.setAttribute('src', '/images/mail-light.svg');
  } else {
    hamburger.setAttribute('src', '/images/hamburger-menu-dark.svg');
    appStore.setAttribute('src', '/images/appstore-dark.svg');
    googlePlay.setAttribute('src', '/images/googleplay-dark.svg');
    downArrow.setAttribute('src', '/images/down-arrow-dark.svg');
    faqArrow.forEach((arrow) => {
      arrow.setAttribute('src', '/images/faq-down-arrow-dark.svg');
    });
    mail.setAttribute('src', '/images/mail-dark.svg');
  }

  document.body.classList.toggle('dark-mode');
});
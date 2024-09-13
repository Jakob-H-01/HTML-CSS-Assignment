const button = document.querySelector('.btn--toggle');
const hamburger = document.querySelector('.hamburger-menu');
const appStore = document.querySelector('.icon-appstore');
const googlePlay = document.querySelector('.icon-googleplay');
const downArrow = document.querySelector('.down-arrow');
const faqArrow = document.querySelectorAll('.faq-arrow');
const faqBtn = document.querySelectorAll('.btn--faq');
const mail = document.querySelector('.mail');

button.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    hamburger.setAttribute('src', '/images/hamburger-menu-light.svg');
    appStore.setAttribute('src', '/images/appstore-light.svg');
    googlePlay.setAttribute('src', '/images/googleplay-light.svg');
    downArrow.setAttribute('src', '/images/down-arrow-light.svg');
    faqArrow.forEach((arrow) => {
      if(!arrow.classList.contains('active-arrow')) {
        arrow.setAttribute('src', '/images/faq-down-arrow-light.svg');
      }
    });
    mail.setAttribute('src', '/images/mail-light.svg');
  } else {
    hamburger.setAttribute('src', '/images/hamburger-menu-dark.svg');
    appStore.setAttribute('src', '/images/appstore-dark.svg');
    googlePlay.setAttribute('src', '/images/googleplay-dark.svg');
    downArrow.setAttribute('src', '/images/down-arrow-dark.svg');
    faqArrow.forEach((arrow) => {
      if(!arrow.classList.contains('active-arrow')) {
        arrow.setAttribute('src', '/images/faq-down-arrow-dark.svg');
      }
    });
    mail.setAttribute('src', '/images/mail-dark.svg');
  }
  
  document.body.classList.toggle('dark-mode');
});

function changeActiveFaqArrow(mediaQuery) {
  if (mediaQuery.matches) {
    if (document.body.classList.contains('dark-mode')) {
      faqArrow[0].setAttribute('src', '/images/faq-down-arrow-dark.svg');
    } else {
      faqArrow[0].setAttribute('src', '/images/faq-down-arrow-light.svg');
    }

    faqArrow[2].setAttribute('src', '/images/faq-up-arrow.svg');
    
    faqArrow[0].classList.remove('active-arrow');
    faqArrow[2].classList.add('active-arrow');
    faqBtn[0].classList.remove('btn--primary');
    faqBtn[2].classList.add('btn--primary');
  } else {
    if (document.body.classList.contains('dark-mode')) {
      faqArrow[2].setAttribute('src', '/images/faq-down-arrow-dark.svg');
    } else {
      faqArrow[2].setAttribute('src', '/images/faq-down-arrow-light.svg');
    }

    faqArrow[0].setAttribute('src', '/images/faq-up-arrow.svg');

    faqArrow[2].classList.remove('active-arrow');
    faqArrow[0].classList.add('active-arrow');
    faqBtn[2].classList.remove('btn--primary');
    faqBtn[0].classList.add('btn--primary');
  }
}

let mediaQuery = window.matchMedia("(min-width: 768px)")
changeActiveFaqArrow(mediaQuery);

mediaQuery.addEventListener("change", function() {
  changeActiveFaqArrow(mediaQuery);
});
const button = document.querySelector('.btn--toggle');
const hamburger = document.querySelector('.hamburger-menu');
const appStore = document.querySelector('.icon-appstore');
const googlePlay = document.querySelector('.icon-googleplay');
const downArrow = document.querySelector('.down-arrow');
const faqArrow = document.querySelectorAll('.faq-arrow');
const faqBtn = document.querySelectorAll('.btn--faq');
const mail = document.querySelector('.mail');
const phoneMiddle = document.querySelector('.phone-middle');
const phoneScreensSide = document.querySelectorAll('.phone-side');
const instructionsHeading = document.querySelector('#instructions-heading');
const instructionsParagraph = document.querySelector('#instructions-paragraph');

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

function changePhoneImages(mediaQueryDesktop) {
  if (mediaQueryDesktop.matches) {
    phoneMiddle.setAttribute('src', '/images/phone-middle-desktop.svg');
    phoneScreensSide[0].setAttribute('src', '/images/phone-1-screen-desktop.svg');
    phoneScreensSide[1].setAttribute('src', '/images/phone-3-screen-desktop.svg');
    instructionsHeading.innerHTML = "Latest transaction history";
    instructionsParagraph.innerHTML = "Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique <span>quisque hac in consectetur condimentum.</span>";
  } else {
    phoneMiddle.setAttribute('src', '/images/phone-middle.svg');
    phoneScreensSide[0].setAttribute('src', '/images/phone-1-screen.svg');
    phoneScreensSide[1].setAttribute('src', '/images/phone-3-screen.svg');
    instructionsHeading.innerHTML = "<span>Step 3. </span>Transfers to people from your contact list";
    instructionsParagraph.innerHTML = "Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.";
  }
}

let mediaQuery = window.matchMedia("(min-width: 768px)")
changeActiveFaqArrow(mediaQuery);

let mediaQueryDesktop = window.matchMedia("(min-width: 1400px)")
changePhoneImages(mediaQueryDesktop);

mediaQuery.addEventListener("change", function() {
  changeActiveFaqArrow(mediaQuery);
});

mediaQueryDesktop.addEventListener("change", function() {
  changePhoneImages(mediaQueryDesktop);
});
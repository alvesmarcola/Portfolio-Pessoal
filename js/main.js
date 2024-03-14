const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
})
}

/*==================== REMOVER MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*Ativar card de serviço*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

      let modal = function (modalClick){
        modalViews[modalClick].classList.add('active-modal')
      }

      modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', () =>{
            modal(i)
        })
      })

      modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click' , () =>{
            modalViews.forEach((modalView) =>{
                modalView.classList.remove('active-modal')
            })
        })
      })

     // cards

     $(document).ready(function() {

      $('.card').delay(1800).queue(function(next) {
        $(this).removeClass('hover');
        $('a.hover').removeClass('hover');
        next();
      });
    });

      function scrollHeader(){
        const nav = document.getElementById('header')
        
        if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    /*Button up to home*/

    function scrollUp(){
      const scrollUp = document.getElementById('scroll-up');

      if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


  /*=============== SWIPER JS CARDS===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });


/* Animations */

  $(document).ready(function() {

    setTimeout(function(){
        $('.site').addClass('animado');
    }, 500); // Ajuste o tempo conforme necessário
});


document.addEventListener("DOMContentLoaded", function() {
  const skills = document.querySelectorAll('.skills__info');
  let delay = 0;
  skills.forEach((skill, index) => {
      setTimeout(() => {
          skill.classList.add('animated');
      }, delay);
      delay += 200;
  });
});

AOS.init();
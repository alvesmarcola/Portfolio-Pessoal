const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');

<<<<<<< HEAD

    })
=======
        // Adicione qualquer código adicional necessário para manipular o menu

        // Remova ou ajuste o código de troca de idioma aqui
        // Exemplo: changeLanguage('en');
    });
>>>>>>> 07dc93498d34337a88a6aea34086ce55b285b7f8
}

if (navClose) {
    navClose.addEventListener('click', () => {
<<<<<<< HEAD
        navMenu.classList.remove('show-menu')
    })
=======
        navMenu.classList.remove('show-menu');
    });
>>>>>>> 07dc93498d34337a88a6aea34086ce55b285b7f8
}

// remover menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*Skills abertura|fechamento*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i =0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


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

      /* */

      function scrollHeader(){
        const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    /*Button up to home*/

    function scrollUp(){
      const scrollUp = document.getElementById('scroll-up');
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
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

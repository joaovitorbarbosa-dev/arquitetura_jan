document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  if (!header) {
    console.warn('Header não encontrado! Verifique se existe id="header".');
    return;
  }

  let lastScrollTop = 0;
  let isHidden = false;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop && scrollTop > 100 && !isHidden) {
      // Rolando para baixo → esconde
      header.classList.add('header-hidden');
      isHidden = true;
    } else if (scrollTop < lastScrollTop - 10 && isHidden) {
      // Rolando para cima → mostra
      header.classList.remove('header-hidden');
      isHidden = false;
    }

    lastScrollTop = scrollTop;
  });
});


// Botão WhatsApp com animação de hover
const whatsappButton = document.querySelector('.whatsapp-lateral');
if (whatsappButton) {
  whatsappButton.addEventListener('mouseenter', () => {
    whatsappButton.style.transform = 'rotate(180deg) scale(1.08)';
  });

  whatsappButton.addEventListener('mouseleave', () => {
    whatsappButton.style.transform = 'rotate(180deg)';
  });
}
// Swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
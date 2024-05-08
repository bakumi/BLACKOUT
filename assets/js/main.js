  /**
   * Загрузка страницы
   */
document.addEventListener("DOMContentLoaded", function() {
  gsap.to(".loader-container", {opacity: 0, duration: 0.8, delay: 1, onComplete: function() {
    document.body.removeChild(document.querySelector(".loader-container"));
  }});
});

window.addEventListener("load", function() {
  gsap.to(".loader", {opacity: 0, duration: 0.5, delay: 0.8});
  gsap.to(".loader2", {opacity: 0, duration: 0.5, delay: 0.8});
});


(function() {
  "use strict";

  /**
   * Помощник выбора селекторов
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Обработчик событий
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Обработчик прокрутки страницы
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Активные секционные кнопки в нав. меню
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Прокрутка к элементу с учётом смещения заголовка
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 24
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Переключать класс .header-scrolled для #header при прокрутке страницы
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Кнопка вернуться наверх
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Мобильное меню
   */
    on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })


  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Прокрутка со смещением при клике на ссылки с классом .scrollto.
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Прокрутить со смещением при загрузке страницы с якорными ссылками в URL.
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Оружейные фильтры
   */
  window.addEventListener('load', () => {
    let weaponContainer = select('.weapon-container');
    if (weaponContainer) {
      let weaponIsotope = new Isotope(weaponContainer, {
        itemSelector: '.weapon-item',
        layoutMode: 'fitRows'
      });

      let weaponFilters = select('#weapon-flters li', true);

      on('click', '#weapon-flters li', function(e) {
        e.preventDefault();
        weaponFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        weaponIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        weaponIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });


  const weaponLightbox = GLightbox({
    selector: '.weapon-lightbox'
  });

  /**
   * Слайдер оружий
   */
  new Swiper('.weapon-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


  /**
   * Анимация при скролле
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });


  new PureCounter();

})()


 /**
   * LocalStorage
   */
document.addEventListener('DOMContentLoaded', () => {
  const weaponCards = document.querySelectorAll('.weapon-item');

  weaponCards.forEach(card => {
    card.addEventListener('click', () => {
      const productName = card.querySelector('p').innerText;
      localStorage.setItem('selectedProduct', productName);
    });
  });
});


 /**
   * Форма отправки писем с помощью EmailJS
   */
 (function(){
  emailjs.init("LV4XoaHmNlu8iJ2YV");
})();


function showNotification(message) {
  var notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = 'block';
  setTimeout(function() {
      notification.style.opacity = '1';
  }, 10);
  setTimeout(function() {
      notification.style.opacity = '0';
  }, 1500);
  setTimeout(function() {
      notification.style.display = 'none';
  }, 2000);
}

function submitForm(event) {
  event.preventDefault();

  var formData = {
    name: document.getElementById('sendername').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    senderemail: document.getElementById('senderemail').value
  };

  emailjs.send('service_f7uobud', 'template_tu42zyr', formData)
    .then(function(response) {
      console.log('Сообщение успешно отправлено!', response);
      showNotification('Сообщение успешно отправлено!');
    })
    .catch(function(error) {
      console.error('Ошибка при отправке сообщения:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const inputFields = document.querySelectorAll('.input__field');

  inputFields.forEach(function(inputField) {
    inputField.addEventListener('focus', function() {
      this.previousElementSibling.classList.add('focused');
    });

    inputField.addEventListener('blur', function() {
      if (!this.value.trim()) {
        this.previousElementSibling.classList.remove('focused');
      }
    });
  });

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', submitForm);
});

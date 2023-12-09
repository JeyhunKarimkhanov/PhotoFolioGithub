document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = () => {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }


  /**
 * Scroll Down button
 */
  const scrollDown = document.querySelector('.scroll-down');
  if (scrollDown) {
    const togglescrollDown = function () {
      window.scrollY < 100 ? scrollDown.classList.add('active') : scrollDown.classList.remove('active');
    }

    const scrollToBottom = function () {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    };

    window.addEventListener('load', togglescrollDown);
    document.addEventListener('scroll', togglescrollDown);
    scrollDown.addEventListener('click', scrollToBottom)
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


//  Hero type effect
document.addEventListener('DOMContentLoaded', () => {
  const typed = document.querySelector('.typed');
  if (typed) {
    let typedStrings = typed.getAttribute('data-typed-items').split(",");
    new Typed('.typed', {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000
    });
  }


let items = []
  const galleryItems = document.querySelectorAll(".gallery-item")
  galleryItems.forEach((item)=>{
    items.push(item)
  })
const pictureCount = document.querySelector(".page-header h2 span")
  pictureCount.innerHTML =`(${items.length} image)` 
});

// Gallery Single Section
const info = [
  infoBaku = {
    name_: "Baku",
    about: "Baku is the capital and largest city of Azerbaijan. Located on the southern coast of the Caspian Sea, this historic city holds a strategic position between the Middle East and Western Asia. Baku is known for its rich history, cultural heritage, modern architecture, and vibrant atmosphere. Throughout history, Baku has been home to different civilizations. The historic center of the city is listed as a UNESCO World Heritage Site. Notable landmarks in Baku include the Inner City (with the Palace of the Shirvanshahs and the Maiden Tower), the Heydar Aliyev Cultural Center, Yanar Dag (the Burning Mountain), Ateshgah (the Fire Temple), the Heydar Aliyev Center, Baku Boulevard, and Nizami Street.",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.5237698092!2d49.6901501486368!3d40.39447551077051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLEsIEF6yZlyYmF5Y2Fu!5e0!3m2!1saz!2spl!4v1685297626630!5m2!1saz!2spl"
  },
  infoWarszaw = {
    name_: "Warsaw",
    about: "Warsaw is the capital and largest city of Poland. Located in the eastern part of the country, on the Vistula River, Warsaw is a vibrant and historically significant city. It has a rich cultural heritage and a resilient spirit shaped by its tumultuous history.     Warsaw has undergone significant reconstruction and revitalization after being heavily damaged during World War II. Today, it stands as a testament to the city's resilience and determination to preserve its cultural heritage. The Old Town of Warsaw, with its charming cobblestone streets, colorful buildings, and the Royal Castle, is a UNESCO World Heritage site and a popular tourist destination",
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156389.20740495977!2d20.896387645696905!3d52.2328231940973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2zVmFyxZ9hdmE!5e0!3m2!1saz!2spl!4v1685297951528!5m2!1saz!2spl"
  }
]


const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    localStorage.removeItem("SRC")
    localStorage.removeItem("Header")
    localStorage.removeItem("About")
    localStorage.removeItem("Location")
    const galleryItem = link.closest(".gallery-item");
    const imgElement = galleryItem.querySelector("img");
    const imgSrc = imgElement.getAttribute("src");
    const placeImage = link.closest(".gallery-item").querySelector('.place-image').textContent;

    let storedDataSRC = [];
    storedDataSRC = JSON.parse(localStorage.getItem("SRC")) || [];
    let newstoredDataSRC = imgSrc;
    storedDataSRC.push(newstoredDataSRC)
    localStorage.setItem("SRC", JSON.stringify(storedDataSRC));

    let storedDataHeader = []
    storedDataHeader = JSON.parse(localStorage.getItem("Header")) || []
    let newstoredDataHeader = placeImage
    storedDataHeader.push(newstoredDataHeader)
    localStorage.setItem("Header", JSON.stringify(storedDataHeader))

    info.forEach((infoItem) => {
      if (infoItem.name_.includes(placeImage)) {

        let storedDataAbout = [];
        storedDataAbout = JSON.parse(localStorage.getItem("About")) || [];
        let newstoredDataAbout = infoItem.about;
        storedDataAbout.push(newstoredDataAbout)
        localStorage.setItem("About", JSON.stringify(storedDataAbout));

        let storedDataLocation = [];
        storedDataLocation = JSON.parse(localStorage.getItem("Location")) || [];
        let newstoredDataLocation = infoItem.location;
        storedDataLocation.push(newstoredDataLocation)
        localStorage.setItem("Location", JSON.stringify(storedDataLocation));

      }
    })

  });
});

const resultDiv = document.querySelector("#search-result")
let storedDataSRC = JSON.parse(localStorage.getItem("SRC")) || []
storedDataSRC.forEach((item) => {
  const div = document.createElement("div")
  div.classList.add("result-img")
  div.innerHTML = `
     <img src="${item}" alt="">
      `
  resultDiv.appendChild(div)
})


const headerGallerySingle = document.querySelector(".page-header h2")
const headerTitle = document.querySelector(".portfolio-description h2")
let storedDataHeader = JSON.parse(localStorage.getItem("Header")) || []
storedDataHeader.forEach((item) => {
  headerGallerySingle.textContent = item.toUpperCase()
  headerTitle.textContent = "About" + " " + item.toUpperCase()
})

let storedDataAbout = JSON.parse(localStorage.getItem("About")) || []
storedDataAbout.forEach((item) => {
  const aboutContent = document.querySelector(".portfolio-description p")
  aboutContent.textContent = item
})

let storedDataLocation = JSON.parse(localStorage.getItem("Location")) || []
storedDataLocation.forEach((item) => {
  const iframe = document.querySelector("#localIframe")
  iframe.src = item
})
// end Gallery Single Section







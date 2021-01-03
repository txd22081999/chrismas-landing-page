document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('#toggle');
  const scrollTop = document.querySelector('#scroll-top');
  const navItems = document.querySelectorAll('.nav-item');
  const body = document.querySelector('body');
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');

  document.addEventListener('scroll', () => {
    let yOffset = this.scrollY;
    const header = document.querySelector('header');
    if (yOffset >= 70) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }

    if (yOffset >= 430) {
      scrollTop.classList.add('show');
    } else {
      scrollTop.classList.remove('show');
    }
  });

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    // nav.classList.toggle('transition');
  });

  toggle.addEventListener('click', () => {
    console.log(toggle);
    toggle.classList.toggle('bx-toggle-right');
    document.querySelector('body').classList.toggle('dark');
    // console.log(a);
  });

  let navItemActive = document.querySelector('.active');
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navItemActive.classList.remove('active');
      item.classList.add('active');
      navItemActive = item;

      const navBar = document.querySelector('nav.show');
      if (navBar) {
        navBar.classList.toggle('show');
      }
    });
  });

  let cards = document.querySelectorAll('.accessory .card');
  cards.forEach((card) => {
    let heart = card.getElementsByClassName('heart')[0];
    let bigHeart = card.getElementsByClassName('big-heart')[0];

    heart.addEventListener('click', () => {
      bigHeart.classList.add('scale');

      setTimeout(() => {
        console.log('Here');
        bigHeart.classList.remove('scale');
      }, 700);
    });
  });

  const sr = new ScrollReveal({
    distance: '20px',
    duration: 1800,
    reset: true
  });

  console.log(sr);

  // sr.reveal(`#scrollTop`, {
  //   origin: 'bottom',
  //   interval: 200
  // });

  sr.reveal(`.banner-content`, {
    origin: 'top',
    interval: 200
  });

  sr.reveal(`.banner-img`, {
    origin: 'top',
    interval: 200
  });

  sr.reveal(`.share-content, .send-content`, {
    origin: 'right',
    interval: 200
  });

  sr.reveal(`.share-img, .send-img`, {
    origin: 'left',
    interval: 200
  });

  sr.reveal(`.decoration-title`, {
    origin: 'top',
    interval: 200
  });

  sr.reveal(`.decoration-content`, {
    origin: 'bottom',
    interval: 200
  });

  sr.reveal(`.accessory-title`, {
    origin: 'top',
    interval: 200
  });

  sr.reveal(`.accessory-cards`, {
    // origin: 'top',
    interval: 200,
    scale: 0
    // scale: 1
  });

  sr.reveal(`.footer-item`, {
    // origin: 'bottom',
    interval: 200,
    rotate: {
      x: 180,
      y: 0,
      z: 0
    }
  });
});

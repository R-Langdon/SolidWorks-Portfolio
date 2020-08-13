let recentSlideNo = 1;
let personalSlideNo = 1;

const navSlide = () => {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', function() {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });

    //Animate Burger
    burger.classList.toggle('toggle');
  })
}

//Hide or display slides on recent work carousel
const recentCarousel = (n) => {
  let recentSlides = document.getElementsByClassName('recent-container');

  if (n > recentSlides.length) {
    recentSlideNo = 1;
  }
  if (n < 1) {
    recentSlideNo = recentSlides.length;
  }
  for (let i = 0; i < recentSlides.length; i++) {
    recentSlides[i].style.display = "none";
  }
  recentSlides[recentSlideNo - 1].style.display = "block";
}

//Add functionality to prev and next buttons on recent work carousel
const recentNewSlide = () => {
  const prev = document.querySelector('.recentPrev');
  const next = document.querySelector('.recentNext');

  prev.addEventListener('click', function() {
    recentCarousel(recentSlideNo += -1);
  });

  next.addEventListener('click', function() {
    recentCarousel(recentSlideNo += 1);
  });
}

//Hide or display slides on personal work carousel
const personalCarousel = (n) => {
  let personalSlides = document.getElementsByClassName('personal-container');

  if (n > personalSlides.length) {
    personalSlideNo = 1;
  }
  if (n < 1) {
    personalSlideNo = personalSlides.length;
  }
  for (let i = 0; i < personalSlides.length; i++) {
    personalSlides[i].style.display = "none";
  }
  personalSlides[personalSlideNo - 1].style.display = "block";
}

//Add functionality to prev and next buttons on personal work carousel
const personalNewSlide = () => {
  const prev = document.querySelector('.personalPrev');
  const next = document.querySelector('.personalNext');

  prev.addEventListener('click', function() {
    personalCarousel(personalSlideNo += -1);
  });

  next.addEventListener('click', function() {
    personalCarousel(personalSlideNo += 1);
  });
}

const app = () => {
  navSlide();
  recentCarousel(recentSlideNo);
  recentNewSlide();
  personalCarousel(personalSlideNo);
  personalNewSlide();
}

app();
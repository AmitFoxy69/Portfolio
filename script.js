let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}

const typed = new Typed('.muliple-text', {
      strings: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Web Designer'],
      typeSpeed: 80,
      backSpeed: 160,
      backDelay: 1200,
      loop: true
    });

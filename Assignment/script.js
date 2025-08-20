document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent.");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".animate-fade").forEach(el => observer.observe(el));

var myCarousel = document.querySelector('#programsCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000,
      ride: 'carousel'
})

window.addEventListener("scroll", function() {
      let navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("shrink");
      } else {
        navbar.classList.remove("shrink");
      }
    });

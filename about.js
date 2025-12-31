const observer0 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("show");
      } else {
          entry.target.classList.remove("show");
      }
  });
});
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("show1");
      } else {
          entry.target.classList.remove("show1");
      }
  });
});


const C0 = document.querySelectorAll(".S3card0");
C0.forEach((el) => observer0.observe(el));
const C1 = document.querySelectorAll(".S3card1");
C1.forEach((el) => observer1.observe(el));


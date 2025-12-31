function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  let main_navbar = document.getElementById('main-navbar')
  if (navbar.classList.contains('open')){
    navbar.classList.remove('open')
    main_navbar.style.transform = 'translateX(200%)'
  }
  else{
    navbar.classList.add('open');
    main_navbar.style.transform = 'translateX(0)'
  }
}
// document.querySelectorAll('ul.menu-ul a[data-target]').forEach(button => {
//   button.addEventListener('click', () => {
//       const targetId = button.getAttribute('data-target');
//       const targetElement = document.querySelector(targetId);
//       if (targetElement) {
//           targetElement.scrollIntoView({
//               behavior: 'smooth',
//               block:'start'
//           });
//       }
//   });
// });

// const S_slider = document.querySelectorAll('.staff-container');
// let S_isDown = false;
// let S_startx;
// let S_scrollLeft;

// S_slider.forEach((par)=>{
//     par.addEventListener('mousedown', (event) => {

//     S_isDown = true;
//     par.classList.add('on-scroll');

//     S_startx = event.pageX - par.offsetLeft;
//     S_scrollLeft = par.S_scrollLeft;

//     document.body.style.userSelect = 'none';
// });
// })

// S_slider.forEach((par)=>{
//     par.addEventListener('mouseleave', () => {
//     S_isDown = false;
//     par.classList.remove('on-scroll');
//     document.body.style.userSelect = ''
// });
// })

// S_slider.forEach((par)=>{
//     par.addEventListener('mouseup', () => {
//     S_isDown = false;
//     par.classList.remove('on-scroll');
//     document.body.style.userSelect = '';
// });
// })

// S_slider.forEach((par)=>{
//     par.addEventListener('mousemove', (event) => {
//     if (!S_isDown) return;
//     event.preventDefault();
//     const x = event.pageX - par.offsetLeft;
//     const walk = (x - S_startx) * 1.5;
//     par.S_scrollLeft = S_scrollLeft - walk;
// });
// })
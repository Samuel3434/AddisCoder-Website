const A_slider = document.querySelectorAll('.scroller');
let isDown = false;
let startX;
let scrollLeft;
console.log(A_slider)
A_slider.forEach((par)=>{
    par.addEventListener('mousedown', (event) => {
    event.preventDefault()
    isDown = true;
    par.classList.add('on-scroll');
    document.body.style.userSelect = '';
    startX = event.pageX - par.offsetLeft;
    scrollLeft = par.scrollLeft;
});
})

A_slider.forEach((par)=>{
    par.addEventListener('mouseleave', () => {
    isDown = false;
    par.classList.remove('on-scroll');
    document.body.style.userSelect = ''
});
})

A_slider.forEach((par)=>{
    par.addEventListener('mouseup', () => {
    isDown = false;
    par.classList.remove('on-scroll');
    document.body.style.userSelect = '';
});
})

A_slider.forEach((par)=>{
    par.addEventListener('mousemove', (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - par.offsetLeft;
    const walk = (x - startX) * 1.5;
    par.scrollLeft = scrollLeft - walk;
});
})

let val = document.querySelectorAll('.mi-in-ent img')
val.forEach((k) => {
    k.addEventListener('mouseover',()=>{
        val.forEach((v) =>{
            if (v !== k){
                v.classList.add('m-in')
            }
        })
    })
    k.addEventListener('mouseleave',()=>{
        val.forEach((v)=>{
            v.classList.remove('m-in')
        })
    })
});
const cursor = document.querySelector(".cursor")
// document.body.style.zoom = "80%";

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 25)+"px; left: "+(e.pageX - 25)+"px;")})

document.addEventListener('wheel',e=>{
  cursor.setAttribute("style", "top: "+(e.pageY - 25)+"px; left: "+(e.pageX - 25)+"px;")
}) 



let parent = document.querySelectorAll('.hover-sec')

let parent2 = document.querySelectorAll('.drag-sec')
let isClicked = true
console.log(parent)


parent.forEach((par)=>{
  par.addEventListener( 'mouseover',(event) => {
  if (event.target !== par ){
    cursor.classList.add('hovering')
    console.log(event.target)
  }
  else if(event.target === par){
      cursor.classList.remove('hovering')
  }
})
});
parent.forEach((par)=>{
  par.addEventListener('mouseleave',()=>{
  cursor.classList.remove('hovering')
})
});


parent2.forEach((par)=>{
  par.addEventListener('mouseover',()=>{
    if (isClicked){
        
      cursor.textContent = 'Drag'
      document.body.style.cursor = 'none'
      cursor.classList.add('drag')
      cursor.classList.add('drag-ani')

      cursor.classList.remove('drag-acitve')
      isClicked = false
    }
  })

})
parent2.forEach((par)=>{
  par.addEventListener('mousedown',()=>{
    cursor.textContent = ''
    let left = document.createElement('img')
    let right = document.createElement('img')

    left.setAttribute('src','assets/svg/caret-left-fill.svg')
    left.setAttribute('style','position:absolute;top:30% ; left:-30px;height:3rem')
    right.setAttribute('src','assets/svg/caret-right-fill.svg')
    right.setAttribute('style','position:absolute;top:30% ; right:-30px;height:3rem')
    // let l = '<img src="assets/svg/caret-left-fill.svg" style="position:absolute;top:50% ; left:-10px">'
    // let r = '<img src="assets/svg/caret-right-fill.svg" style="position:absolute;top:50% ; right:-10px">'
    // cursor.appendChild(l)
    // creatchi
    cursor.appendChild(left)
    cursor.appendChild(right)

    cursor.classList.remove('drag-ani')
    cursor.classList.add('drag-acitve')
})
})
parent2.forEach((par)=>{
  par.addEventListener('mouseup',()=>{

    cursor.textContent = 'Drag'
    document.body.style.cursor = 'none'
    cursor.classList.add('drag')
    cursor.classList.add('drag-ani')

    cursor.classList.remove('drag-acitve')
  })

})
k = 0
parent2.forEach((par)=>{
  par.addEventListener('mouseleave',()=>{
  isClicked = true
  clearTimeout(k)
  k = setTimeout(() => {
  document.body.style.cursor = 'auto'
  cursor.textContent = ''
  cursor.classList.remove('drag')
  cursor.classList.remove('drag-ani')
  }, 100);
})
})
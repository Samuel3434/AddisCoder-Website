let container = document.getElementById('inner-container')
let card = document.querySelector('.apply-student')
let toStudent = document.querySelector('.change-btn-student')
let toTeacher = document.querySelector('.change-btn-teacher')
let toStudentTeachBtn = document.querySelector('.change-btn')
let applyBtn = document.querySelector('.apply-btn')
var cur = 1

function animation(){
  card.classList.toggle('apply-student-click')
  toStudent.classList.toggle('aniIn')
  toStudent.classList.toggle('aniOut')
  toTeacher.classList.toggle('aniIn')
  toTeacher.classList.toggle('aniOut')
  if (cur){
  container.style.setProperty('--changeAndApply-btn-background','linear-gradient(135deg, #0033A0, #0066FF, #3399FF, #0033A0)')
  container.style.setProperty('--container-background','linear-gradient(90deg, #2196F3, #E3F2FD)')
  cur = 0
  }
  else{
  container.style.setProperty('--changeAndApply-btn-background','linear-gradient(135deg, #4B0082, #8A2BE2, #BA55D3, #4B0082)')
  container.style.setProperty('--container-background','linear-gradient(90deg, #9c27b0, #f3f5f5 )')
  cur = 1
  }
  // toStudentTeachBtn.classList.toggle('CB-at-student')
  // toStudentTeachBtn.classList.toggle('CB-at-teacher')
  // applyBtn.classList.toggle('CB-at-student')
  // applyBtn.classList.toggle('CB-at-teacher')
  // container.
}

card.addEventListener('click',animation)
toStudentTeachBtn.addEventListener('click',animation)
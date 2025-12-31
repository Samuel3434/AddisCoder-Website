document.addEventListener('DOMContentLoaded', () => {
  const weeks = document.querySelectorAll('.week');

  weeks.forEach(week => {
    week.addEventListener('click', () => {

      weeks.forEach(wee =>{
        if (wee !== week){
          wee.classList.remove('collapsed')
        }
      })

      week.classList.toggle('collapsed');
    });
  });
});

const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('light')
  
  document.querySelectorAll('.main-text')
    .forEach(elem => elem.classList.toggle('light'))

})
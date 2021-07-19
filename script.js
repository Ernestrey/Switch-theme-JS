const themeButtons = document.querySelectorAll('.theme-button')
const page = document.querySelector('.page')

const lightImg = document.querySelector('.light-img')
const darkImg = document.querySelector('.dark-img')

for (themeButton of themeButtons) {
  themeButton.addEventListener('click', function () {
    page.classList.toggle('light-theme')
    page.classList.toggle('dark-theme')
    
    
    if (page.classList.contains('dark-theme')) {
    darkImg.classList.remove('hidden')
    lightImg.classList.add('hidden')
  } else {
    darkImg.classList.add('hidden')
    lightImg.classList.remove('hidden')
  }

  })
}
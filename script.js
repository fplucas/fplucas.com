let language = document.getElementById('language')
const divEnglish = document.getElementById('en')
const divPortuguese = document.getElementById('pt')

function toggleLanguage() {
  (language.text == 'EN') ? language.innerText = 'PT' : language.innerText = 'EN'
  divEnglish.classList.toggle('hidden')
  divPortuguese.classList.toggle('hidden')
}

language.addEventListener('click', toggleLanguage)

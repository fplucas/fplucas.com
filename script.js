let language = document.getElementById('language')
const divEnglish = document.getElementById('en')
const divPortuguese = document.getElementById('pt')

function toggleLanguage() {
  if (language.text == 'EN') {
    language.innerText = 'PT'
    divEnglish.style.display = 'inline'
    divPortuguese.style.display = 'none'
  } else {
    language.innerText = 'EN'
    divEnglish.style.display = 'none'
    divPortuguese.style.display = 'inline'
  }
}

language.onclick = function() {
  toggleLanguage()
}


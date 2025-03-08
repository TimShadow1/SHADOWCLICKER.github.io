const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')

function start() {
  setScore(getScore())
  setImage()
}

function setScore(score) {
  localStorage.setItem('score', score)
  $score.textContent = score
}

function setImage() {
  if (getScore() >= 200) {
    $circle.setAttribute('src', './assets/Shadow.png')
  }
}

function setImage2() {
  if (getScore() >= 250) {
    $circle.setAttribute('src', './assets/Shadow2.png')
  }
}
function setImage3() {
  if (getScore() >= 300) {
    $circle.setAttribute('src', './assets/sss.png')
  }
}
function setImage4() {
  if (getScore() >= 350) {
    $circle.setAttribute('src', './assets/sssr.png')
  }
}
function setImage5() {
  if (getScore() >= 400) {
    $circle.setAttribute('src', './assets/ssrr.png')
  }
}
function setImage6() {
  if (getScore() >= 500) {
    $circle.setAttribute('src', './assets/1488.png')
  }
}
function setImage7() {
  if (getScore() >= 600) {
    $circle.setAttribute('src', './assets/4444.png')
  }
}

function getScore() {
  return Number(localStorage.getItem('score')) ?? 0
}

function addOne() {
  setScore(getScore() + 1)
  setImage()
  setImage2()
  setImage3()
  setImage4()
  setImage5()
  setImage6()
  setImage7()
}

$circle.addEventListener('click', (event) => {
  const rect = $circle.getBoundingClientRect()

  const offfsetX = event.clientX - rect.left - rect.width / 2
  const offfsetY = event.clientY - rect.top - rect.height / 2

  const DEG = 85

  const tiltX = (offfsetY / rect.height) * DEG
  const tiltY = (offfsetX / rect.width) * -DEG

  $circle.style.setProperty('--tiltX', `${tiltX}deg`)
  $circle.style.setProperty('--tiltY', `${tiltY}deg`)

  setTimeout(() => {
    $circle.style.setProperty('--tiltX', `0deg`)
    $circle.style.setProperty('--tiltY', `0deg`)
  }, 300)

  const plusOne = document.createElement('div')
  plusOne.classList.add('plus-one')
  plusOne.textContent = '+1'
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`

  $circle.parentElement.appendChild(plusOne)

  addOne()

  setTimeout(() => {
    plusOne.remove()
  }, 2000)
})

start()
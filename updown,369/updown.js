const range = 100
const answer = Math.ceil(Math.random() * range)
console.log(answer)

const inputTag = document.getElementById('input')
const resultDiv = document.getElementById('result')
const formBtn = document.getElementById('formBtn')
const displayLife = document.getElementById('lifecnt')

let life = 5
formBtn.onclick = (event) => {
  life -= 1
  displayLife.textContent = life
  const userAnswer = Number(inputTag.value)
  const result = document.createElement('h2')
  result.textContent = userAnswer + ' => '
  if (userAnswer === answer) {
    result.textContent += 'Answer'
    alert('CORRECT')
  } else {
    if (life > 0) {
      event.preventDefault()
      userAnswer > answer
        ? (result.textContent += 'Down')
        : (result.textContent += 'UP')
      inputTag.focus()
    } else {
      alert('You failed!! The ansert is ' + answer)
    }
  }
  resultDiv.append(result)
  inputtag.value = ''
}

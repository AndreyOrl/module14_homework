const input = document.getElementById('input');
const button = document.getElementById('button');
const resultItem = document.getElementById('result');

const url = 'https://picsum.photos/v2/list?limit='

const checkValue = url => {
    const inputValue = input.value
    //console.log(inputValue);
    if (1 <= inputValue && inputValue <= 10){
        let random = url + inputValue
        xhrRequest(random)
        //console.log(random);
    }
    else{
        resultItem.innerHTML = `Число вне диапазона от 1 до 10`
    }
}
const xhrRequest = random => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', random, true)
  
    xhr.onload = function () {
      if (xhr.status !== 200) {
        console.log('Status is', xhr.status)
      } else if (xhr.onerror) {
        console.log('Error. Status is', xhr.status)
      } else {
        const response = JSON.parse(xhr.response)
        displayResult(response)
      }
    }
    xhr.send()
  }
  const displayResult = apiData => {
    const resultData = apiData.map(
      item =>
        `<div><img class="img" src="${item.download_url}"></div>`,
    )
    resultItem.innerHTML = resultData.join('')
  }
  button.addEventListener('click', () => {
    checkValue(url)
  })
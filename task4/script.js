let answer = document.querySelector('.answer')
let btn = document.querySelector('.btn')
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () => {


    let input1 = document.querySelector('.input1').value
    let input2 = document.querySelector('.input2').value

    if (input1 >= 100 && input1 <= 300 && input2 >= 100 && input2 <= 300) {

        fetch(`https://picsum.photos/${input1}/${input2}`)
            .then((response) => {
                return response.url;
            })
            .then((data) => {
                
                answer.innerHTML = `<img class = "image" src=" ${data}" alt="картинка" style="width:${input1}px; height:${input2}px" ></img>`;
            })

    } else {
      answer.innerHTML ='одно из чисел вне диапазона от 100 до 300';
    }


});
function generateNumber() {
    const firstInput = Math.ceil(document.querySelector('.first').value)
    const secondInput = Math.floor(document.querySelector('.second').value)

    const result = Math.floor(Math.random() * (secondInput - firstInput + 1) + firstInput)

    const drawResult = document.querySelector('.result')
    drawResult.innerText = result
    
    
}




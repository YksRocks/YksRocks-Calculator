const ps = document.querySelectorAll('p')
const buttons = document.querySelectorAll('button')
const resultHistory = document.querySelector('#result-history')
const resultValue = document.querySelector('#result-value')


let Value = 1
let dot=0

for (let i of buttons) {
    i.addEventListener('click', function (e) {
        if (i.innerText === '7') {
            for (j of ps) { 
                if (j.textContent === '7') {
                    
                    if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === '8') {
            for (j of ps) {
                if (j.textContent === '8') {
                    
                    if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                        
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === '9') {
            for (j of ps) {
                if (j.textContent === '9') {
                    
                   if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === '4') {
            for (j of ps) {
                if (j.textContent === '4') {
                    
                    if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === '5') {
            for (j of ps) {
                if (j.textContent === '5') {
                   
                    if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                       
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === '6') {
            for (j of ps) {
                if (j.textContent === '6') {
                    
                   if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === '1') {
            for (j of ps) {
                if (j.textContent === '1') {
                   
                   if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === '2') {
            for (j of ps) {
                if (j.textContent === '2') {
                    
                   if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === '3') {
            for (j of ps) {
                if (j.textContent === '3') {
                   
                   if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === '0') {
            for (j of ps) {
                if (j.textContent === '0') {
                    
                    if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                    } else {
                        resultValue.append(j.textContent)
                    }
                }
        }
        }
        if (i.innerText === 'DEL') {
            for (j of ps) {
                if (j.textContent === 'DEL') {
                    resultValue.innerText = resultValue.innerText.slice(0, length - 1)
                    dot=0
                }
        }
        }
        if (i.innerText === '+') {
            for (j of ps) {
                if (j.textContent === '+') {
                    if (resultValue.innerText=== '') {
                        resultHistory.innerText = resultHistory.innerText.substr(0, resultHistory.innerText.length - 1) + '+'
                        dot=0
                    } else {
                        resultHistory.classList.remove('rH')
                        resultHistory.innerText = resultHistory.innerText + resultValue.innerText + '+'
                        resultValue.innerText = ''
                        dot=0
                    }
                }
        }
        }
        if (i.innerText === '-') {
            for (j of ps) {
                if (j.textContent === '-') {
                    if (resultValue.innerText === '') {
                        resultHistory.innerText = resultHistory.innerText.substr(0, resultHistory.innerText.length - 1) + '-'
                        dot=0
                    } else {
                        resultHistory.classList.remove('rH')
                        resultHistory.innerText = resultHistory.innerText + resultValue.innerText + '-'
                        resultValue.innerText = ''
                        dot=0
                    }
                }
        }
        }
        if (i.innerText === 'x') {
            for (j of ps) {
                if (j.textContent === 'x') {
                    if (resultValue.innerText === '') {
                        resultHistory.innerText = resultHistory.innerText.substr(0, resultHistory.innerText.length - 1) + '*'
                        dot=0
                    } else {
                        resultHistory.classList.remove('rH')
                        resultHistory.innerText = resultHistory.innerText + resultValue.innerText + '*'
                        resultValue.innerText = ''
                        dot=0
                    }
                }
        }
        }
        if (i.innerText === '.') {
            for (j of ps) {
                if (j.textContent === '.') {
                    if (Value === 1) {
                        resultValue.innerText=''
                        resultValue.append(j.textContent)
                    } else {
                        if (dot != 0) {
                            resultValue.innerText = resultValue.innerText
                        } else if (dot == 0) {
                            dot++
                            resultValue.append(j.textContent)
                        }
                    }
                }
            } 
        }
        if (i.innerText === '/') {
            for (j of ps) {
                if (j.textContent === '/') {
                    if (resultValue.innerText === '') {
                        resultHistory.innerText = resultHistory.innerText.substr(0, resultHistory.innerText.length - 1) + '/'
                        dot=0
                    } else {
                        resultHistory.classList.remove('rH')
                        resultHistory.innerText = resultHistory.innerText + resultValue.innerText + '/'
                        resultValue.innerText = ''
                        dot=0
                    }
                }
        }
        }
        if (i.innerText === '=') {
            for (j of ps) {
                if (j.textContent === '=') {

                    if (resultValue.innerText !== '') {
                        resultValue.innerText = eval(resultHistory.innerText + resultValue.innerText)
                        resultHistory.innerText = ''
                        resultHistory.classList.add('rH')
                        dot = dot - 1
                    } else if (resultValue.innerText === '') {
                        dot =0
                        // resultValue.innerText = eval(resultHistory.innerText.substr(0,resultHistory.innerText.length-1))
                        // resultHistory.innerText = ''
                        // resultHistory.classList.add('rH')
                        
                    }
                    
                }
        }
        }
        if (i.innerText === 'RESET') {
            for (j of ps) {
                if (j.textContent === 'RESET') {
                    resultValue.innerText = ''
                    resultHistory.innerText = ''
                    dot=0 
                }
        }
        }
        Value = Value + 1
        } 
    )
}




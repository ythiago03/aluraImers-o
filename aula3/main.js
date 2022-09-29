const btn = document.querySelector('#btnChute')
const btnReset = document.querySelector('#btnReset')
const value = document.querySelector('#numb')
const attempts = document.querySelector('#chances')
const kicks = document.querySelector('#chutes')
const res = document.querySelector('.res')

let chances = 3
let chutes =  []

let numberSecret = Math.round(Math.random() * 10)

const chutar = () => {
    console.log(chances);
    if(chances <= 0){
        res.style.color = 'red'
        res.innerHTML = `Suas tentativas acabaram, o número secreto era: ${numberSecret}`
        btn.setAttribute('disabled', '')
        btnReset.removeAttribute('disabled')
        return;
    }else if(chances <= 3){
        attempts.style.color = 'yellow'
    }else if(chances <= 1){
        attempts.style.color = 'red'
    }

    if(+value.value > 10 || +value.value < 0){
        res.classList.add('chutado')
        res.style.color = 'yellow'
        res.innerHTML = 'Digite um número entre 0 e 10.'
        return;
    }

    if(+value.value == numberSecret){
        chutes.push(+value.value)
        kicks.innerHTML = chutes
        res.classList.add('chutado')
        res.style.color = 'green'
        res.innerHTML = `Parabéns você acertou! O número secreto era: ${numberSecret}`
        btn.setAttribute('disabled', '')
        btnReset.removeAttribute('disabled')
    }
    else if(+value.value > numberSecret){
        chances--
        chutes.push(+value.value)
        attempts.innerHTML = chances
        value.value = ''
        kicks.innerHTML = chutes
        res.classList.add('chutado')
        res.style.color = 'yellow'
        res.innerHTML = ` O número secreto é menor que o chutado!`
    }
    else if(+value.value < numberSecret){
        chances--
        chutes.push(+value.value)
        attempts.innerHTML = chances
        value.value = ''
        kicks.innerHTML = chutes
        res.classList.add('chutado')
        res.style.color = 'yellow'
        res.innerHTML = ` O número secreto é maior que o chutado!`
    }

}

const reset = () => {
    location.reload()
}

btnReset.addEventListener('click', reset)
btn.addEventListener('click', chutar)



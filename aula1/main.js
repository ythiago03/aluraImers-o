const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const nota4 = document.querySelector('#nota4')
const btn = document.querySelector('#btn')
const res = document.querySelector('.res')

const calcular = (event) => {
    event.preventDefault()
    if(+nota1.value == '' || +nota2.value == '' || 
       +nota3.value == '' || +nota4.value == ''){
        window.alert('[ERROR] Preencha as notas corretamente!')
        res.textContent = ''
        return;
    }

    const media = (+nota1.value + +nota2.value + +nota3.value + +nota4.value) / 4
    if(media.toFixed(1) >= 6){
        res.textContent = `Parabéns, você passou! A sua média foi ${media.toFixed(1)}`
        res.style.color = 'green'
        return;
    }
    res.textContent = `Infelizmente você não passou. A sua média foi ${media.toFixed(1)}`
    res.style.color = 'red'
}

btn.addEventListener('click', calcular)
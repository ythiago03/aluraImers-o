const btns = document.querySelectorAll('button') 
const res = document.querySelector('.res')
const money = document.querySelector('#numb')
let real = 0

const converter = (i) => {
    switch(i){

        case 0:
            // dollar 5,23
            real = (+money.value * 5.23).toFixed(2)
            res.textContent = `A conversão de $${money.value} para real é: R$${real}`
        
            break;
        case 1:
            // Yen 0,037    
            real = (+money.value * 0.037).toFixed(2)
            res.textContent = `A conversão de  ¥${money.value} para real é: R$${real}`
            
            break;
        case 2:
            // Pound 6,03
            real = (+money.value * 6.03).toFixed(2)
            res.textContent = `A conversão de £${money.value} para real é: R$${real}`
        
            break;
        case 3:
            // Bitcoin 103471,00
            real = (+money.value * 103471.00).toFixed(2)
            res.textContent = `A conversão de ฿${money.value} para real é: R$${real}`
            break;    
        default:
        
            break;
        
    }
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', (event) => {
        event.preventDefault()
        converter(i)
    })
}

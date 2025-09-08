const botao1 = document.getElementById('btn1')
const botao2 = document.getElementById('btn2')
const pag = document.getElementById('div1')
botao1.addEventListener('click', () => {
    pag.classList.add('girar')
    botao1.classList.add('girar')
    botao1.classList.add('girar')

})

botao2.addEventListener('click', () => {
    pag.classList.remove('girar')
    botao1.classList.remove('girar')
    botao1.classList.remove('girar')
})
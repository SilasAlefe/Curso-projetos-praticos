const botao1 = document.getElementById('btn1')
const botao2 = document.getElementById('btn2')
const pag = document.getElementById('div1')
const pagbtn = document.getElementById('div2')
botao1.addEventListener('click', () => {
    pag.classList.add('girar1')
    pagbtn.classList.add('girar2')
    pagbtn.classList.add('girar2')
    setTimeout( () => {document.body.classList.add('scroll')  
    }, 550)
})

botao2.addEventListener('click', () => {
    pag.classList.remove('girar1')
    pagbtn.classList.remove('girar2')
    pagbtn.classList.remove('girar2')
    setTimeout( () => {document.body.classList.remove('scroll')  
    }, 550)
})
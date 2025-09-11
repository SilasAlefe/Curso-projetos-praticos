const botao1 = document.getElementById('btn1')
const botao2 = document.getElementById('btn2')
const btnmenu1 = document.getElementById('btnmenu1')
const btnmenu2 = document.getElementById('btnmenu2')
const btnmenu3 = document.getElementById('btnmenu3')
const pag = document.getElementById('div1')
const pagbtn = document.getElementById('div2')

botao1.addEventListener('click', () => {
    pag.classList.add('girar1')
    pagbtn.classList.add('girar2')
    pagbtn.classList.add('girar2')
    btnmenu1.style.marginLeft='5px'
    btnmenu2.style.marginLeft='20px'
    btnmenu3.style.marginLeft='40px'
    setTimeout( () => {document.body.classList.add('scroll')  
    }, 550)
})

botao2.addEventListener('click', () => {
    pag.classList.remove('girar1')
    pagbtn.classList.remove('girar2')
    pagbtn.classList.remove('girar2')
    btnmenu1.style.marginLeft='-130px'
    btnmenu2.style.marginLeft='-130px'
    btnmenu3.style.marginLeft='-130px'
    setTimeout( () => {document.body.classList.remove('scroll')  
    }, 550)
})
const caixa = document.querySelectorAll('.content')

window.addEventListener('scroll', mostrarcaixa)

mostrarcaixa()

function mostrarcaixa(){
    const triggerbutton = (window.innerHeight / 5)*4

    caixa.forEach(content => {
        const boxtop = content.getBoundingClientRect().top

        if (boxtop < triggerbutton){
            content.classList.add('mostrar')
            console.log(triggerbutton)
            console.log(boxtop)
        } else{
            content.classList.remove('mostrar')
        }
    })
}
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4 = document.getElementById('img4')

img1.addEventListener('click', clicou1)
img2.addEventListener('click', clicou2)
img3.addEventListener('click', clicou3)
img4.addEventListener('click', clicou4)

function clicou1(){
    img1.style.flexBasis = '65vw'
    img2.style.flexBasis = '40px'
    img3.style.flexBasis = '40px'
    img4.style.flexBasis = '40px'

    let h1 = document.querySelector('#h11')
    let h2 = document.querySelector('#h12')
    let h3 = document.querySelector('#h13')
    let h4 = document.querySelector('#h14')
    h1.style.opacity = '1'
    h2.style.opacity = '0'
    h3.style.opacity = '0'  
    h4.style.opacity = '0'  
}
function clicou2(){
    img1.style.flexBasis = '40px'
    img2.style.flexBasis = '65vw'
    img3.style.flexBasis = '40px'
    img4.style.flexBasis = '40px'

    let h1 = document.querySelector('#h11')
    let h2 = document.querySelector('#h12')
    let h3 = document.querySelector('#h13')
    let h4 = document.querySelector('#h14')
    h1.style.opacity = '0'
    h2.style.opacity = '1'
    h3.style.opacity = '0'  
    h4.style.opacity = '0'  
}
function clicou3(){
    img1.style.flexBasis = '40px'
    img2.style.flexBasis = '40px'
    img3.style.flexBasis = '65vw'
    img4.style.flexBasis = '40px'

    let h1 = document.querySelector('#h11')
    let h2 = document.querySelector('#h12')
    let h3 = document.querySelector('#h13')
    let h4 = document.querySelector('#h14')
    h1.style.opacity = '0'
    h2.style.opacity = '0'
    h3.style.opacity = '1'  
    h4.style.opacity = '0'  
}
function clicou4(){
    img1.style.flexBasis = '40px'
    img2.style.flexBasis = '40px'
    img3.style.flexBasis = '40px'
    img4.style.flexBasis = '65vw'

    let h1 = document.querySelector('#h11')
    let h2 = document.querySelector('#h12')
    let h3 = document.querySelector('#h13')
    let h4 = document.querySelector('#h14')
    h1.style.opacity = '0'
    h2.style.opacity = '0'
    h3.style.opacity = '0'  
    h4.style.opacity = '1'  
}

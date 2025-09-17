const blur = document.querySelector('#blur')
const counting = document.getElementById('counting')


for (let a = 1; a<=100; a++){
    function contagem() {
        counting.innerHTML = (`${a}`)
    }
}


setTimeout(contagem(), 1s)
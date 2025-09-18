const blour = document.getElementById('blur')
const counting = document.getElementById('counting')
let a = 1
let b = 30
    function contagem() {
        counting.innerHTML = (`${a}%`)
        blour.style.backdropFilter = `blur(${b}px)`
        b-=0.3
        a+=1

        if(a>100){
            clearInterval(c)
        }
    }

    const c = setInterval(contagem, 40)

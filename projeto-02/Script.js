let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')
let num4 = document.getElementById('num4')

let load1 = document.getElementById('load1')
let load2 = document.getElementById('load2')
let load3 = document.getElementById('load3')


btn1.addEventListener('click', clicou1)
btn2.addEventListener('click', clicou2)

let next = 0

function clicou1(){
    if (next>0){
        if (next==1){
            load1.style.width = '0%'
            num2.style.border ='2px solid #DCDCDE'
            btn1.style.backgroundColor ='#DCDCDC'
            btn1.style.cursor = 'no-drop'
        } else if (next==2){
            load2.style.width = '0%'
            num3.style.border ='2px solid #DCDCDE'
        } else if (next==3){
            load3.style.width = '0%'
            num4.style.border ='2px solid #DCDCDE'
            btn2.style.backgroundColor ='#2788D6'
            btn2.style.cursor = 'pointer'
        }
        
        if (next!=0){
            next -= 1
        }
    }
}

function clicou2(){
        if (next==0){
            load1.style.backgroundColor = '#2788D6'
            load1.style.width = '100%'
            num2.style.border ='2px solid #2788D6'
            btn1.style.backgroundColor ='#2788D6'
            btn1.style.cursor = 'pointer'
        } else if (next==1){
            load2.style.backgroundColor = '#2788D6'
            load2.style.width = '100%'
            num3.style.border ='2px solid #2788D6'
        } else if (next==2){
            load3.style.backgroundColor = '#2788D6'
            load3.style.width = '100%'
            num4.style.border ='2px solid #2788D6'
            btn2.style.backgroundColor ='#DCDCDC'
            btn2.style.cursor = 'no-drop'
        }

    if (next<=2){
        next += 1
    }
}
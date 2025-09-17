const btnsearch = document.getElementById('btn-search')
const searchtxt = document.getElementById('searchtxt')
searchtxt.classList.add('btn-search-activated-origin')
let clique = 1

btnsearch.addEventListener('click', () => {
    if (clique==1){
        searchtxt.classList.add('btn-search-activated')
        searchtxt.focus()
        clique += 1 
    } else if(clique){
        searchtxt.classList.remove('btn-search-activated')
        clique = 1
    }
})

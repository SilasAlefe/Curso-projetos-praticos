const btnsearch = document.getElementById('btn-search')
const searchtxt = document.getElementById('searchtxt')
searchtxt.classList.add('btn-search-activated')
let clique = 1

btnsearch.addEventListener('click', () => {
    if (clique==1){
        searchtxt.classList.remove('btn-search-activated')
        clique += 1 
    } else if(clique){
        searchtxt.classList.add('btn-search-activated')
        clique = 1
    }
})

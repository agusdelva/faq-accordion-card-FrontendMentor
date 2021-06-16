const mainDesplegables = document.querySelector('.main__desplegables')

const [...hijos] = mainDesplegables.children

    let clickActual = '';
    let clickAnterior = '';

    hijos.map( hijo => {
        hijo.addEventListener('click', (e) => {

            if(clickAnterior === ''){
            clickActual = e.target.parentElement
            clickAnterior = clickActual 
            // console.log(clickActual, clickAnterior);
            }else if (clickActual !== e.target.parentElement){
            clickAnterior = clickActual 
            clickActual = e.target.parentElement

            clickAnterior.removeAttribute('open')
            }
        })
    })

console.log(hijos);
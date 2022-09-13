const btnMode = document.getElementById('btnMode')

const header = document.getElementById('header')
const barras = document.getElementById('barras')

const main = document.getElementById('main')
const footer = document.getElementById('footer')

const T1 = document.getElementById('container-titulos1')
const T2 = document.getElementById('container-titulos2')
const T3 = document.getElementById('container-titulos3')
const T4 = document.getElementById('container-titulos4')

btnMode.addEventListener('click',cambioColor)

function cambioColor(){

// Black Mode On
if(btnMode.textContent === "Activar"){

    btnMode.textContent = "Desactivar"
    btnMode.style.width = '40%'

    header.style.background = '#1F1F1D'
    header.style.borderBottom = '1px solid white'
    barras.style.color = 'white'

    main.style.background = '#1F1F1D'
    main.style.bordertop = '1px solid white'
    main.style.borderBottom = '1px solid white'

    footer.style.background = '#1F1F1D'
    footer.style.bordertop = '1px solid white'

    T1.style.borderBottom = '2px solid white'
    T2.style.borderBottom = '2px solid white'
    T3.style.borderBottom = '2px solid white'
    T4.style.borderBottom = '2px solid white'
}
// Black Mode Off
else if(btnMode.textContent === "Desactivar"){

    btnMode.textContent = "Activar"
    btnMode.style.width = '30%'

    header.style.background = '#E3EAF5'
    header.style.borderBottom = '1px solid black'
    barras.style.color = 'black'

    main.style.background = '#E3EAF5'
    main.style.bordertop = '1px solid black'
    main.style.borderBottom = '1px solid black'

    footer.style.background = '#E3EAF5'
    footer.style.bordertop = '1px solid black'

    T1.style.borderBottom = '2px solid black'
    T2.style.borderBottom = '2px solid black'
    T3.style.borderBottom = '2px solid black'
    T4.style.borderBottom = '2px solid black'

    }

}

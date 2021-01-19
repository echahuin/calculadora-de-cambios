let botonReinicio = document.getElementById('botonReinicio')
let cambio = document.getElementById('cambio');

botonReinicio.addEventListener('click', () => {

    let dineroRecivido = window.prompt('¿Cuanto de dinero le dieron?');
    let totalCobrar = window.prompt('¿Cuanto tine que cobrar?');

    let total = () => dineroRecivido - totalCobrar

    cambio.innerHTML = `
        <span class="spanCliente" >Dinero del Cliente: ${dineroRecivido}</span></br>   
        <span class="spanCobrar" >Cotal a Cobrar: ${totalCobrar} </span></br>
        <h2 class="total" >Total Cambio: ${total()} $</h2> </br>
    `
}
)
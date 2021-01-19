

let botonReinicio = document.getElementById('botonReinicio')
let cambio = document.getElementById('cambio');

botonReinicio.addEventListener('click', () => {

    let dineroRecivido = window.prompt('Dinero Recivido');
    /* document.write(`
     
     <div class="modal" 
     style="height: 50vh;
     width: 80%;
     border: 1px solid green;
     background: rgb(110, 180, 110, 0.5);"
     >  </div>`)
     */
    let totalCobrar = window.prompt('¿Cuanto tine que cobrar?');

    let total = () => dineroRecivido - totalCobrar

    cambio.innerHTML = `
        <span class="spanCliente" >Dinero del Cliente: ${dineroRecivido}</span></br>   
        <span class="spanCobrar" >Cotal a Cobrar: ${totalCobrar} </span></br>
        <h2 class="total" >Total Cambio: ${total()} $</h2> </br>
    `
}
)
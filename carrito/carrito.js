class Carrito {
  cesta = [];
  constructor() {}
  agregar(fruta, cant, precio) {
    let subtotal = cant * precio;
    fruta = {
      "nombre": fruta,
      "precio":precio,
      "cant": cant,
      "subtotal": subtotal
    };
    this.cesta.push(fruta);
    this.listar();
  }
  listar() {
    console.log(this.cesta);
    let html = "";
    let total = 0;
    let pos=0;
    for (let fruta of this.cesta) {
      html += `<tr>
            <td><button onclick="eliminar(${pos})">x</button></td>
            <td><button>${fruta.nombre}</button></td>
            <td><button>${fruta.precio}</button></td>
            <td><button>${fruta.cant}</button></td>
            <td><button>${fruta.subtotal.toFixed(2)}</button></td>
            </tr>`;
      total += fruta.subtotal;
      pos++;
    }
    let cuerpo = document.getElementById("lista");
    cuerpo.innerHTML = html;
    let celdaTotal = document.getElementById("total");
    celdaTotal.innerHTML = total.toFixed(2);
  }
  remover(pos){
    this.cesta.splice(pos,1);
    this.listar();
  }
}

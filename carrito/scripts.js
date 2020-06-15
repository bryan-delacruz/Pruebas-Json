function listar() {
  let ruta = "http://localhost:3000/frutas";
  fetch(ruta)
    .then((Response) => Response.json())
    .then((datos) => {
      console.log(datos);
      html = `<option value="0">Seleccione una fruta</option>`;
      for (fruta of datos) {
        console.log(fruta.nombre);
        html += `<option value="${fruta.precio}">
        ${fruta.nombre}</Option>`;
      }
      console.log(html);
      combo = document.getElementById("frutas");
      combo.innerHTML = html;
    });
}
function agregar() {
  combo = document.getElementById("frutas");
  cajaCant = document.getElementById("kg");
  if(combo.selectedIndex==0){
    alert("No se ha seleccionado ninguna fruta");
    return;
  }
  if (cajaCant.value <= 0 || cajaCant == "") {
    alert("El valor de la cantidad es incorrecto");
    return;
  }
  precio = combo.value;
  console.log(combo.selectedIndex);
  nombre = combo.options[combo.selectedIndex].text;
  console.log(nombre);
  obj.agregar(nombre, cajaCant.value, precio);
  combo.selectedIndex = 0;
  cajaCant.value = "";
}
function eliminar(pos) {
  console.log("pos: " + pos);
  rpta = confirm("¿Está seguro de eliminar este item");
  if (rpta) {
    obj.remover(pos);
  }
}
obj = new Carrito();
window.onload = function () {
  listar();
};

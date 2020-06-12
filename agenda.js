class Agenda {
  ruta = "http://localhost:3000/contactos";
  constructor() {}
  listar() {
    fetch(this.ruta)
      .then((Response) => Response.json())
      .then((datos) => {
        console.log(datos);
        let html = "";
        for (let contacto of datos) {
          console.log(contacto);
          html += `<tr>
              <td>${contacto.nombre}</td>
              <td>${contacto.telefono}</td>
              <td>
              <button onclick="mostrar(${contacto.id})">&#9999;&#65039</button>
              <button onclick="eliminar(${contacto.id})">&#10060</button>
              </td>
              </tr>`;
        }
        let cuerpo = document.getElementById("data");
        cuerpo.innerHTML = html;
      });
  }
  insertar(nom, telf) {
    let val_headers = { "Content-type": "application/json;charset=UTF-8" };
    let data = JSON.stringify({
      nombre: nom,
      telefono: telf,
    });
    fetch(this.ruta, { method: "POST", body: data, headers: val_headers })
      .then((Response) => Response.json())
      .then((datos) => console.log(datos));
    this.listar();
  }
  remover(id) {
    let url_ruta = this.ruta + "/" + id;
    console.log("remover: " + url_ruta);
    fetch(url_ruta, { method: "DELETE" }).then(() => this.listar());
  }
  detalle(id) {
    let url_ruta = this.ruta + "/" + id;
    fetch(url_ruta)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        let cajaNom = document.getElementById("nom");
        let cajaTelf = document.getElementById("telf");
        cajaNom.value = data.nombre;
        cajaTelf.value = data.telefono;
      });
  }
}

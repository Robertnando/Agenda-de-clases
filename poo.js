// Clase base para un contacto
class Contacto {
    constructor(nombre, direccion, telefono, fotografia) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.fotografia = fotografia;
    }
 
    mostrarDetalles() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Dirección: ${this.direccion}`);
      console.log(`Teléfono: ${this.telefono}`);
      console.log(`Fotografía: ${this.fotografia}`);
    }
  }
 
  // Clase para la agenda de contactos
  class Agenda {
    constructor() {
      this.contactos = [];
    }
 
    agregarContacto(contacto) {
      this.contactos.push(contacto);
    }
 
    editarContacto(nombre, contactoEditado) {
      const indice = this.contactos.findIndex(c => c.nombre === nombre);
      if (indice !== -1) {
        this.contactos[indice] = contactoEditado;
      }
    }
 
    eliminarContacto(nombre) {
      this.contactos = this.contactos.filter(c => c.nombre !== nombre);
    }
 
    buscarContactos(criterio, propiedad) {
        return this.contactos.filter(c => c[propiedad].includes(criterio));
    }
  }
 
 
 
  // Uso de la agenda
  const agenda = new Agenda();
 
  // Agregar contactos
  const contacto1 = new Contacto('Juan Pérez', 'Calle 123', '555-1234', 'https://foto1.jpg');
  const contacto2 = new Contacto('María García', 'Avenida 456', '555-5678', 'https://foto2.jpg');
  agenda.agregarContacto(contacto1);
  agenda.agregarContacto(contacto2);
 
  // Editar un contacto
  const contactoEditado = new Contacto('Juan Pérez', 'Nueva Dirección', '555-1234', 'https://i.kym-cdn.com/entries/icons/original/000/015/990/skeleton_memes_banner.jpg');
  agenda.editarContacto('Juan Pérez', contactoEditado);
 
  // Eliminar un contacto
  agenda.eliminarContacto('María García');
 
  // Buscar contactos por nombre
 
  const contactosPorNombre = agenda.buscarContactos('Juan',"nombre");
  console.log('Contactos por nombre:');
  contactosPorNombre.forEach(c => c.mostrarDetalles());
 
  // Buscar contactos por dirección

  const contactosPorDireccion = agenda.buscarContactos('Nueva',"direccion");
  console.log('Contactos por dirección:');
  contactosPorDireccion.forEach(c => c.mostrarDetalles());
 
  // Buscar contactos por teléfono

  const contactosPorTelefono = agenda.buscarContactos('555-1234',"telefono");
  console.log('Contactos por teléfono:');
  contactosPorTelefono.forEach(c => c.mostrarDetalles());


  //----------------------------------------------------------------------------------------------------------------------

  
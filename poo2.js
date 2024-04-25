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
  
    buscarContactos(criterio) {
      return this.contactos.filter(c =>
        c.nombre.includes(criterio) ||
        c.direccion.includes(criterio) ||
        c.telefono.includes(criterio)
      );
    }
  }
  
  // Clase para buscar contactos por nombre
  class BuscarPorNombre extends Agenda {
    buscarContactos(nombre) {
      return super.buscarContactos(nombre);
    }
  }
  
  // Clase para buscar contactos por dirección
  class BuscarPorDireccion extends Agenda {
    buscarContactos(direccion) {
      return super.buscarContactos(direccion);
    }
  }
  
  // Clase para buscar contactos por teléfono
  class BuscarPorTelefono extends Agenda {
    buscarContactos(telefono) {
      return super.buscarContactos(telefono);
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
  const contactoEditado = new Contacto('Juan Pérez', 'Nueva Dirección', '555-1234', 'https://foto1.jpg');
  agenda.editarContacto('Juan Pérez', contactoEditado);
  
  // Eliminar un contacto
  agenda.eliminarContacto('María García');
  
  // Buscar contactos por nombre (No hay manera de que acceda a contactos porque esta clase crea un contacto nuevo vacío)
  const buscadorPorNombre = new BuscarPorNombre();
  const contactosPorNombre = buscadorPorNombre.buscarContactos('Juan');
  console.log('Contactos por nombre:');
  contactosPorNombre.forEach(c => c.mostrarDetalles());
  
  // Buscar contactos por dirección
  const buscadorPorDireccion = new BuscarPorDireccion();
  const contactosPorDireccion = buscadorPorDireccion.buscarContactos('Nueva');
  console.log('Contactos por dirección:');
  contactosPorDireccion.forEach(c => c.mostrarDetalles());
  
  // Buscar contactos por teléfono
  const buscadorPorTelefono = new BuscarPorTelefono();
  const contactosPorTelefono = buscadorPorTelefono.buscarContactos('555-1234');
  console.log('Contactos por teléfono:');
  contactosPorTelefono.forEach(c => c.mostrarDetalles());
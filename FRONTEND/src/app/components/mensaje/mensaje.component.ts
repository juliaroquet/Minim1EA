import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../services/mensaje.service';  // Asegúrate de usar la ruta correcta

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  mensajes: any[] = [];
  nuevoMensaje: string = ''; 
  etiquetaNueva: string = ''; // Campo para nueva etiqueta
  usuarioId: string = 'idUsuario'; // Deberías obtener el ID del usuario de la sesión, por ejemplo, desde un servicio de autenticación
  destinatarioId: string = 'idDestinatario'; // Puede ser también dinámico o seleccionado en la interfaz

  constructor(private mensajeService: MensajeService) {} // Cierre de constructor correctamente

  ngOnInit(): void {
    this.cargarMensajes();
  }

  cargarMensajes(): void {
    // Aquí debes reemplazar 'idUsuario' por el ID real del usuario
    this.mensajeService.obtenerMensajes(this.usuarioId).subscribe((data) => {
      this.mensajes = data;
    });
  }

  enviarMensaje(): void {
    if (this.nuevoMensaje) {
      // Enviar mensaje con la propiedad 'contenido', 'remitenteId', y 'destinatarioId'
      this.mensajeService.enviarMensaje({
        contenido: this.nuevoMensaje,
        remitenteId: this.usuarioId, // Usando la propiedad usuarioId en lugar de un valor estático
        destinatarioId: this.destinatarioId, // Usando la propiedad destinatarioId
      }).subscribe(() => {
        this.cargarMensajes(); // Recargar los mensajes después de enviar
        this.nuevoMensaje = ''; // Limpiar el campo de texto después de enviar
      });
    }
  }

  responderMensaje(mensajeId: string, respuesta: string): void {
    this.mensajeService.responderMensaje(mensajeId, {
      contenido: respuesta, 
      remitenteId: this.usuarioId, 
      destinatarioId: this.destinatarioId
    }).subscribe(() => {
      this.cargarMensajes(); // Recargar los mensajes después de responder
    });
  }

  crearEtiqueta(mensajeId: string): void {
    if (this.etiquetaNueva) {
      this.mensajeService.crearEtiqueta(mensajeId, this.etiquetaNueva).subscribe(() => {
        this.cargarMensajes(); // Recargar los mensajes después de agregar la etiqueta
        this.etiquetaNueva = ''; // Limpiar el campo de etiqueta después de agregar
      });
    }
  }

  eliminarEtiqueta(mensajeId: string, etiqueta: string): void {
    this.mensajeService.eliminarEtiqueta(mensajeId, etiqueta).subscribe(() => {
      this.cargarMensajes(); // Recargar los mensajes después de eliminar la etiqueta
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../services/mensaje.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajePrivadoComponent implements OnInit {
  mensajes: any[] = [];
  nuevoMensaje: string = '';

  constructor(private mensajeService: MensajeService) {}

  ngOnInit(): void {
    this.cargarMensajes();
  }

  cargarMensajes(): void {
    this.mensajeService.obtenerMensajes().subscribe((data) => {
      this.mensajes = data;
    });
  }

  enviarMensaje(): void {
    if (this.nuevoMensaje) {
      this.mensajeService.enviarMensaje({ contenido: this.nuevoMensaje }).subscribe(() => {
        this.cargarMensajes();
        this.nuevoMensaje = '';
      });
    }
  }

  responderMensaje(mensajeId: string, respuesta: string): void {
    this.mensajeService.responderMensaje(mensajeId, { contenido: respuesta }).subscribe(() => {
      this.cargarMensajes();
    });
  }
}

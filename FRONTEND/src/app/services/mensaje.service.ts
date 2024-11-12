import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/mensaje.model';  // Importa el modelo de mensaje

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private apiUrl = 'http://localhost:3000/api/mensajes'; // URL del backend (ajústala según tu configuración)

  constructor(private http: HttpClient) {}

  // Método para obtener todos los mensajes de un usuario
  obtenerMensajes(usuarioId: string): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }

  // Método para obtener los mensajes no leídos de un usuario
  obtenerMensajesNoLeidos(usuarioId: string): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.apiUrl}/usuario/${usuarioId}/no-leidos`);
  }

  // Método para enviar un nuevo mensaje
  enviarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiUrl}`, mensaje);
  }

  // Método para responder a un mensaje
  responderMensaje(mensajeId: string, respuesta: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiUrl}/${mensajeId}/responder`, respuesta);
  }

  // Método para marcar un mensaje como leído
  marcarComoLeido(mensajeId: string): Observable<Mensaje> {
    return this.http.patch<Mensaje>(`${this.apiUrl}/${mensajeId}/marcar-como-leido`, {});
  }

  // Método para crear una etiqueta en un mensaje
  crearEtiqueta(mensajeId: string, etiqueta: string): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiUrl}/${mensajeId}/etiquetas`, { etiqueta });
  }

  // Método para eliminar una etiqueta de un mensaje
  eliminarEtiqueta(mensajeId: string, etiqueta: string): Observable<Mensaje> {
    return this.http.delete<Mensaje>(`${this.apiUrl}/${mensajeId}/etiquetas/${etiqueta}`);
  }
}

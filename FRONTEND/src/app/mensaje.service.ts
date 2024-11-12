import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from './models/mensaje.model';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private apiUrl = 'http://localhost:3000/api/mensajes'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  // Método para obtener todos los mensajes de un usuario
  obtenerMensajes(usuarioId: string): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }

  // Método para enviar un nuevo mensaje
  enviarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiUrl}`, mensaje);
  }

  // Método para responder a un mensaje
  responderMensaje(mensajeId: string, respuesta: Mensaje): Observable<Mensaje> {
    return this.http.post<Mensaje>(`${this.apiUrl}/${mensajeId}/responder`, respuesta);
  }
}

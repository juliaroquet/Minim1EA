import { Request, Response } from 'express';
import { mensajeService } from '../services/mensajeService';

export class MensajeController {

   //enviar mensaje 
  async enviarMensaje(req: Request, res: Response) {
    try {
      const mensaje = await mensajeService.enviarMensaje(req.body);
      res.status(201).json(mensaje);
    } catch (error) {
      res.status(500).json({ message: 'Error enviando el mensaje', error });
    }
  }

  // hacer el listado de mensajes
  async obtenerMensajes(req: Request, res: Response) {
    try {
      const mensajes = await mensajeService.obtenerMensajes(req.params.userId);
      res.status(200).json(mensajes);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo los mensajes', error });
    }
  }

   // hacer el listado de los mensajes que no se han leido
   async obtenerMensajesNoLeidos(req: Request, res: Response) {
    try {
      const mensajes = await mensajeService.obtenerMensajesNoLeidos(req.params.userId);
      res.status(200).json(mensajes);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo mensajes no leídos', error });
    }
  }

// Operacions CRUD para la parte de gestión de etiquetas
async crearEtiqueta(req: Request, res: Response) {
    try {
      const mensaje = await mensajeService.crearEtiqueta(req.params.id, req.body.etiqueta);
      res.status(200).json(mensaje);
    } catch (error) {
      res.status(500).json({ message: 'Error creando etiqueta', error });
    }
  }

  async obtenerEtiquetas(req: Request, res: Response) {
    try {
      const etiquetas = await mensajeService.obtenerEtiquetas(req.params.id);
      res.status(200).json(etiquetas);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo etiquetas', error });
    }
  }

  async eliminarEtiqueta(req: Request, res: Response) {
    try {
      const mensaje = await mensajeService.eliminarEtiqueta(req.params.id, req.body.etiqueta);
      res.status(200).json(mensaje);
    } catch (error) {
      res.status(500).json({ message: 'Error eliminando etiqueta', error });
    }
  }
}

export const mensajeController = new MensajeController();

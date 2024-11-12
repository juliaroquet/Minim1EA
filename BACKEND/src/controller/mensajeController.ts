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

  async obtenerMensajes(req: Request, res: Response) {

    //obtencion del mensaje
    try {
      const mensajes = await mensajeService.obtenerMensajes(req.params.userId);
      res.status(200).json(mensajes);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo los mensajes', error });
    }
  }

  async gestionarEtiquetas(req: Request, res: Response) {
    try {
      const mensaje = await mensajeService.crearEtiqueta(req.params.id, req.body.etiquetas);
      res.status(200).json(mensaje);
    } catch (error) {
      res.status(500).json({ message: 'Error gestionando etiquetas', error });
    }
  }
}

export const mensajeController = new MensajeController();

import { Request, Response } from 'express';
import { mensajeService } from '../services/mensajeService';

// Obtener todos los mensajes de un usuario
export const obtenerMensajes = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const mensajes = await mensajeService.obtenerMensajes(userId);
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los mensajes' });
  }
};

// Obtener los mensajes no leídos de un usuario
export const obtenerMensajesNoLeidos = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const mensajes = await mensajeService.obtenerMensajesNoLeidos(userId);
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los mensajes no leídos' });
  }
};

// Marcar un mensaje como leído
export const marcarComoLeido = async (req: Request, res: Response) => {
  try {
    const { mensajeId } = req.params;
    const mensaje = await mensajeService.marcarComoLeido(mensajeId);
    res.json(mensaje);
  } catch (error) {
    res.status(500).json({ message: 'Error al marcar el mensaje como leído' });
  }
};

// Crear una nueva etiqueta
export const crearEtiqueta = async (req: Request, res: Response) => {
  try {
    const { mensajeId } = req.params;
    const { etiqueta } = req.body;
    const mensaje = await mensajeService.crearEtiqueta(mensajeId, etiqueta);
    res.json(mensaje);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la etiqueta' });
  }
};

// Eliminar una etiqueta
export const eliminarEtiqueta = async (req: Request, res: Response) => {
  try {
    const { mensajeId } = req.params;
    const { etiqueta } = req.body;
    const mensaje = await mensajeService.eliminarEtiqueta(mensajeId, etiqueta);
    res.json(mensaje);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la etiqueta' });
  }
};


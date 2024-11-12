import { Request, Response } from 'express';
import { mensajeService } from '../services/mensajeService';

// Obtener todos los mensajes de un usuario
export const obtenerMensajes = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params; // Obtener el userId de los parámetros de la URL
    const mensajes = await mensajeService.obtenerMensajes(userId); // Llamar al servicio para obtener los mensajes
    res.json(mensajes); // Enviar los mensajes como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los mensajes' }); // En caso de error, devolver un mensaje de error
  }
};

// Obtener los mensajes no leídos de un usuario
export const obtenerMensajesNoLeidos = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params; // Obtener el userId de los parámetros de la URL
    const mensajes = await mensajeService.obtenerMensajesNoLeidos(userId); // Llamar al servicio para obtener los mensajes no leídos
    res.json(mensajes); // Enviar los mensajes como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los mensajes no leídos' }); // En caso de error, devolver un mensaje de error
  }
};

// Marcar un mensaje como leído
export const marcarComoLeido = async (req: Request, res: Response) => {
  try {
    const { mensajeId } = req.params; // Obtener el mensajeId de los parámetros de la URL
    const mensaje = await mensajeService.marcarComoLeido(mensajeId); // Llamar al servicio para marcar el mensaje como leído
    res.json(mensaje); // Enviar el mensaje actualizado como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al marcar el mensaje como leído' }); // En caso de error, devolver un mensaje de error
  }
};

// Crear una nueva etiqueta en un mensaje
export const crearEtiqueta = async (req: Request, res: Response) => {
  try {
    const { mensajeId } = req.params; // Obtener el mensajeId de los parámetros de la URL
    const { etiqueta } = req.body; // Obtener la etiqueta desde el cuerpo de la solicitud
    const mensaje = await mensajeService.crearEtiqueta(mensajeId, etiqueta); // Llamar al servicio para agregar la etiqueta
    res.json(mensaje); // Enviar el mensaje con la nueva etiqueta como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la etiqueta' }); // En caso de error, devolver un mensaje de error
  }
};

// Obtener todas las etiquetas de un mensaje
export const obtenerEtiquetas = async (req: Request, res: Response) => {
  try {
    const { mensajeId } = req.params; // Obtener el mensajeId de los parámetros de la URL
    const etiquetas = await mensajeService.obtenerEtiquetas(mensajeId); // Llamar al servicio para obtener las etiquetas
    res.json(etiquetas); // Enviar las etiquetas como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las etiquetas' }); // En caso de error, devolver un mensaje de error
  }
};

// Actualizar una etiqueta de un mensaje
export const actualizarEtiqueta = async (req: Request, res: Response) => {
  try {
    const { mensajeId } = req.params; // Obtener el mensajeId de los parámetros de la URL
    const { etiquetaAntigua, etiquetaNueva } = req.body; // Obtener la etiqueta antigua y la nueva desde el cuerpo de la solicitud
    const mensaje = await mensajeService.actualizarEtiqueta(mensajeId, etiquetaAntigua, etiquetaNueva); // Llamar al servicio para actualizar la etiqueta
    res.json(mensaje); // Enviar el mensaje actualizado como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la etiqueta' }); // En caso de error, devolver un mensaje de error
  }
};

// Eliminar una etiqueta de un mensaje
export const eliminarEtiqueta = async (req: Request, res: Response) => {
  try {
    const { mensajeId } = req.params; // Obtener el mensajeId de los parámetros de la URL
    const { etiqueta } = req.body; // Obtener la etiqueta desde el cuerpo de la solicitud
    const mensaje = await mensajeService.eliminarEtiqueta(mensajeId, etiqueta); // Llamar al servicio para eliminar la etiqueta
    res.json(mensaje); // Enviar el mensaje actualizado como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la etiqueta' }); // En caso de error, devolver un mensaje de error
  }
};

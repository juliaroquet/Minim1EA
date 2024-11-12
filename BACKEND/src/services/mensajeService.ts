import Mensaje, { IMensaje } from '../models/mensaje';
import { IUsuario } from '../models/usuario';

export class MensajeService {
  // Apartado para enviar mensaje
  async enviarMensaje(data: Partial<IMensaje>) {
    const mensaje = new Mensaje(data);
    return await mensaje.save();
  }

  // Obtención de mensajes para un usuario (por destinatario)
  async obtenerMensajes(userId: string) {
    // Buscamos todos los mensajes donde el destinatario sea el usuario con `userId`
    return await Mensaje.find({ destinatario: userId })
      .populate('remitente', 'nombre email') 
      .populate('destinatario', 'nombre email') 
      .exec();
  }

  // Obtener los mensajes no leídos de un usuario
  async obtenerMensajesNoLeidos(userId: string) {
    return await Mensaje.find({ destinatario: userId, leido: false })
      .populate('remitente', 'nombre email') 
      .exec();
  }

  // Marcar un mensaje como leído
  async marcarComoLeido(mensajeId: string) {
    return await Mensaje.findByIdAndUpdate(
      mensajeId,
      { leido: true }, 
      { new: true } 
    ).populate('remitente', 'nombre email'); // campos del remitente
  }

  // Crear una etiqueta para un mensaje
  async crearEtiqueta(mensajeId: string, etiqueta: string) {
    return await Mensaje.findByIdAndUpdate(
      mensajeId,
      { $addToSet: { etiquetas: etiqueta } }, // Añadir la etiqueta si no existe
      { new: true }
    );
  }

  // Obtener las etiquetas de un mensaje
  async obtenerEtiquetas(mensajeId: string) {
    const mensaje = await Mensaje.findById(mensajeId).exec();
    return mensaje?.etiquetas || []; // para devolver etiquetas
  }

  // Eliminar una etiqueta de un mensaje
  async eliminarEtiqueta(mensajeId: string, etiqueta: string) {
    return await Mensaje.findByIdAndUpdate(
      mensajeId,
      { $pull: { etiquetas: etiqueta } }, // Eliminar la etiqueta
      { new: true }
    );
  }
}

export const mensajeService = new MensajeService();


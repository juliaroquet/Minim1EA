import Mensaje, { IMensaje } from '../models/mensaje';

export class MensajeService {
  
  //apartado para enviar mensaje  
  async enviarMensaje(data: Partial<IMensaje>) {
    const mensaje = new Mensaje(data);
    return await mensaje.save();
  }


  //obtención del mensaje
  async obtenerMensajes(userId: string) {
    return await Mensaje.find({ destinatario: userId }).populate('remitente').exec();
  }
  
  // en caso que tengamos un mensaje no leido 
  async obtenerMensajesNoLeidos(userId: string) {
    return await Mensaje.find({ destinatario: userId, leido: false }).populate('remitente').exec();
  }

  // para cuando hayamos leido el mensaje se pueda hacer un update
  async marcarComoLeido(mensajeId: string) {
    return await Mensaje.findByIdAndUpdate(mensajeId, { leido: true }, { new: true });
  }

  //apartado para gestionar etiquetas con las operaciones de CRUD
  async crearEtiqueta(mensajeId: string, etiqueta: string) {
    return await Mensaje.findByIdAndUpdate(
      mensajeId,
      { $addToSet: { etiquetas: etiqueta } },
      { new: true }
    );
  }
  async obtenerEtiquetas(mensajeId: string) {
    const mensaje = await Mensaje.findById(mensajeId).exec();
    return mensaje?.etiquetas || [];
  }

  async eliminarEtiqueta(mensajeId: string, etiqueta: string) {
    return await Mensaje.findByIdAndUpdate(
      mensajeId,
      { $pull: { etiquetas: etiqueta } },
      { new: true }
    );
  }
} 


export const mensajeService = new MensajeService();

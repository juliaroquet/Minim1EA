import mongoose, { Schema, Document } from 'mongoose';
import { IUsuario } from './usuario'; // Asegúrate de que este archivo esté en la misma carpeta o usa la ruta adecuada

// Interfaz de Mensaje
export interface IMensaje extends Document {
  remitente: mongoose.Schema.Types.ObjectId | IUsuario; // Relación con el Usuario
  destinatario: mongoose.Schema.Types.ObjectId | IUsuario; // Relación con el Usuario
  contenido: string;
  etiquetas: string[];
  fecha: Date;
}

// Esquema de Mensaje
const MensajeSchema: Schema = new Schema({
  remitente: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario',  // Relacionamos con el modelo 'Usuario'
    required: true
  },
  destinatario: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario',  // Relacionamos con el modelo 'Usuario'
    required: true
  },
  contenido: { type: String, required: true },
  etiquetas: { type: [String], default: [] },
  fecha: { type: Date, default: Date.now }
}, { versionKey: false });

// Modelo de Mensaje
export default mongoose.model<IMensaje>('Mensaje', MensajeSchema);



import mongoose, { Schema, Document } from 'mongoose';
import Usuario from './usuario';  // Importar el modelo de Usuario

// Interfaz para el tipo Mensaje
export interface IMensaje extends Document {
  remitente: mongoose.Schema.Types.ObjectId; // Relación con el Usuario
  destinatario: mongoose.Schema.Types.ObjectId; // Relación con el Usuario
  contenido: string;
  etiquetas: string[];
  fecha: Date;
}

// Definición del esquema de Mensaje
const MensajeSchema: Schema = new Schema({
  remitente: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario', // Establece que el campo 'remitente' es una referencia a la colección 'Usuario'
    required: true 
  },
  destinatario: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario', // Establece que el campo 'destinatario' es una referencia a la colección 'Usuario'
    required: true 
  },
  contenido: { 
    type: String, 
    required: true 
  },
  etiquetas: { 
    type: [String], 
    default: [] 
  },
  fecha: { 
    type: Date, 
    default: Date.now 
  }
}, { versionKey: false });

// Modelo de Mensaje
export default mongoose.model<IMensaje>('Mensaje', MensajeSchema);


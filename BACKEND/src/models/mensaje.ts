import mongoose, { Schema, Document } from 'mongoose';

export interface IMensaje extends Document {
  remitente: mongoose.Schema.Types.ObjectId;
  destinatario: mongoose.Schema.Types.ObjectId;
  contenido: string;
  etiquetas: string[];
  fecha: Date;
}

const MensajeSchema: Schema = new Schema({
    remitente: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    destinatario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    contenido: { type: String, required: true },
    etiquetas: { type: [String], default: [] },
    fecha: { type: Date, default: Date.now }
  });

export default mongoose.model<IMensaje>('Mensaje', MensajeSchema);

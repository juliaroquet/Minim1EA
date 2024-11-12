export interface Mensaje {
  id?: string; // ID del mensaje (opcional, ya que puede generarse en el backend)
  contenido: string; // Contenido del mensaje
  remitenteId: string; // ID del remitente
  destinatarioId: string; // ID del destinatario
  fechaEnvio?: Date; // Fecha en que se envió el mensaje
  etiquetas?: string[]; // Lista de etiquetas asociadas al mensaje
  leido?: boolean; // Estado de si el mensaje ha sido leído o no
}

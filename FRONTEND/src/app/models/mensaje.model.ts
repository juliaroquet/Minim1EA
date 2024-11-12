export interface Mensaje {
    id?: string;
    contenido: string;
    remitenteId: string;
    destinatarioId: string;
    fechaEnvio?: Date;
  }
  
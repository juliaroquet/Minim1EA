import { Router } from 'express';
import {
  obtenerMensajes,
  obtenerMensajesNoLeidos,
  marcarComoLeido,
  crearEtiqueta,
  eliminarEtiqueta,
} from './controller/mensajeController';

const router = Router();

router.get('/mensajes/:userId', obtenerMensajes);
router.get('/mensajes/no-leidos/:userId', obtenerMensajesNoLeidos);
router.put('/mensajes/marcar-leido/:mensajeId', marcarComoLeido);
router.put('/mensajes/etiqueta/:mensajeId', crearEtiqueta);
router.delete('/mensajes/etiqueta/:mensajeId', eliminarEtiqueta);

export default router;

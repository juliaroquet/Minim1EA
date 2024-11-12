import { Router } from 'express';
import { mensajeController } from '../controller/mensajeController';

const router = Router();

router.post('/enviar', mensajeController.enviarMensaje);
router.get('/listar/:userId', mensajeController.obtenerMensajes);
router.get('/no-leidos/:userId', mensajeController.obtenerMensajesNoLeidos);

router.post('/etiquetas/:id', mensajeController.crearEtiqueta);
router.get('/etiquetas/:id', mensajeController.obtenerEtiquetas);
router.delete('/etiquetas/:id', mensajeController.eliminarEtiqueta);

export default router;

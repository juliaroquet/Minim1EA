import { Router } from 'express';
import { mensajeController } from '../controller/mensajeController';

const router = Router();

router.post('/enviar', mensajeController.enviarMensaje);
router.get('/listar/:userId', mensajeController.obtenerMensajes);
router.put('/etiquetas/:id', mensajeController.gestionarEtiquetas);

export default router;

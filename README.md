Backend:
-en el backend en vez de usar mensajes he usado etiquetas dado que el enunciado estaba mal escrito y ya lo tenía todo hecho cuando avisaron.
-creada la nueva colección para mensajeria: mensaje.Controller.ts (en src/controller) con los otros controllers ya implementados.
                                            mensaje.ts (en src/models) junto con los otros modelos ya hechos
                                            mensajeRoutes.ts (en src/routes/) junto con los otros ficheros Routes

-he relacionado la nueva coleccion con la que teníamos de Usuario para obtener sus atributos y usarlos.
-tiene 3 datos diferentes: mensaje
                           usuario
                           estado
-tiene implementadas las operaciones CRUD (TODAS)
-tiene implementado para hacer un listado para buscar mensajes no leídos.

La razón por la cual está mezclado mensajes y etiquetas es porque hasta que no llegué al apartado del CRUD todo era con la variable mensaje y luego implementé las etiquetas.

Frontend:
-he creado el modelo mensaje.ts para poder implementar los ejercicios del backend
-he creado una carpeta para el componente MENSAJE nuevo donde están los ficheros html y ts.
-he creado una carpeta services para implementar el nuevo servicio de lógica de comunicación.
-he decidio usar NgModule y por eso tambien he creado una carpeta para implementarlo dentro de app/app/app.module.ts la he llamado así para que me sea más cómodo acordarme de su path para corregir errores
-en el frontend todo lo del mínimo está separado de lo que ya teniamos implementado para que me fuera más fácil.
-estan implementadoas las llamadas al endpoint que he generado.

Partiendo de una estructura básica he hecho todo lo que se nos pedía y no contiene errores. He intentado dejar el codigo amigable y entendible, pero sobretodo ordenado. Usando carpetas existentes o creando de nuevas pero con lógica.

                                            

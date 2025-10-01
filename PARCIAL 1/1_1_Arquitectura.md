# Arquitectura
***
## Arquitectura de una Aplicación (web)

Es la forma en que se organizan y comunican los diferentes componentes que conforman una aplicación web.
Incluye tanto la manera en que interactúan las partes técnicas (cliente, servidor, base de datos, etc.) como la estructura interna del código.
Su objetivo es hacer que la aplicación sea eficiente, escalable, mantenible y segura.
***
## De acuerdo a como se comunican las partes que componen la app
### Cliente-Servidor

El cliente (generalmente un navegador) realiza peticiones y el servidor responde enviando datos o recursos; Es el modelo base de la mayoría de aplicaciones web actuales como Facebook o Gmail.

### Punto a Punto 

No existe un servidor central, ya que los dispositivos actúan al mismo tiempo como clientes y servidores, lo que lo hace útil en aplicaciones descentralizadas como las redes de intercambio de archivos o blockchain, aunque es menos eficiente para grandes plataformas web.
***
## De acuerdo como se organiza el código de la app
### Monolito

Toda la lógica, el frontend, el backend y el acceso a datos están integrados en un solo bloque de código; es fácil de implementar en aplicaciones pequeñas, pero difícil de escalar.

### Capas

Se separa el código en módulos con funciones específicas como la presentación, la lógica de negocio y el acceso a datos, facilitando la organización y el mantenimiento, siendo muy común en sistemas empresariales.

### Microservicios

la aplicación se divide en pequeños módulos independientes que se comunican entre sí, lo cual permite mayor escalabilidad y flexibilidad.

### Serverless

El código se ejecuta directamente en la nube bajo demanda, eliminando la necesidad de gestionar servidores, lo que la hace muy económica y escalable, aunque depende del proveedor.
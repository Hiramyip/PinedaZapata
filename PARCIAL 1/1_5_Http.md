# Http
***
## Qué es Http?
Es un protocolo de comunicacion de nivel de aplicacion que permite la transferencia de información en la world wide web

Funciona como un lenguaje estandar entre navegadores y servidores web para solicitar y entregar recursos como páginas html, imagenes, videos, etc

***
## Cuál es la estructura de una petición?
- **Línea de inicio**: metodo, ruta y versión de http

- **Headers**: información adicional en pares de nombre-valor

- **FTP**: Transferencia de archivos entre equipos

- **Body**: Son los datos enviados en la peticion

***
## Cuáles son los métodos mas usados?
- **GET**: Solicita un recurso

- **POST**: Envía datos al servido

- **PUT**: Reemplaza o crea un recurso

- **DELETE**: Elimina un recurso

- **PATCH**: Modifica parcialmente un recurso
***
## Cuáles son los codigos de estado?
- **1xx**: Son los informativos (ej. 100 Continue)
 
- **2xx**: Son los de exito (ej. 200 OK, 201 Created, 204 No Content)

- **3xx**: Son de redirección (ej. 301 Moved Permanently, 304 Not Modified)

- **4xx**: Son los errores del cliente (ej. 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 405 Method Not Allowed)

- **5xx**: Son los errores del servidor (ej. 500 Internal Server Error, 503 Service Unavailable, 504 Gateway Timeout)
***
## Qué son los encabezados?
Los headers son datos adicionales que acompañan a la petición o respuesta, y van en formato nombre-valor.
Estos se leen antes del contenido principal y sirven para indicar información como tipo de contenido, fecha, servidor, permisos, tamaño, etc

Tienen distintos tipos
- Generales (información global)

- De consulta (sobre lo que se pide)

- De respuesta (sobre lo que responde el servidor)

- De entidad (describen el cuerpo, como tamaño o formato)
***
## Qué es y cuál es la Estructura de una URL?
La URL es la dirección unica que identifica y localiza un recurso en internet, y su estructura es:
- **Protocolo**: http o https

- **Subdominio**: www

- **Dominio**: google

- **TLD**: .com, .org, .edu, .gov

- **Subcarpetas**: directorios dentro del sitio

- **Slug**: nombre de la página o recurso específico

- **Parámetros**: ?id=123
# Tipos de datos de Javascript
***
## Datos primitivos

| Tipo | Descripcion | Ejemplo |
| --- | --- | --- |
|String| Cadena de texto |"Hola"|
|Number|Números enteros/decimales|42, 3.14, -7|
|BigInt|Números enteros que superan el limite de Number|123456789012345678901234567890n|
|Boolean|Valor lógico verdadero o falso|true/false|
|Undefined|Variable declarada pero sin valor asignado|let x; // undefined|
|Null|Representa la ausencia intencional de un valor|let x = null;|
|Symbol|Valor usado como identificador|let id = Symbol("id");|

## Datos no primitivos/objetos

| Tipo | Descripcion | Ejemplo |
| --- | --- | --- |
|Object|Colección de pares clave–valor|{ nombre: "Ana", edad: 25 }|
|Array|Lista ordenada de elementos|[1, 2, 3, 4]|
|Function|Bloque de código reutilizable|function saludar() { return "Hola";}|
|Date|Representa fechas y horas|new Date()|
|RegExp|Expresiones regulares para buscar patrones|/hola/i|
|Map / Set / WeakMap / WeakSet|Estructuras especiales para almacenar colecciones de datos|new Map(), new Set()|
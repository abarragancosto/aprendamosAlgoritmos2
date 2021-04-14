# aprendamosAlgoritmos2

Este repositorio contiene la ampliación del proyecto [aprendamosAlgoritmos](https://github.com/abarragancosto/aprendamosAlgoritmos).

En esta ampliación se han realizado las siguientes acciones:
 * En el anterior proyecto únicamente existía un problema a resolver por parte del usuario. En este proyecto se han añadido nuevos problemas divididos en diferentes niveles de dificultad y dentro de cada nivel la skill elige de manera aleatoria un problema u otro. Todo el código de los nuevos problemas es creado con una herramienta llamada [createFiles](https://github.com/abarragancosto/createFiles).
 * En el proyecto aprendamosAlgoritmos existía un problema en la comunicación entre skill y la aplicación Android y es que no existía comunicación 1 a 1, si no que una misma skill podía controlar todas las aplicaciones Android conectadas al webSocket. En este proyecto se ha realizado una introducción de contraseña para que el usuario pueda introducir una clave tanto en la skill como en la aplicación móvil y de esta manera poder tener una conexión 1 a 1.
 * En la primera parte del proyecto, la aplicación móvil era una aplicación Android realizada en Kotlin. En este proyecto se ha realizado una aplicación multiplataforma en Kotlin. De esta manera, con un único código permite ser utilizada en distintas plataformas.
 * Anteriormente, la aplicación móvil tenía almacenadas las imágenes a mostrar. En esta nueva versión de la skill, las imágenes están subidas en la nube y es la skill quién le indica a la aplicación móvil qué imágenes debe mostrar.
 * Por último, se ha añadido persistencia de datos. Ahora, la skill almacena el progreso del usuario en un Bucket de s3

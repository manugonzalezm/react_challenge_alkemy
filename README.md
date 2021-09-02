# Superhero Team - Alkemy Challenge - React JS

  Este proyecto es un challenge para Alkemy Labs. En él se desarrolla una aplicación para crear un equipo de superhéroes consumiendo una API externa (Superhero API) y mostrando diferentes atributos a nivel individual y del equipo consolidado.
  Para ingresar al sitio deberemos autenticarnos. Esto se hace ingresando el email y contraseña que figuran en los placeholders del formulario de Login. Una vez que hacemos el submit se realiza una petición POST a una url provista por Alkemy, obteniendo como respuesta un token si los campos son correctos (de lo contrario se acciona una alerta). Este token se almacena en el localStorage y permitirá acceder a las distintas rutas del sitio, de lo contrario siempre se redirige al formulario de Login.

## Librerías y recursos utilizados: 📚📚
  - Axios (peticiones HTTP)
  - Formik y Yup (validaciones de formularios)
  - React-Bootstrap (estilos y grid responsive)
  - React router (para navegación)

## ¿Qué podemos encontrar? 🌟🔍
  - Validaciones de campos con mensajes personalizados.
  - Redirecciones al validar y hacer submit en los forms.
  - Colores distintivos (verde y rojo) identificando orientación buena o mala del superhéroe.
  - Límites a la cantidad de superhéroes buenos y malos que se pueden agregar (3 y 3 respectivamente).
  - Powerstats, peso y altura promedio del equipo. Las powerstats siempre están ordenadas de mayor a menor identificando las virtudes del equipo.
  - Diseño responsive con bootstrap grid y media queries.
  - Animaciones al renderizar los componentes.
  - Contador de superhéroes restantes y subcontador de buenos y malos en total.
  - Botón de Logout para limpiar el token del localStorage.
  - Prevención de crasheo cuando no se encuentran resultados en la búsqueda de un nuevo héroe. Se muestra un mensaje.

Desarrollado por Manuel Gonzalez Mouriño 👨‍💻

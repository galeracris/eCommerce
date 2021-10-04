Cerveceria1930

Descripción
Proyecto Final para el curso de ReactJS de la academia Coder House (2021). La aplicación permite conectarse con un backend realizado con Firebase. Permite seleccionar ciertos productos, navegar a sus detalles, agregarlos al carrito, poder acceder a él, simular la compra de los productos. Al clickear sobre el botón "finalizar compra", pide llenar un formulario con datos básicos y luego de confirmar se genera un id de orden para el usuario y en firebase se guarda la orden con los productos que compró.

Tecnologías y librerías:

Interfaz realizada con ReactJS - Create React App
Estilos con Bootstrap, Material-UI
Ruteo con React Router Dom
Backend con Firebase
Descargar y correr el proyecto
Una vez clonado o descargado el proyecto, instalar dependencias:

npm install
 "react-dom": "^17.0.2",
 "react-hook-form": "^7.16.1",
 "react-router-dom": "^5.2.1",
 "@emotion/react": "^11.4.1",
 "@material-ui/core": "^4.12.3",
 "@material-ui/icons": "^4.11.2",
 
Correr el servidor:

npm start
Se abre una pestaña del navegador en el puerto 3000:

Sino copiar esta URL y pegarla en el navegador: http://localhost:3000

Backend
**ATENCIÓN** Tiene un backend realizado con Firebase, por si quieren descargar y correr este proyecto, tienen que generar su backend en firebase sino local con data fake. En el archivo .env.example están las variables que deben ir para poder llenarlas con sus datos de Firebase.

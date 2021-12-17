# API
Taller Colaborativo NodeJS para la asignatura de ELECTIVA II - Desarrollo Web

Para poder hacer la configuracion necesito instalar unos modulos :

npm i nodemon -D 
//Modulo que se encarga de subir el servidor y en caso de que se presente un cambio 
no tener que bajar el servidor y volverlo a subir.

npm i express //Modulo express es una implementacion de node que nos permite configurar el servidor.

npm i mongoose -S 
//Modulo que nos permite interactuar con la BD

//Configuracion para que nuestra api corra:
npm run dev

//Una vez ejecutado nuestra app sera escuchada por el puerto 3000

//La estructura de la app que se presenta cuenta con 5 carpetas que son las siguientes:

//controllers => Dentro de esta carpeta controllers voy a encontrar todas las peticiones realizadas y se compone de tres clases que son :

bill.js
detail.js
product.js

//drivers => Dentro de esta carpeta drivers podemos encontrar la conexion con la base de datos mongo el cual se compone de una clase.

mongo-connect.js

//models => Dentro de esta carpeta drivers podemos encontrar los objetos que vayamos a persistir el cual esta compuesto por:

Bill.js
Detail.js
Product.js
ETypeProduct

//src
//tenemos el index.js, que es nuestro punto de entrada
//tenemos el app.js, Es donde establecemos el express y puerto

//routes => Dentro de carpeta routes se encuentran las distintas rutas de las cuales se hacen uso para el consumo de una API

'/getproducts' 
Usando metodo GET podemos obtener la lista de los productos

'/newproduct' 
Usando metodo POST podemos crear un producto de acuerdo a los atributos establecidos

'/deleteproduct/:idProduct' 
Usando metodo DELETE podemos eliminar un producto de acurdo a su ID

'/:idProduct' 
Usando metodo GET podemos obtener el producto de acuerdo al ID. 

'/updateproduct/:idProduct' 
Usando metodo PUT podemos modificar el producto especificando el ID del producto a modificar

'/getDetails'
Usando metodo GET podemos obtener la lista de los detalles
 
'/newDetail'
Usando metodo POST podemos crear un detalle de acuerdo a los atributos establecidos

'/updateDetail/:cant'
Usando metodo PUT podemos modificar el detalle especificando la variable del producto a modificar

'/deleteDetail/:cant'
Usando metodo DELETE podemos eliminar un detalle de acurdo a su cant

'getbills'
Usando metodo GET podemos obtener la lista de las faturas

'/newbill'
Usando metodo POST podemos crear una factura de acuerdo a los atributos establecidos

'/updatebill/:number'
Usando metodo PUT podemos modificar el detalle especificando la variable de la factura a modificar

'/deletebill/:number'
Usando metodo DELETE podemos eliminar una factura de acuerdo a su numero de identificacion




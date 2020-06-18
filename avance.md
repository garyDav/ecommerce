# Ecommerce

## Ramas en git

Estando en la rama master.

```shell
git add .
git commit -m "new rama"
git checkout -b newRama
git push origin newRama
git checkout master
git push origin master

git checkout newRama
git merge master
```

### 01BasicStructure

Estructura básica de un proyecto en NodeJS, Express, Template engine (Pug) y MongoDB.

#### Comandos:

```shell
mkdir ecommerce
cd ecommerce
npm init -y
npm i -S express
npm i -S pug
npm i -D nodemon
```

#### Archivos añadidos:

- package.`json`
- index.`js`
- .`gitignore`
- avance.`md`

#### Archivos acualizados:

- index.`js`
- package.`json`

---

### 02PugTemplateEngine

Usando Pug como Template Engine.

#### Archivos añadidos:

- ./routes/products.`js`
- ./views/products.`pug`

#### Archivos acualizados:

- index.`js`

---

### 03ImplementBulmaInPug

Implementando el framework Bulma en el Template Engine "Pug".

Bulma solo tiene CSS, lo que lo hace muy liviano a comparación de Bootstrap.

#### Archivos añadidos:

- ./views/footer.`pug`
- ./views/navbar.`pug`
- ./views/layout.`pug`

#### Archivos acualizados:

- ./views/products.`pug`

---

### 04StaticFiles

Implementando archivos estáticos.

#### Archivos añadidos:

- ./public/assets/main.`css`
- ./public/images/hero-bg.`jpg`
- ./public/logo/octolion-white@2x.`png`
- ./public/logo/octolion@2x.`png`
- ./public/favicon.`png`

#### Archivos acualizados:

- index.`js`
- ./views/layout.`pug`
- ./views/products.`pug`
- ./views/footer.`pug`
- ./views/navbar.`pug`

---

### 05API_REST-FULL

Implementando la anatomía para una API REST-FULL.

REST, estilo de arquitectura para Web services, no es un estandar pero si existe una especificación por Roy Fielding cofundador de Apache, HTTP Server y el director de Apache Software Fundation, y actualmente trabaja para Abode. Consiste en el envío y recivimiento de archivos `json` y `XML`, utiliza HTTP Verbs explícitamente (GET, POST, DELETE, etc...), también tiene un patrón de URI y está basado en directorios para las rutas.

![HTTP Verbs](./img/verbs.png)

![API Verbs](./img/api-verbs.png)

#### Archivos añadidos:

- ./routes/api/products.`js`
- ./utils/mocks/products.`js`

#### Archivos acualizados:

- index.`js`
- ./routes/products.`js`

---

### 06ServiceLayer

Implementando capa de servicio.

Veremos una aquitectura que está basado en MVC.

La arquitectura MVC se quedó corto, autores como Taylor Otwell creador de Laravel, habla de que no es suficiente, MVC debería ser llamado: Separación de Problemas.

Nuestro "Modelo" es parte del paquete "Librerías", este paquete es básicamente el que se encarga de conectarse con librerías externas, es decir: Base de datos, Base de datos de otros servicios, y otras APIs. La "Vista" realmente está representada por los datos que enviamos o recivimos que nos envía el "Controlador", la función de este "Controlador" es simplemente recivir y enviar datos a la "Vista". En éste caso nuestro "Controlador" está representado por los Middlewares y Router que implementamos, este "Controlador" también se encargan de las API que en este caso reciven y envían JSON. Y los **Servicios** es el corazón de nuestra aplicación, los servicios se encargan, no solo de llamar a las "Librerías", si no llamar a otros **Servicios**, básicamente la **Lógica de Negocios** centra en esta parte.

Explicando el flujo: Sea que reciva una llamada por una ___View___ o un ___API___ el ___Controllers___ recive ésta información y su única tarea es pasarle ésta información a los ___Services___, éstos Servicios deciden que hacer con esto, ya sea llamar a ótros Servicios, si van aplicar una Logica de Negocios, si van aplicar Reglas de Seguridad, etc., y cuándo yá tengan claro eso, ésos Servicios llaman a las ___Libraries (Lib)___, la lógica que deberían tener las Librerías es exclusívamente para el consumo de Datos, puede que llame a las Librerías de MongoDB, en Firebase, ó para llamar a otra API que séa posible. Ésto es básicamente la arquitectura.

![Capas MVC](./img/MVC.png)

#### Comandos:

```shell
npm i -S body-parser
```

Para desinstalar una librería de nuestro package.`json`.

```shell
npm uninstall -S body-parse
```

#### Archivos añadidos:

- ./services/products.`js`

#### Archivos acualizados:

- ./routes/api/products.`js`
- ./routes/products.`js`
- index.`js`

---

### 07RecappingTheProject

Recapitulando el proyecto, cambiamos la estructura del proyecto y añadimos comentarios.

#### Archivos acualizados:

- index.`js`
- ./routes/views/products.`js`
- ./routes/api/products.`js`

---

### 08MongoDBconnectionExpress

Cómo conectarse a una instancia de MongoDB usando `mLab`, es un servicio de base de datos que nos ofrece conexiones a MongoDB, para ello lo que tenemos que hacer es:

* Crear una Cuenta.
* Crear una Base de Datos.
* Crear un usuario.

Es importante que las credenciales de la cuenta de `mLab` las creemos usando aplicativos como LastPass o 1Password.

Es importante que nuestro archivo `.env` no exista en nuestro repositorio de `github`, porque ahí tendremos toda la información necesaria, para conectarnos a nuestra `BD`.

Actualmente `mlab` es parte de `MongoDB`, así que con nuestras credenciales ya creadas accedemos a `mongodb.com`, una vez dentro creamos un Cluster gratuino, cambiamos el nombre `Cluster0` por cualquiera, en mi caso será `ggary`.

#### Configurando nuestro Cluster

1. `Crear usuario`, en la parte del menú, accedemos a `Security->Database Access`, agregamos un nuevo usuario de la `BD`, en mi caso el usuario es `mgary`, estas credenciales lo usaremos en el archivo `.env`.

2. `IP Address`, en la parte del menú, accedemos a `Security->Network Access`, añadimos un `IP Address`, pulsamos `ADD CURRENT IP ADDRESS`, nos genera una IP `0.0.0.0/0`, por medio de esta lista de IP Addresses accedemos a nuestro Cluster.

3. `BD`, en la parte del menú, accedemos a `Atlas->Clusters`, nos aparecerá una lista de nuestros Clusters, en la que creamos precionamos `COLLECTIONS`, y creamos nuestra base de datos, para este proyecto será `octolion`, con la colección `products`.

#### Conectarse a nuestra `BD` del Cluster

* Conectarse por `mongo shell`, en mi caso la versión `4.2.5`.

![shell-1](./img/shell/shell-1.png)

![shell-2](./img/shell/shell-2.png)

![shell-3](./img/shell/shell-3.png)

Mi cadena de coneccción: `mongo "mongodb+srv://ggary-dy8z2.mongodb.net/test"  --username mgary`.

![shell-4](./img/shell/shell-4.png)

Ingresamos la contraseña de nuestro usuario de la `BD`.

![shell-5](./img/shell/shell-5.png)

Mostramos las `BD`.

![shell-6](./img/shell/shell-6.png)

* Conectarse por Studio 3T:

![studio-0](./img/studio3T/studio-0.png)

![studio-1](./img/studio3T/studio-1.png)

![studio-2](./img/studio3T/studio-2.png)

Al copiar la cadena de conección: `mongodb+srv://mgary:<password>@ggary-dy8z2.mongodb.net/test`.

Añadimos la contraseña del usuario `ggary` y pegamos en Studio 3T: `New Connection->From URI...`.

![studio-3](./img/studio3T/studio-3.png)

![studio-4](./img/studio3T/studio-4.png)

![studio-5](./img/studio3T/studio-5.png)

No olvidemos cambiar por la contraseña correcta.

![studio-6](./img/studio3T/studio-6.png)

![studio-7](./img/studio3T/studio-7.png)

Todos estos datos anteriores debería hallar por defecto, una vez terminado, precionamos en `Test Connection` para asegurarnos que la conección tiene éxito.

![studio-8](./img/studio3T/studio-8.png)

![studio-9](./img/studio3T/studio-9.png)

Como la conección fue exitosa nos muestra las `BD` de nuestro Cloud.

![studio-10](./img/studio3T/studio-10.png)

* Conectarse por Robo 3T:

![robo-1](./img/robo3T/robo-1.png)

![robo-2](./img/robo3T/robo-2.png)

Editamos `Name`, en nuestro caso pondré `Octolion`.

![robo-3](./img/robo3T/robo-3.png)

![robo-4](./img/robo3T/robo-4.png)

![robo-5](./img/robo3T/robo-5.png)

* Conectarse por MongoDB Compass:

![compass-1](./img/compass/compass-1.png)

No olvidemos cambiar la contraseña.

![compass-2](./img/compass/compass-2.png)

---

### 09ServicesWithMongoDB

Creamos un archivo de configuración `.env.example` para que el desarrollador cree su propio archivo `.env` lo cual no debe ser añadido al repositorio, luego realizamos la conección a nuestro mongoDB de nuestro Cloud, por último comprobamos listando la colección de `products`.

#### Comandos:

```shell
npm i -S dotenv
npm i -S mongodb
```

#### Archivos añadidos:

- ./.`env.example`
- ./.`env`
- ./config/index.`js`
- ./lig/mongo.`js`

#### Archivos acualizados:

- ./avance.`md`
- ./.`gitignore`
- ./services/products.`js`

---

### 10ImplementingCRUD

Implementamos acciones CRUD de mongo DB y lo utilizamos en nuetro servicio, para realizar la prueba utilizamos `postman`.

![CRUD-MongoDB](./img/CRUD-MongoDB.png)

#### Archivos acualizados:

- ./avance.`md`
- ./lib/mongo.`js`
- ./services/products.`js`

---

### 11Middleware

Es nada más una función, que tiene tiene tres argumentos:

* El `request` object
* El `response` object
* Y un Callback llamado `next`, que cuando se invoca llama al siguiente middleware.

Piensen en un middleware como una serie de capas en un `request`.

#### ¿Para que sirve?

Para hacer modificaciones al `request` y al `response` object, podemos hacer cosas como validaciones, manejo de errores, etc...

Pero lo más importante del middleware es, siempre llamar a la función `next()`

![Middleware](./img/middleware.png)

#### Tipos de Middleware

![Middleware](./img/middleware-types.png)

>Ejemplos de cada uno, respectivamente.

* Body-parser: cuando lo agregamos a nuestra aplicación, lo que hace es: interceptar el `request` verificar que tenga un cuerpo (`Body`) y si necesita ser formateado a `json`, y aplicar lo necesario para que funcione.

* Router aplicadas a nuestras API o a nuestras Vistas "`routes/api`" "`routes/views`".

* Express-static, por que se usa con `app.use()`.

* Integrados con Express.

* Lo veremos en el siguiente apartado.

#### Archivos acualizados:

- ./avance.`md`

---

### 12ErrorsWithMiddlewares

Las mejores formas de manejar errores en express es usando un middleware.

![ErrorMiddleware](./img/error-middleware.png)

#### Archivos añadidos:

- ./utils/middlewares/errorsHandlers.`js`
- ./views/error.`pug`

#### Archivos acualizados:

- ./avance.`md`
- ./routes/api/products.`js`
- ./routes/views/products.`js`
- ./index.`js`

---

### 13ValidationWithMiddlewares

Evitamos que nos envíen a nuestros **EndPoints** datos que no corresponden al **esquema** que tenemos.

Implementaremos una función de tipo **Clusure**.

![FunctionClosure](./img/function-closure.png)

El `schema` es simplemente las reglas, de como deben ser nuestros datos, como el tipo de dato en un campo o si es requerido, o no, etc.

En `check` diremos que parte del `request` vamos a validar, por defecto es `body`.

Luego veremos como utilizar `joi` para nuestro middleware de validación, y como utilizar `boom` para nuestros middlewares de errores.

#### Archivos acualizados:

- ./avance.`md`

---

### 14JoiAndBoom

Son librerías que vienen del ecosistema de **HapiJS**.

Joi, es básicamente un validador de esquemas de objetos.

Boom, nos permite enviar errores de una manera más agradable.

Una vez implementado `joi` realizamos pruebas:

![Validation-POST-Postman](./img/validation/create-schema.png)

![Validation-PUT-ID-Postman](./img/validation/id-schema.png)

#### Comandos:

```shell
npm i -S joi
npm i -S boom
```

#### Archivos añadidos:

- `joi` ./utils/schemas/products.`js`
- `boom` ./utils/isRequestAjaxOrAPI.`js`
- `boom` ./views/404.pug

#### Archivos acualizados:

- ./avance.`md`
- `joi` ./utils/middlewares/validationHandler.`js`
- `joi` ./routes/api/products.`js`
- `boom` ./utils/middlewares/errorsHandlers.`js`
- `boom` ./utils/middlewares/validationHandler.`js`
- `boom` ./index.`js`
- `boom` ./views/error.`pug`

---

### 15Authentication

Implementamos nuestro `access_token`

Para ejecutarlo en Postman accedemos al apartado -> Auth -> TYPE "Basic Auth" -> username: admin -> Password: \*\*\*\*\*\*

![POST token](./img/passport/post-token.png)

Podemos comprobar nuestro `access_token` vamos a la página https://jwt.io/

![JWT.IO](./img/passport/jwt-io.png)

#### JSON Web Tokens

Es un estándar que nos permite representar __claims__ (reclamaciones), que podría ser traducido como peticiones o permisos entre dos partes, un JSON Web token tiene las siguientes partes:

![JWT](./img/passport/jwt.png)

El __Header__ lo que incluye, cuál fue el algoritmo con el que se firmó y si el tipo de token es JSON Web token.

El __Payload__ normalmente tiene información que queremos compartir entre esas partes, éstos son los claims, __sub__ generalmente hace parte a la identificación del usuario, debemos tener mucho cuidado de no incluir información sencible, porque esto puede ser facilmente decodificado, __iat__ es cuándo se genero el token "el tiempo".

El __Signature__ (firma), generalmente se hace codificando el Header concatenando con un punto, más el payload y firmándolo con nuestro string secreto.

Si por alguna razón cambian el __payload__ o cambian el __header__, para simular un token con permisos extras, como la firma siempre estará contruida basada en el __header__ y el __payload__, dará invalido.

#### Asegurando nuestra API con JWTs

Para esto debemos crear una nueva estrategia `utils->auth->strategies->jwt.js`, por medio de este archivo comprobaremos si el JWT está bien firmado, y obtendremos la información del usuario de él.

Luego nos toca incluir ésta estrategia en nuestro end-point, para así asegurar nuestras rutas de actualizar producto y eliminar.

![Unauthorized](./img/passport/unauthorized.png)

![Access Token](./img/passport/access_token.png)

![Authorizarion](./img/passport/authorizarion.png)

#### Comandos:

```shell
npm i -S passport passport-http passport-jwt jsonwebtoken bcrypt
npm i -D chalk
```

#### Archivos añadidos:

- ./scripts/mongo/seed-admin.`js`
- ./utils/auth/strategies/basic.`js`
- ./routes/api/auth.`js`

- ./utils/auth/strategies/jwt.`js`

#### Archivos acualizados:

- ./.`env.example`
- ./.`env`
- ./config/index.`js`
- ./index.`js`

- ./routes/api/products.`js`

---

# Ecommerce

## Ramas en git

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
- `.gitignore`
- avance.`md`

#### Archivos acualizados:

- index.`js`
- package.`json`

---

### 02PugTemplateEngine

Usando Pug como Template Engine

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

Implementando archivos estáticos

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

![HTTP Verbs](https://github.com/garyDav/ecommerce/blob/master/img/verbs.png)

![API Verbs](https://github.com/garyDav/ecommerce/blob/master/img/api-verbs.png)

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

![Capas MVC](https://github.com/garyDav/ecommerce/blob/master/img/MVC.png)

#### Comandos:

```shell
npm i -S body-parser
```

#### Archivos añadidos:

- ./services/products.`js`

#### Archivos acualizados:

- ./routes/api/products.`js`
- ./routes/products.`js`
- index.`js`

---

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

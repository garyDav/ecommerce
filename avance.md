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
- ./routes/products.`js`

---

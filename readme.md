# 🚀 Nodepop Project Showcase

¡Bienvenido al universo de **Nodepop**! Este repositorio contiene dos versiones de la aplicación: una clásica con Node.js y otra moderna con React. Ambas están desplegadas y listas para explorar.

---

## 🌐 Enlaces en producción

| Proyecto         | Descripción                                      | Enlace de acceso                                  |
|------------------|--------------------------------------------------|---------------------------------------------------|
| 🟢 Nodepop Web   | Backend con Node.js + Express + MongoDB          | 👉 [kc-jairo.duckdns.org](https://kc-jairo.duckdns.org) |
| 🔵 Nodepop React | Frontend moderno con React + Axios + Hooks       | 👉 [35.174.228.249](http://35.174.228.249)         |

---

## 📦 Tecnologías utilizadas

- **Node.js**, **Express**, **MongoDB**
- **React**, **Vite**, **Axios**
- **Nginx**, **Certbot**, **Ubuntu Server**
- Despliegue automatizado y configuración multi-site HTTPS

---

## 🛠️ ¿Qué puedes hacer?

- Consultar anuncios con filtros avanzados
- Crear, editar y eliminar anuncios
- Navegar desde una SPA rápida y responsiva
- Ver cómo se integran backend y frontend en producción

---

## 🧠 Arquitectura pensada para escalar

Este proyecto está diseñado con enfoque en:
- 🔁 Reusabilidad de componentes
- 🧪 Validaciones automatizadas
- 🔐 Seguridad y HTTPS
- 📁 Versionado y mantenibilidad

---

## ✨ Autor

**Jairo M.**  
Apasionado por la automatización, el diseño escalable y la experiencia del desarrollador.

---

> 💡 Tip: Si quieres ver cómo se configuró el servidor, revisa los bloques Ngin


## 🛍️ NodePop Web

Web interface to manage products for the authenticated user using the NodePop API. It allows you to create, view, and delete products with image uploads and custom tags.

---

## 🚀 Instalación

Install the project dependencies with:

```bash
npm install
 ```

 On first deploy you can use the next commando to initialize the database:

 ```sh
 npm run initDB
 ```

> User to login default

- email: admin@example.com
- password: 1234

> User to login default

- email: user1@example.com
- password: 1234

 ## 🧾 NodePop API

NodePop es una API RESTful diseñada para gestionar productos de usuarios autenticados. Permite crear, consultar, actualizar parcialmente, modificar completamente y eliminar productos, con soporte para carga de imágenes y asignación de etiquetas personalizadas.

### ✨ Funcionalidades principales

- Registro e inicio de sesión con autenticación por token
- CRUD completo para productos con imágenes
- Validación de datos y manejo de errores
- Documentación interactiva con Swagger UI

### 📚 Documentación

Puedes explorar la documentación completa e interactuar con los endpoints desde Swagger UI:

👉 [http://localhost:3000/api-doc/](http://localhost:3000/api-doc/)
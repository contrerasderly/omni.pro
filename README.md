# 🧪 Cypress Automation Project - SauceDemo

Este proyecto contiene pruebas automatizadas end-to-end utilizando **Cypress** 
y el patrón de diseño **Page Object Model (POM)** para el sitio de práctica (https://www.saucedemo.com), un eCommerce simulado.

## 📦 Estructura del proyecto

cypress/
├── e2e/ # Archivos de prueba
│ ├──desktop 
│ ├────loginOnlineStore.cy.js
│ ├────addToCart.cy.js
│ └────modifyCart.cy.js
│ ├──responsive 
│ ├────addToCartResponsive.cy.js
│
├── pages/ # Page Objects (POM)
│ ├──desktop 
│ ├────AddToCartPage.js
│ ├────LoginOnlineStorePage.js
│ └────ModifyCartPage.js

## 🚀 Instalación y ejecución

## Instala las dependencias
npm install

## Abre Cypress en modo interactivo

npx cypress open
## O ejecuta los tests en modo headless:
npx cypress run

## 👤 Credenciales de prueba ingreso exitoso

Usuario:     standard_user
Contraseña:  secret_sauce

## ✅ Pruebas cubiertas
🔐 Login: éxito y fallo

📦 Carrito: agregar productos al carrito

🛒 Carrito: verificar y eliminar productos

💳 Checkout: formulario y confirmación

## 🧱 Tecnologías
Cypress - Testing framework
JavaScript (ES6)
Page Object Model (POM)

## 📌 Notas

Elegí el sitio de pruebas https://www.saucedemo.com porque está diseñado para pruebas de automatización y no requiere registro.
Las tecnologías utilizadas son en las que tengo más experiencia y conocimiento tengo. Además que por la facilidad al configurar y usar, reutilización y menos duplicación de código, escalabilidad, mayor velocidad en desarrollo y mantenimiento.

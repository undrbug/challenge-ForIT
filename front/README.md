# Front Gestión de Tareas (TODO)

Frontend: Interfaz de Usuario para el Gestor de Tareas
Este proyecto es el frontend de una aplicación para gestionar tareas, construida con React y Vite. Se comunica con una API backend para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las tareas.

Requisitos Previos
Antes de ejecutar este frontend, asegúrate de tener:

Node.js (se recomienda la versión LTS) y npm (o yarn) instalados.

La API Backend del Gestor de Tareas ejecutándose. Este frontend depende de que el backend esté accesible en una URL específica. Según la configuración proporcionada, se espera que esté en http://localhost:5000/api.

Instalación
Sigue estos pasos para configurar y ejecutar el frontend localmente:

Clona este repositorio (si no lo has hecho ya como parte del proyecto completo):

git clone https://github.com/undrbug/challenge-ForIT-Front.git

cd challenge-ForIT-Front.git/front 

Instala las dependencias del proyecto:

npm install o yarn install

Crea un archivo .env en la raíz del directorio del frontend. Este archivo es crucial para configurar la URL de la API backend. Añade la siguiente línea:

VITE_API_URL=http://localhost:5000/api

Importante: Asegúrate de que esta URL coincide con la dirección y puerto donde tu API backend está corriendo, seguido del prefijo /api que configuraste. Si tu backend corre en un puerto diferente o tiene un prefijo distinto, ajusta esta línea.

Ejecución de la Aplicación
Una vez que hayas completado los pasos de instalación y te hayas asegurado de que el backend está corriendo y la variable VITE_API_URL en tu .env es correcta, puedes iniciar el servidor de desarrollo del frontend:

npm run dev o yarn dev

El servidor de desarrollo de Vite se iniciará y generalmente estará disponible en http://localhost:5173 (o un puerto similar si el 5173 ya está en uso). La consola te indicará la URL exacta.

Abre tu navegador web y navega a esa dirección para acceder a la aplicación.

Rutas Disponibles
La aplicación frontend utiliza react-router-dom para manejar la navegación y tiene las siguientes rutas principales:

/: Muestra la lista de todas las tareas obtenidas del backend.

/create: Muestra el formulario para crear una nueva tarea.

/edit/:id: Muestra el formulario precargado con los datos de una tarea específica (identificada por :id en la URL) para su edición.

Construcción para Producción
Para generar una versión optimizada del frontend para despliegue en un servidor web, puedes usar el siguiente comando:

npm run build o yarn build

Esto creará una carpeta dist (o similar, dependiendo de la configuración de Vite) en la raíz del proyecto, conteniendo los archivos estáticos (HTML, CSS, JavaScript, etc.) listos para ser servidos.

Puedes previsualizar la construcción localmente con:

npm run preview o yarn preview

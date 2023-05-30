This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introducción

El proyecto tiene como objetivo abordar la necesidad de automatizar el proceso de carga de currículums en plataformas de búsqueda de empleo, centrándose específicamente en Infojobs. Para facilitar la experiencia de los usuarios y ahorrarles tiempo, se ha desarrollado una funcionalidad que extrae la educación y experiencia laboral de un currículum en formato PDF y lo formatea de acuerdo a los estándares de Infojobs.

## Descripción

La necesidad de registrarse y completar manualmente los campos de experiencia laboral y educación en diferentes plataformas de búsqueda de empleo puede ser un proceso tedioso y demorado. El proyecto resuelve este problema al automatizar el proceso, permitiendo a los usuarios cargar su currículum en formato PDF o cualquier otro, y transformando automáticamente la información en un formato compatible con Infojobs.

## Tecnologías utilizadas

- Next.js 13
- TypeScript 5.0.4
- Tailwind CSS 3.3.2
- ConvertAPI 1.11.2
- OpenAI 3.2.1

## Características y funcionalidades

- [x] Extracción de Educación y Experiencia Laboral: El sistema es capaz de analizar un currículum y extraer automáticamente la educación y la experiencia laboral del candidato.
- [x] Generación de Descripciones Asociadas: Si el currículum no incluye descripciones detalladas de tareas o educación, el sistema generará automáticamente descripciones relevantes para cada experiencia o nivel educativo.
- [x] Extracción de Hard Skills y Soft Skills: Además de la educación y experiencia laboral, se extraen y clasifican automáticamente las habilidades técnicas (hard skills) y habilidades interpersonales (soft skills) asociadas al currículum.
- [x] Adaptación de Datos a Infojobs: El proyecto se encarga de adaptar automáticamente la información extraída del currículum al formato requerido por Infojobs para una carga sin problemas en el perfil del usuario.

## Instalación

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona el repositorio desde GitHub.
3. Navega hasta el directorio del proyecto en la línea de comandos.
4. Ejecuta el siguiente comando para instalar las dependencias: **npm install**.
5. Una vez instaladas las dependencias, puedes ejecutar el proyecto con el siguiente comando: **npm run dev**.
6. Accede a la aplicación en tu navegador utilizando la URL proporcionada en la línea de comandos.

## Licencia

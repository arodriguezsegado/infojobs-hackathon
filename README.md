This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introducción

La idea principal de mi proyecto es desarrollar una funcionalidad que permita extraer de manera automatizada la información relacionada con la educación y la experiencia laboral de un currículum. El objetivo es formatear y cargar esta información en el perfil del usuario, siguiendo los estándares de plataformas de búsqueda de empleo como InfoJobs. El propósito es facilitar y agilizar el proceso de registro en estas plataformas, evitando que los usuarios tengan que completar manualmente cada campo del formulario. Para lograrlo, he utilizado tecnologías como Next.js, junto con las API de InfoJobs y OpenAI.

## Descripción

El proyecto se centra en la automatización del proceso de extracción de información relevante de un currículum y su adaptación para su carga en el perfil de usuario en InfoJobs. Utilizando la tecnología Next.js y aprovechando las capacidades de las API de InfoJobs y OpenAI, he desarrollado una solución que permite extraer de manera precisa la educación y la experiencia laboral del currículum.

Una de las características destacadas es la capacidad de generar descripciones asociadas a las tareas desempeñadas en la experiencia laboral o en la educación, en caso de que no se proporcione una descripción en el currículum original. Además, el sistema extrae las habilidades (soft y hard skills) asociadas a la educación y experiencia laboral del usuario.

Es importante mencionar que el proyecto actualmente se encuentra en una etapa de desarrollo inicial. Hasta el momento, se ha completado la funcionalidad de extracción de información del currículum y su adaptación para su posterior carga en InfoJobs. Sin embargo, la funcionalidad de carga en el perfil del usuario aún no está habilitada debido a dificultades técnicas surgidas por el límite de prompts de la API de OpenAI y la necesidad de ajustar los datos extraídos a los requisitos específicos de InfoJobs.

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
- [ ] Adaptación de Datos a Infojobs: El proyecto se encarga de adaptar automáticamente la información extraída del currículum al formato requerido por Infojobs para una carga sin problemas en el perfil del usuario.

## Instalación

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona el repositorio desde GitHub.
3. Navega hasta el directorio del proyecto en la línea de comandos.
4. Ejecuta el siguiente comando para instalar las dependencias: **npm install**.
5. Una vez instaladas las dependencias, puedes ejecutar el proyecto con el siguiente comando: **npm run dev**.
6. Accede a la aplicación en tu navegador utilizando la URL proporcionada en la línea de comandos.

## Licencia

El proyecto se distribuye bajo una licencia de código abierto y libre uso.

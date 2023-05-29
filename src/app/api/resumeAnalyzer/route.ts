import { getCategories } from "@/app/services/getCategories";
import { getProfessionalLevels } from "@/app/services/getProfesionalLevels";
import { getStudies } from "@/app/services/getStudies";
import { getSubcategories } from "@/app/services/getSubcategories";
import { NextResponse } from "next/server";
import { Configuration, ChatCompletionRequestMessageRoleEnum, OpenAIApi } from "openai";

const openaiAccessToken = process.env.OPENAI_ACCESS_TOKEN;
const configuration = new Configuration({ apiKey: openaiAccessToken });
const openai = new OpenAIApi(configuration);

const getInitialMessage = (categories: Array<string>, subcategories: Array<string>, jobLevels: Array<string>, educationLevels: Array<string>): any => {

    const INITIAL_MESSAGES = [
        {
            role: ChatCompletionRequestMessageRoleEnum.System,
            content:
            `Quiero que extraigas los tópicos expriencia laboral y educación de un currículum.
             Quiero que pongas estos datos en un json válido con dos listas workExperiencia y schooling. workExperiencie contendrá objetos con
             las experiencias laborales y schooling objetos con la educación.
             A continuación, te defino los datos que contendrán los objetos del array workExprience y schooling:
                - company: Nombre de la empresa donde se desarrolló la experincia. Máximo 150 caracteres.
                - job: Rol desarrollado en esa experiencia. Máximo 150 caracteres.
                - description: Breve explicación sobre que consistía el papel en esa experiencia. Máximo 4000 caracteres.
                  Si no puedes generar una descripción a partir de los datos proporcionado, crea una que esté relacionada con la experiencia.
                - startingDate: La fecha de inicio de esa experiencia. El formato de fecha debe estar en formato RFC_3339: aaaa-MM-dd.
                - finishingDate: La fecha de fin de esa experiencia. El formato de fecha debe estar en formato RFC_3339: aaaa-MM-dd.
                  Si no tiene fecha de fin, escribe el carácter -.
                - onCourse: Si el candidato todavía está trabajando en esa experiencia profesional. El valor predeterminado es falso.
                - category: Hace referencia al sector donde la empresa desarrolla su actividad económica.
                  Escoge la categoría que guarde mayor relación con la descripción sobre el papel en esa experiencia.
                  El array de categorías es el siguiente: ${categories}.
                - level: Clave de texto que clasifica el nivel profesional para esa experiencia.
                  Escoge uno de los siguientes: ${jobLevels}.
                - subcategories: Escoge una o más subcategorías que guarden relación con la descripción del papel desarrollado en esa experincia y la categoría escogida.
                  Seleccionas las subcategorías de este array: ${subcategories}.
                - skills: Soft y Hard Skills desarrolladas en la experiencia. Definidas como máximo en dos palabras y en español.
                - elementType: Escribe el texto job.
             Definición de los parámetros de los objetos del array schooling:
                - educationLevelCode: Nivel de educación. Tienes que escoger el que esté más relacionado con la educación del siguiente array: ${educationLevels}.
                - courseCode: Especialidad del nivel educativo. Quiero que como máximo contenga tres palabras separadas por el carácter -. 
                  La primera de ellas será el educationLevelCode. Las otras dos tendrán que extraerse a través de la definición. 
                  Por ejemplo: grado-ingenieria-informatica.
                - startingDate: La fecha de inicio de esa experiencia. El formato de fecha debe estar en formato RFC_3339: aaaa-MM-dd.
                - finishingDate: La fecha de fin de esa experiencia. El formato de fecha debe estar en formato RFC_3339: aaaa-MM-dd. 
                  Si el candidato todavía está trabajando en esa experiencia profesional. El valor predeterminado es falso.
                - stillEnrolled: Si el candidato todavía está inscrito en este curso. El valor predeterminado es falso.
                - institutionName: El nombre de la institución donde se realizo la educación.
                - hideEducation: true
                - Description: Breve explicación sobre que se aprendio en este plan educativo. 
                - skills: Soft y Hard Skills desarrolladas ene este plan educativo. Definidas como máximo en dos palabras y en español.
                - elementType: education
            `,
        }
    ];
    return INITIAL_MESSAGES;
}

export async function POST( request: Request) {
  try {
      const requestData = await request.json();

      const categories: Array<Category> = await getCategories();
      const categoriesKeys: Array<string> = categories.filter(category => category.key !== '-').map(category => category.key);

      const subcategories: Array<Subcategory> = await getSubcategories();
      const subcategoriesKeys: Array<string> = subcategories.filter(subcategory => subcategory.key !== '-').map(subcategory => subcategory.key);

      const jobLevels: Array<ProfessionalLevel> = await getProfessionalLevels();
      const jobLevelsKeys: Array<string> = jobLevels.map(jobLevel => jobLevel.key);

      const educationLevels: Array<Study> = await getStudies();
      const educationLevelsKeys: Array<string> = educationLevels.map(educationLevel => educationLevel.key);

      const completion = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [
              ...getInitialMessage(categoriesKeys, subcategoriesKeys, jobLevelsKeys, educationLevelsKeys),
              {
                  role: ChatCompletionRequestMessageRoleEnum.User,
                  content: requestData.resume,
              }
          ]
      })
      
    return NextResponse.json(completion.data.choices[0].message?.content ?? '');
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
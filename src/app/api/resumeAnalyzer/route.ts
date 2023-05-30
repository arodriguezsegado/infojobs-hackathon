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
            `Quiero que analices la educación y experincia laboral y me devuelvas un json válido con un array llamado workExperience, con
             las experiencias laborales, y un array llamado schooling con la educación.
             
             Las experiencias laborales contendrám los siguientes atributos:
                - company: Nombre de la empresa.
                - job: Rol desarrollado en esa experiencia.
                - description: Genera una descripción original en español del desarrollo de la experiencia laboral. Mínimo 20 palabras.
                - startingDate: La fecha de inicio de esa experiencia.
                - finishingDate: La fecha de fin de esa experiencia.
                - onCourse: Si el candidato todavía está trabajando en esa experiencia profesional. El valor predeterminado es falso.
                - category: Selecciona la categoría que guarde mayor relación con la descripción sobre el papel en esa experiencia. El array de categorías es el siguiente: ${categories}.
                - level: Clasifica el nivel profesional para esa experiencia. Selecciona uno de los siguientes: ${jobLevels}.
                - subcategories: Selecciona una o más subcategorías del siguiente: ${subcategories}. Mínimo 1.
                - skills: Soft y Hard Skills desarrolladas en la experiencia. Defínelas en dos palabras como máximo y en español.
                - elementType: job
             
              Los planes educativos tendrán los siguientes atributos:
                - educationLevelCode: Selecciona el nivel educativo adecuado del siguiente array: ${educationLevels}.
                - courseCode: Especialidad del nivel educativo. Por ejemplo: grado-ingenieria-informatica.
                - startingDate: La fecha de inicio de esa experiencia.
                - finishingDate: La fecha de fin de esa experiencia.
                - stillEnrolled: Si el candidato todavía está inscrito en este curso. El valor predeterminado es falso.
                - institutionName: El nombre de la institución.
                - hideEducation: true
                - description: Genera una descripción original en español del plan de estudios. Mínimo 20 palabras.
                - skills: Soft y Hard Skills desarrolladas en este plan educativo. Defínelas en dos palabras como máximo y en español.
                - elementType: education
            `,
        }
    ];
    return INITIAL_MESSAGES;
}

export async function POST( request: Request) {
 
      const requestData = await request.json();

      const categories: Array<Category> = await getCategories();
      const categoriesKeys: Array<string> = categories.filter(category => category.key !== '-').map(category => category.key);

      const subcategories: Array<Subcategory> = await getSubcategories();
      const subcategoriesKeys: Array<string> = subcategories.filter(subcategory => subcategory.key !== '-').map(subcategory => subcategory.key);

      const jobLevels: Array<ProfessionalLevel> = await getProfessionalLevels();
      const jobLevelsKeys: Array<string> = jobLevels.map(jobLevel => jobLevel.key);

      const educationLevels: Array<Study> = await getStudies();
      const educationLevelsKeys: Array<string> = educationLevels.map(educationLevel => educationLevel.key);

    try {
      const completion = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          temperature: 0.7,
          messages: [
              ...getInitialMessage(categoriesKeys, subcategoriesKeys, jobLevelsKeys, educationLevelsKeys),
              {
                  role: ChatCompletionRequestMessageRoleEnum.User,
                  content: requestData.resume,
              }
          ]
      })

    return NextResponse.json(completion.data.choices[0].message?.content ?? '');
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
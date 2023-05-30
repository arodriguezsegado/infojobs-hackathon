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
             `I want you to analyze the education and work experience and return a valid json with an array called workExperience, 
              with work experiences, and an array called schooling with education.
             
              Work experiences will contain the following attributes:
                - company: company name
                - job: role developed in that experience in Spanish
                - description: if there is no description, create a detailed one in Spanish related to the position and category and in Spanish
                - startingDate: start date
                - finishingDate: finish date
                - onCourse: whether the candidate is still working on that professional experience. The default is false
                - category: Select the category that is most closely related to the description on paper in that experience from the following array: ${categories}.
                - level: Classify the professional level for that experience. Select one of the following: ${jobLevels}.
                - subcategories: Select one or more subcategories from the following array that are related: ${subcategories}. Mínimo 1.
                - skills: define them in two words maximum and in Spanish. If there aren't any, create some that are related.
                - elementType: job
             
              Educational plans will have the following attributes:
                - educationLevelCode: select the appropriate educational level from the following array: ${educationLevels}.
                - courseCode: specialty of the educational level in Spanish. For example: grado-ingenieria-informatica.
                - startingDate: start date
                - finishingDate: finish date
                - stillEnrolled: if the candidate is still enrolled in this course. The default is false
                - institutionName: the name of the institution
                - hideEducation: true
                - description: if there is no description, create a detailed one in Spanish related to the educational level and specialty
                - skills: define them in two words maximum and in Spanish. If there aren't any, create some that are related.
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
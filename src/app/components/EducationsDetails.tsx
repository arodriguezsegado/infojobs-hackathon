import { getDateFormattedInText } from "../functions/getDateFormattedInText";

export const EducationDetails = ( { plan }: any) => {

    return (
     
        <div className="mx-4 my-4">
            <div className="p-4 bg-emerald-100">
                <p className="text-sm font-semibold leading-6 text-gray-900">{ plan.institutionName }</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ plan.courseCode }</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ getDateFormattedInText(plan.startingDate, plan.finishingDate, plan.stillEnrolled) }</p>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900 text-wrap">Título</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ plan.educationLevelCode }</p>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900 text-wrap">Especialidad</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ plan.courseCode }</p>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900 text-wrap">Descripción</p>
                <p className="mt-1 h-full text-xs leading-5 text-gray-500">{ plan.description }</p>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900">Conocimientos y tecnologías utilizados</p>
                <div className="flex flex-row gap-2 flex-wrap">
                    {
                        plan.skills.map((skill: string) => {
                            return (
                                <span key={`${skill}`} className="rounded-md bg-gray-50 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-700/10">{ skill }</span>
                            )
                        })
                    }
                </div>
            </div>

        </div>
  
    )
}
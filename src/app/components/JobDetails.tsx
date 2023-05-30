'use client';

import { getDateFormattedInText } from "../functions/getDateFormattedInText";

export const JobDetails = ( { job }: { job: any }) => {

    return (
        <div className="mx-4 my-4">
            <div className="p-4 bg-blue-100">
                <p className="text-sm font-semibold leading-6 text-gray-900">{job.company}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{job.job}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ getDateFormattedInText(job.startingDate, job.finishingDate, job.onCourse) }</p>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900 text-wrap">Nivel</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{job.level}</p>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900 text-wrap">Categoría</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{job.category}</p>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900 text-wrap">Subcategoría</p>
                <div className="flex flex-row gap-2 flex-wrap">
                    {
                        job.subcategories.map((subcategory: string) => {
                            return (
                                <span key={`${subcategory}`} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-700/10">{subcategory}</span>
                            )
                        })
                    }
                </div>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900">Descripción del puesto</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{job.description}</p>
            </div>

            <div className="mt-6">
                <p className="text-sm font-semibold leading-6 text-gray-900">Conocimientos y tecnologías utilizados</p>
                <div className="flex flex-row gap-2 flex-wrap">
                    {
                        job.skills.map((skill: string) => {
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
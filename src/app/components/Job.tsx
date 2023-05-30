'use client';

import { getDateFormattedInText } from "../functions/getDateFormattedInText";

export const Job = ( { index, experience, setDetails, isSelected }: { index: number, experience: Experience, setDetails: any, isSelected: boolean} ) => {
    return (
        <li key={index} className={`hover:bg-blue-50 cursor-pointer p-5 ${isSelected ? 'bg-blue-100' : 'bg-white'}`} onClick={setDetails}>
            <div className="flex gap-x-4 pointer-events-none">
                <div className="min-w-0 flex-auto ">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{ experience.company }</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ experience.job }</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ getDateFormattedInText(experience.startingDate, experience.finishingDate, experience.onCourse) }</p>
                </div>
    
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Experiencia</span>
                </div>
            </div>
        </li>    
    )
}
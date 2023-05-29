'use client';

import { getDateFormattedInText } from "../functions/getDateFormattedInText";

export const Education = ( { index, plan, setDetails, isSelected }: { index: number, plan: Education, setDetails: any, isSelected: boolean } ) => {
    return (
        <li key={index} className={`hover:bg-emerald-50 cursor-pointer p-5 ${isSelected ? 'bg-emerald-100' : 'bg-white'}`} onClick={setDetails}>
            <div className="flex gap-x-4 pointer-events-none">
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900 text-wrap">{plan.institutionName}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{plan.courseCode}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ getDateFormattedInText(plan.startingDate, plan.finishingDate) }</p>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-700/10">Educación</span>
                </div>
            </div>
        </li>
    )
}
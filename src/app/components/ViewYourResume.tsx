'use client';

import { useState, useEffect } from 'react';
import { Job } from './Job';
import { Education } from './Education';
import { JobDetails } from './JobDetails';
import { EducationDetails } from './EducationsDetails';

export const ViewYourResume = ({ resume }: { resume: Array<Experience|Education> }) => {

    const [ resumeElementIndex, setResumeElementIndex ] = useState<any>(0);

    const setDetails = (jobId: Number) => {
        setResumeElementIndex(jobId);
    }

    return (
        <div className="w-5/6 grid grid-cols-1 lg:grid-cols-3 mx-auto gap-2 md:gap-6 pb-28">
            <ul role="list" className="divide-y divide-gray-100 w-full">
                {
                    resume.map(
                        (experience: any, index: number) => {
                            return experience.elementType == 'job'
                                ? <Job key={ index } index={index} experience={ experience } setDetails={() => setDetails(index)} isSelected={ resumeElementIndex === index } />
                                : <Education key={ index } index={index} plan={ experience } setDetails={() => setDetails(index)} isSelected={ resumeElementIndex === index } />
                            
                        }
                        
                    )  
                }
            </ul>
            <div className="h-fit col-span-2 bg-white">
                { 
                    resume[resumeElementIndex].elementType == 'job' 
                        ? <JobDetails job={ resume[resumeElementIndex] } />
                        : <EducationDetails plan={ resume[resumeElementIndex] } />
                }
            </div>
        </div>
    )
}
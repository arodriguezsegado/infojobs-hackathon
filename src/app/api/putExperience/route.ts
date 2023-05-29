import { getResumes } from "@/app/services/getResumes";
import { NextResponse } from "next/server";

const infoJobsToken = process.env.INFOJOBS_TOKEN;
const infojobsAccessToken = process.env.INFOJOBS_ACCESS_TOKEN;

interface ExperienceAPI {
    company:               string;
    job:                   string;
    description:           string;
    startingDate:          Date;
    finishingDate?:        Date;
    staff:                 string;
    reportingTo:           string;
    onCourse:              boolean;
    level:                 string;
    category:              string;
    subcategories:         Array<string>;
}

export async function PUT(request: Request) {
    const resumes = await getResumes();
    const { experience }: { experience: Experience } = await request.json();

    let jobAPI: ExperienceAPI = {
        company: experience.company,
        job: experience.job,
        description: experience.description,
        startingDate: new Date(Date.parse(experience.finishingDate)) ?? new Date(),
        onCourse: experience.onCourse,
        staff: '0',
        reportingTo: 'seleccionar',
        level: experience.level,
        category: experience.category,
        subcategories: [ '-' ],
    }
    
    if(!experience.onCourse) jobAPI = {...jobAPI, finishingDate: new Date(Date.parse(experience.finishingDate)) ?? new Date() }

    const res = await fetch(`https://api.infojobs.net/api/4/curriculum/${resumes[0].code}/experience`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${infoJobsToken}, Bearer ${infojobsAccessToken}`,
          },
          body: JSON.stringify(jobAPI),

        }
      );

    const data = await res.json();
    return NextResponse.json(data);
}
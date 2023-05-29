const infoJobsToken = process.env.INFOJOBS_TOKEN;
const infojobsAccessToken = process.env.INFOJOBS_ACCESS_TOKEN;

export async function getResumes() {

    const res = await fetch(`https://api.infojobs.net/api/2/curriculum`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${infoJobsToken}, Bearer ${infojobsAccessToken}`,
          }
        }
      );

    const data = await res.json();
    return data;
}

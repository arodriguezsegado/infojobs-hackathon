const infoJobsToken = process.env.INFOJOBS_TOKEN;
const infojobsAccessToken = process.env.INFOJOBS_ACCESS_TOKEN;

export async function getCandidate() {
    const res = await fetch(`https://api.infojobs.net/api/6/candidate`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${infoJobsToken}, Bearer ${infojobsAccessToken}`,
          }
        }
      );

    const response = await res.json();

    return response;
}
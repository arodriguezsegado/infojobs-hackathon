const clientId = process.env.CLIENT_ID;
const clientSecretEncoded = process.env.CLIENT_SECRET_ENCODED;
const verificationCode = process.env.VERIFICATION_CODE;

export async function getAccessToken() {

    const res = await fetch(`https://www.infojobs.net/oauth/authorize`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic YzA5MmUyMGIzNjE4NGViNWI0YzJjYTE2ZDc2M2FhNDk6REtxMjZ0ZWJLRHZMTllrcEdvRER6Q240d1ZsbDhqN0ZwNlZ1K0oxQkdLOEorYTRtb04=`,
        },
        body: JSON.stringify({
          grant_type: 'authorization_code',
          client_id: clientId,
          client_secret: clientSecretEncoded,
          code: verificationCode,
          redirect_uri: 'http://www.infojobs.net/core/oauth2vc/index.xhtml',
        }),
      }
    );

    const response = await res.json();
    return response;
}
export const getCategories = async() => {
    const res = await fetch(`https://api.infojobs.net/api/1/dictionary/category`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic YzA5MmUyMGIzNjE4NGViNWI0YzJjYTE2ZDc2M2FhNDk6REtxMjZ0ZWJLRHZMTllrcEdvRER6Q240d1ZsbDhqN0ZwNlZ1K0oxQkdLOEorYTRtb04=`,
        }
    });

    const data: Array<Category> = await res.json();
    return data;
}
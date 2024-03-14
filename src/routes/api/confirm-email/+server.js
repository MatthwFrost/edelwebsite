/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
    const data = await request.json();
    console.log(data);
    let email = data.email;

    try {
        const res = await fetch(`https://w5tnf7izk9.execute-api.eu-central-1.amazonaws.com/default/comfirmEmail?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!res.ok) {
            // Handle non-2xx responses here
            console.error('Non-2xx response:', res);
            return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: res.status });
        }

        const responseData = await res.json(); // Make sure the API returns JSON
        return new Response(JSON.stringify({ data: responseData }), { status: 200 });
    } catch (e) {
        console.error(e);
        // Returning the error directly in the response for debugging, might want to adjust for production
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
};
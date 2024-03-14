import stripe from "$lib/stripe.js";

export const POST = async ({request, res}) => {
    try {
        const data = await request.json();
        console.log(data);
        const price_key = {
            1: 'price_1OuLumFXFyh38aRKIYT9QuVN' ,
            2: 'price_1OuLwqFXFyh38aRKprACldEH',
            3: 'price_1OuLxVFXFyh38aRK2hRGNuRs',
        }
        console.log(price_key[data.id]);

        const session = await stripe.checkout.sessions.create({
            success_url: 'https://example.com/success',
            line_items: [
              {
                price: price_key[data.id],
                quantity: 1,
              },
            ],
            customer_email: 'matthwfrost@gmail.com',
            metadata: {
                email: "Matthwfrost@gmail.com",
                credits: 10000, 
            },
            payment_intent_data: {
                metadata: {
                    email: "matthwfrost@gmail.com",
                    credits: 10000,
                },
            },
            mode: 'payment',
          });

        return new Response(JSON.stringify({ url: session.url }))
    } catch (e) {
        return new Response(JSON.stringify({status: 500}))
    }
}
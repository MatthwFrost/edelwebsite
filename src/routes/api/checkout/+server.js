import stripe from "$lib/stripe.js";

export const POST = async ({request, res}) => {
    try {
        const data = await request.json();
        let credits;
        console.log(data);
        const price_key = {
            1: 'price_1OuLumFXFyh38aRKIYT9QuVN' ,
            2: 'price_1OuLwqFXFyh38aRKprACldEH',
            3: 'price_1OuLxVFXFyh38aRK2hRGNuRs',
        }

        if (data.id === 1){
            credits = 10000;
        }else if (data.id === 2){
            credits = 30000;
        } else if (data.id === 3){
            credits = 90000
        }
        // console.log(price_key[data.id]);
        // console.log(price_key[data.email]);

        const session = await stripe.checkout.sessions.create({
            success_url: 'https://readel.app/success',
            line_items: [
              {
                price: price_key[data.id],
                quantity: 1,
              },
            ],
            customer_email: data.email,
            metadata: {
                email: data.email,
                credits: credits, 
            },
            payment_intent_data: {
                metadata: {
                    email: data.email,
                    credits: credits,
                },
            },
            mode: 'payment',
        });
        console.log(session);

        return new Response(JSON.stringify({ url: session.url }))
    } catch (e) {
        return new Response(JSON.stringify({status: 500}))
    }
}
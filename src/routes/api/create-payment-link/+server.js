import stripe from "$lib/stripe.js"

export const POST = async ({request, res}) => {
    const data = await request.json();
    const { credits, email } = data;
    const amount = Math.round((Math.floor((credits * 0.00034) * 100) / 100) * 100);


    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true,
        },
        metadata: {
            credits: credits, 
            email: email, 
        },
    });

    return new Response(JSON.stringify({clientSecret: paymentIntent.client_secret, amount: amount}), {status:200, headers: {
        'Content-Type': 'application/json',
    },})
};    
import Stripe from "stripe";
import { env } from "$env/dynamic/private";

const stripe = new Stripe(env.PRIVATE_KEY);
export default stripe;
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export const stripepk = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const isCartsValid = (cart: any) => {
  //cart validation  logic
  return cart ? true : false; //test data
};

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestData = await request.json();
  // if (!requestData || !requestData.cart || !isCartsValid(requestData.cart)) {
  //   return "Error with Cart Value. Something seems fishy!";
  // }

  const cart = requestData.cart;
  const userID = requestData.userId;
  const deliveryAddress = requestData.deliveryAddress;

  const totalMrp = cart.reduce(
    (acc: any, item: any) => acc + item.mrp * item.quantity,
    0
  );
  const remainingAmt =
    999 -
    cart.reduce((acc: any, item: any) => acc + item.price * item.quantity, 0);
  const shipping = totalMrp > 0 ? (remainingAmt > 0 ? 50 : 0) : 0;

  const lineItems = cart.map((item: any) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: `${item.productName} - ${item.size.toUpperCase()}`,

        images: [item.imageURL], // Add the image URL to the images array
      },
      unit_amount: item.price * 100,
    },

    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    line_items: lineItems,
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate:
          shipping > 0
            ? process.env.STRIPE_PAID_DELIVERY
            : process.env.STRIPE_FREE_DELIVERY,
      },
    ],
    success_url: `${origin}/payment-success?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/checkout`,
    client_reference_id: userID, // A unique identifier for your customer
    // shipping_address_collection: {
    //   allowed_countries: ["IN"],
    // },
    // billing_address_collection: "auto",
  });

  return NextResponse.json(session);
}

// 5200828282828210

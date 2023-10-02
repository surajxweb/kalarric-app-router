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
  const deliveryAddress = requestData.deliveryAddress;

  const lineItems = cart.map((item: any) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.productName,

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
    success_url: `${origin}/success?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
    client_reference_id: 'your-customer-id', // A unique identifier for your customer
  metadata: {
    customer_email: 'customer@example.com', // Customer's email
    customer_name: 'Customer Name', // Customer's name
    customer_phone: '+1234567890', // Customer's phone number
  },
  });

  return NextResponse.json(session);
}


// 5200828282828210
import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request"; // Import GraphQLClient

export async function POST(request: Request) {
  const requestData = await request.json();

  const paymentId = requestData.paymentId;
  const totalAmount = requestData.totalAmount;
  const userId = requestData.userId;
  const addressId = requestData.addressId;
  const tracking = requestData.tracking;
  const prepaid = requestData.prepaid;

  // Define your GraphQL query as a string
  const graphqlQuery = `
  mutation {
    createOrder(
      data: {
        paymentId:" ${paymentId}"
        totalAmount: ${totalAmount}
        costumer: {connect: {clerkUserId: "${userId}"}}
        address: {connect: {id: "${addressId}"}}
        tracking: ${tracking}
        prepaid: ${prepaid}
      }
    ) {
      id
    }
  }
  `;

  // Create a GraphQL client instance
  const client = new GraphQLClient(process.env.GPAPHQL_KA_CHAABI || ""); // Replace with your GraphQL API endpoint

  try {
    const id = await client.request(graphqlQuery);

    // You can access the response data in the `data` variable
    return NextResponse.json({ productInOrderId: id });
  } catch (error) {
    console.error("GraphQL request error:", error);
    return NextResponse.error();
  }
}

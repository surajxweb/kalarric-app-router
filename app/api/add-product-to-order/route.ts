import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request"; // Import GraphQLClient

export async function POST(request: Request) {
  const requestData = await request.json();

  const quantity = requestData.quantity;
  const size = requestData.size;
  const price = requestData.price;
  const oid = requestData.oid;
  const pid = requestData.pid;

  // Define your GraphQL query as a string
  const graphqlQuery = `
  mutation {
    createProductInOrder(
      data: {
        quantity: ${quantity}
        size:"${size}"
        price: ${price}
        order: { connect: {id: "${oid}" }}
        product: {connect: {id:"${pid}"}}
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
    return NextResponse.json({ addressID: id });
  } catch (error) {
    console.error("GraphQL request error:", error);
    return NextResponse.error();
  }
}

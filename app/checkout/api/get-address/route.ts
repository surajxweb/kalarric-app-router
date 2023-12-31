import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request"; // Import GraphQLClient

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  // Define your GraphQL query as a string
  const graphqlQuery = `
  query address() {
    addresses(where: {costumer : {clerkUserId : "${query}" }}, stage: DRAFT) {
      id
      firstName
      lastName
      phoneNumber
      lineOne
      lineTwo
      street
      city
      state
      country
      pincode
    }
  }
  `;

  // Create a GraphQL client instance
  const client = new GraphQLClient(process.env.GPAPHQL_KA_CHAABI || ""); // Replace with your GraphQL API endpoint

  try {
    const data = await client.request(graphqlQuery);

    // You can access the response data in the `data` variable
    return NextResponse.json({ addressData: data });
  } catch (error) {
    console.error("GraphQL request error:", error);
    return NextResponse.error();
  }
}

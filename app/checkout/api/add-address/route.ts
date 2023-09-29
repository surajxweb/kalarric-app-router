import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request"; // Import GraphQLClient

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const phone = searchParams.get("phone");
  const addressLine1 = searchParams.get("addressLine1");
  const addressLine2 = searchParams.get("addressLine2");
  const streetName = searchParams.get("streetName");
  const city = searchParams.get("city");
  const state = searchParams.get("state");
  const country = searchParams.get("country");
  const pincode = searchParams.get("pincode");
  const clerkID = searchParams.get("clerkID");

  // Define your GraphQL query as a string
  const graphqlQuery = `
  mutation {
    createAddress(
      data: {
        firstName: "${firstName}",
        lastName: "${lastName}",
        phoneNumber: "${phone}",
        lineOne: "${addressLine1}",
        lineTwo: "${addressLine2}",
        street: "${streetName}",
        city: "${city}",
        state: "${state}",
        country: "${country}",
        pincode: "${pincode}",
        costumer: { connect: { clerkUserId: "${clerkID}" } }
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

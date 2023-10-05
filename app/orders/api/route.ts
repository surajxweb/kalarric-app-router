import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request"; // Import GraphQLClient

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  // Define your GraphQL query as a string
  const graphqlQuery = `
  query orders {
    orders(where: {costumer: {clerkUserId: "${query}"}}, stage: DRAFT, orderBy: createdAt_DESC) {
      id
      dateAndTime
      createdAt
      totalAmount
      address {
        
        firstName
        lastName
        phoneNumber
        lineOne
        lineTwo
        street
        city
        state
        pincode
        country
      }
      productInOrders {
        id
        quantity
        size
        price
        product {
          productName
          price
          images {
            id
            productImage {
              url
            }
          }
        }
      }
    }
  }
  
  
  `;

  // Create a GraphQL client instance
  const client = new GraphQLClient(
    "https://api-ap-south-1.hygraph.com/v2/clly5tupp1k4401un3qz75wbg/master"
  ); // Replace with your GraphQL API endpoint

  try {
    const data = await client.request(graphqlQuery);
    return NextResponse.json({ ordersData: data });
  } catch (error) {
    console.error("GraphQL request error:", error);
    return NextResponse.error();
  }
}

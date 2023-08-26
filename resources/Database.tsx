export const database = {
  products: [
    {
      productId: 1,
      productName: "Travel Oversized T-Shirt",
      category: "tshirts",
      description: "",
      quantity: 3,
      mrp: 1499,
      offerPrice: 899,
      imageURL: [
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gwOo8lCPSZWopkUpx5Pv",
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/TTUArksSO6zKe1RKJW0e",
        "",
        "",
        "",
        "",
      ],
    },
    {
      productId: 2,
      productName: "High Quality Leather Wallet",
      category: "wallets",
      description: "",
      quantity: 3,
      mrp: 999,
      offerPrice: 499,
      imageURL: [
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/6croTOFS6Id4P5LgunWg",
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/klxN817cT3eaox2bLTQS",
        "",
        "",
        "",
      ],
    },
    {
      productId: 3,
      productName: "Escape the ordinary!",
      category: "tshirts",
      description: "",
      quantity: 3,
      mrp: 1499,
      offerPrice: 899,
      imageURL: [
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/0HvABpbTdKPur9FTCHcr",
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/REi4GOXoRWBxJbetiiib",
        "",
        "",
        "",
      ],
    },
  ],
  accounts: [
    {
      rollNo: 1,
      name: "Suraj Katyayan",
      email: "katyayansuraj@gmail.com",
      number: 7042019352,
      address: {
        line1: "404, Somewhere in Bangalore",
        line2: "404, Somewhere in Bangalore",
        city: "Delhi",
        pincode: 999999,
        nation: "India",
      },
      orderHistory: [
        {
          date: "",
          totalPrice: 1798,
          purchasedProducts: [
            { productId: 1, pricePaid: 899 },
            { productId: 3, pricePaid: 899 },
          ],
        },
        {
          date: "",
          totalPrice: 399,
          purchasedProducts: [{ productId: 2, pricePaid: 399 }],
        },
      ],
    },
  ],
};

export const database = {
  products: [
    {
      productId: 1,
      productName: "Travel Oversized T-Shirt",
      category: "tshirts",
      description:
        "A soft, warm hoodie from South America that's perfect for keeping you cozy.",
      productInfo: {
        material: "100% Cotton",
        origin: "India 🇮🇳",
        weight: "-",
        dimension: "-",
      },
      quantity: [
        { name: "S", number: 4 },
        { name: "M", number: 5 },
        { name: "L", number: 0 },
        { name: "XL", number: 4 },
        { name: "XXL", number: 8 },
        { name: "XXXL", number: 0 },
      ],
      mrp: 1499,
      price: 899,
      imageURL: [
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gwOo8lCPSZWopkUpx5Pv",
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/TTUArksSO6zKe1RKJW0e",
      ],
    },
    {
      productId: 2,
      productName: "High Quality Leather Wallet",
      category: "wallets",
      description:
        "A soft, warm hoodie from South America that's perfect for keeping you cozy.",
      productInfo: {
        material: "Pure Leather",
        origin: "India 🇮🇳",
        weight: "-",
        dimension: "-",
      },
      quantity: [{ name: "ONE SIZE", number: 5 }],
      mrp: 999,
      price: 499,
      imageURL: [
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/6croTOFS6Id4P5LgunWg",
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/klxN817cT3eaox2bLTQS",
      ],
    },
    {
      productId: 3,
      productName: "Escape the ordinary!",
      category: "tshirts",
      description:
        "A soft, warm hoodie from South America that's perfect for keeping you cozy.",
      productInfo: {
        material: "100% Cotton",
        origin: "India 🇮🇳",
        weight: "-",
        dimension: "-",
      },
      quantity: [
        { name: "S", number: 4 },
        { name: "M", number: 5 },
        { name: "L", number: 10 },
        { name: "XL", number: 0 },
        { name: "XXL", number: 8 },
        { name: "XXXL", number: 10 },
      ],
      mrp: 1499,
      price: 899,
      imageURL: [
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/0HvABpbTdKPur9FTCHcr",
        "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/REi4GOXoRWBxJbetiiib",
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
      cart: [
        {
          productId: 1,
          productName: "Escape the ordinary!",
          size: "L",
          mrp: 1499,
          price: 899,
          qty: 1,
          imageURL: [
            "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/sL6yaQnXTOaRbJzVv49C",
            "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/REi4GOXoRWBxJbetiiib",
          ],
        },
        {
          productId: 3,
          productName: "Beach Blues",
          size: "M",
          mrp: 1499,
          price: 749,
          qty: 2,
          imageURL: [
            "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/n9vTWvvmSW2o05mw7w32",
            "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/REi4GOXoRWBxJbetiiib",
          ],
        },
      ],
    },
  ],
};

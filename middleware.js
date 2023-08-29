import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/store",
    "/store/tshirts", // Make the parent route public
    "/store/tshirts/:id", // Make each product route public
    "/store/tshirts/:id",
    // ... add more product routes as needed
    "/support",
    "/blog",
    "/ourstory",
    "/privacypolicy",
    "/shippingandreturns",
    "/search",
    "/cart",
    "/jobs",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

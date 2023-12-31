import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/store",
    "/store/tshirts", // Make the parent route public
    "/store/tshirts/:id", // Make each product route public
    "/store/wallets/:id",
    "/store/wallets",
    "/support",
    "/blog",
    "/about",
    "/privacypolicy",
    "/paymentpolicy",
    "/shippingandreturns",
    "/search",
    "/search/api",
    "/cart",
    "/jobs",
    "/api/create-user",
    "/api/session",
    "/terms-and-conditions",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

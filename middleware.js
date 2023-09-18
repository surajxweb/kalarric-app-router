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
    "/shippingandreturns",
    "/search",
    "/search/api",
    "/cart",
    "/jobs",
    "/api/create-user",
    "/api/session",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

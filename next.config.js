/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com", // Replace with the correct hostname
        port: "",
        pathname: "/output=format:jpg/resize=height:800,fit:max/**", // Adjust the pathname pattern
      },
    ],
  },
};

module.exports = nextConfig;

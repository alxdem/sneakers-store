/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        deviceSizes: [600, 900, 1200, 1536, 1920],
        imageSizes: [16, 32, 64, 96, 128],
    },
};

module.exports = nextConfig;

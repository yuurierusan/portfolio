/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'static.vecteezy.com',
            'raw.githubusercontent.com',
            'assets.stickpng.com',
            'upload.wikimedia.org',
            'cdn-icons-png.flaticon.com',
            'seeklogo.com',
            'www.brainspire.com',
        ],
    },
}

module.exports = nextConfig

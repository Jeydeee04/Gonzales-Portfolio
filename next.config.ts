import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Large immutable MediaPipe assets (WASM ~13.6 MB, model ~6.1 MB) in public/
  // default to max-age=0, which would revalidate them on every visit.
  async headers() {
    return [
      {
        source: "/mediapipe/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/models/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

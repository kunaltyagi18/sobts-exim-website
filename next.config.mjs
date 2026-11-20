import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Keep dev and production webpack output isolated so their server chunks
  // cannot overwrite each other during local development.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  experimental: {
    // Avoid the Next 15.5 devtools segment explorer manifest issue on Windows.
    devtoolSegmentExplorer: false,
  },
});

export default nextConfig;

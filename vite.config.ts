import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-v2",
  plugins: [react()],
  optimizeDeps: {
    include: ["three", "@react-three/fiber", "@react-three/drei"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          "react-three": ["@react-three/fiber", "@react-three/drei"],
        },
      },
    },
  },
});

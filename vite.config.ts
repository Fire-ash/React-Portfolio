import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    port: 5173
  },

  preview: {
    host: true,
    port: 4173
  },

  optimizeDeps: {
    include: [
      "framer-motion"
    ]
  },

  build: {
    outDir: "dist",

    sourcemap: false,

    chunkSizeWarningLimit: 1000
  }
});

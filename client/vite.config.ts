import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allows connecting to Docker on localhost.
    host: "0.0.0.0",
    watch: {
      // Required for hot reloading in Docker
      usePolling: true,
    },
  },
});

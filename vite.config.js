import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/klimatologi": {
        target: "https://hidrologi.bbws-bsolo.net",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: "/src/client.tsx",
      output: {
        manualChunks: {
          "vender": ["react", "react-dom"]
        }
      }
    }
  },
  plugins: [react()]
})
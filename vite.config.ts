// vite.config.js or .ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // On Vercel, env var VERCEL = "1" → base should be "/"
  // On GitHub Pages (local build), keep "/sidartist/" for correct asset paths
  base:
    process.env.VERCEL === "1"
      ? "/"                                   // Vercel
      : mode === "production"
        ? "/sidartist/"                       // GitHub Pages
        : "/",
  server: { host: "::", port: 8080 },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));

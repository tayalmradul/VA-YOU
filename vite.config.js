import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import module from "tailwindcss";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

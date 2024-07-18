import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // assets
      "@Fonts/*": "./src/assets/fonts/*",
      "@Styles/*": "./src/assets/styles/*",
      "@Svg/*": "./src/assets/svg/*",

      // components
      "@Hooks/*": "./src/components/hooks/*",
      "@Shared/*": "./src/components/shared/*",
      "@UI/*": "./src/components/ui/*",
      "@config/*": "./src/components/config/*",

      // Higher order components
      "@HOC": "./src/hoc/*",

      // utils
      "@utils": "./src/utils/*",
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      // assets
      "@Fonts/*": "./src/assets/fonts/*",
      "@Styles/*": "./src/assets/styles/*",
      "@Svg/*": "./src/assets/svg/*",

      // components
      "@Hooks/*": "./src/components/hooks/*",
      "@Shared/*": "./src/components/shared/*",
      "@UI/*": "./src/components/ui/**",
      "@config/*": "./src/components/config/*",

      "@Components/*": "./src/components/*",

      // Higher order components
      "@HOC/*": "./src/hoc/*",

      // utils
      "@Utils/*": "./src/utils/*",

      // types
      "@AppTypes/*": "./src/@types/*",
    },
  },
});

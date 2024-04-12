import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "index",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react"],
      treeshake: true,
    }
  },
  plugins: [react(), vanillaExtractPlugin(), dts({ rollupTypes: true })],
})

import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build:{
    outDir:"dist",
    assetsDir:"assets",
    sourcemap:false,
    minify:"terser",
    rolldownOptions:{
      output:{
        manualChunks:{
          vendor:["react","react-dom"],
          icons:["lucide-react"]
        }
      }
    }
  },
  preview:{
    port: 3000,
    open: true
  }
})

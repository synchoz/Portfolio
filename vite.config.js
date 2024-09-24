import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
    svgr()   // SVGR plugin for handling SVGs
  ],
  base: "./Portfolio/"
});
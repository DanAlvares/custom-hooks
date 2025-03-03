/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { UserConfig as VitestUserConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
} as VitestUserConfig);
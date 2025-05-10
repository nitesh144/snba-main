
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // This sets @ to point to the 'src' directory
    },
  },
  server: {
    host: true,  // Ensures the app listens on all network interfaces
    port: 3000         // Render uses port 3000 for web services by default
  }
});

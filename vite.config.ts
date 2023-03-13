import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Icons from 'unplugin-icons/vite'

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Icons({ /* options */ }),],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  }
})

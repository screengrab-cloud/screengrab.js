import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  define: {global: 'window'},
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [
        resolve(__dirname, 'src/lib/screengrab.ts')
      ],
      name: 'screengrab',
      // the proper extensions will be added
      fileName: (type: string, name: string) => {
        return type === 'es' ? `${name}.js` : `${name}.${type}`
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
    },
  },
})

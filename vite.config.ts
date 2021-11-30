import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import builtins from 'rollup-plugin-node-builtins';
// import nodePolyfills from 'rollup-plugin-polyfill-node';


// const builtinsPlugin = {
//   ...builtins({ crypto: true }),
//   name: 'rollup-plugin-node-builtins',
// };

// const nodePolyfillsPlugin = nodePolyfills({ include: ['crypto'] })


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

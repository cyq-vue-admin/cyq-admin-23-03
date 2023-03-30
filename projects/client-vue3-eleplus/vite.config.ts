import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { presetAttributify, presetIcons, presetUno } from "unocss";
import unocss from "unocss/vite";
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [
    vue(),
    unocss({
      rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
        ["flex", { display: "flex" }],
        ["pink", { color: "pink" }],
      ],
      shortcuts: {
        flexpink: "pink flex",
      },
      presets: [presetIcons(), presetAttributify(), presetUno()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src", import.meta.url)),
    },
  },
});

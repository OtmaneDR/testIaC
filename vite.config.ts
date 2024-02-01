import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(({ command }) => {
    const resolve = {
        alias: [
            { find: "@data", replacement: path.resolve(__dirname, "src/data/") },
            { find: "@locales", replacement: path.resolve(__dirname, "src/data/locales/") },
            { find: "@pages", replacement: path.resolve(__dirname, "src/pages/") },
        ],
    };
    const build = {
        outDir: "build",
        assetsDir: "static",
        chunkSizeWarningLimit: 600,
    };
    const eslintPlugin = eslint({
        exclude: ["/virtual:/**", "node_modules/**"],
    });
    if (command === "serve") {
        return {
            optimizeDeps: {
                force: true,
            },
            plugins: [react(), mkcert(), eslintPlugin],
            resolve: resolve,
            server: {
                port: 3001,
                open: true,
                https: true,
            },
        };
    } else {
        return {
            plugins: [react(), eslintPlugin],
            resolve: resolve,
            build: build,
        };
    }
});

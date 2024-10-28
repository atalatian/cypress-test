import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    plugins: [],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
});

// build: {
//     rollupOptions: {
//         plugins: [visualizer({ filename: "dist/stats.html" })],
//     },
// },
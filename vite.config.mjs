import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({plugins:[react()],server:{watch:{usePolling:process.env.CHOKIDAR_USEPOLLING==="true"}},build:{outDir:"build"},test:{environment:"jsdom",globals:true,setupFiles:"./src/setupTests.jsx"}});

import { defineConfig } from "vitest/config";
import { webdriverio } from "@vitest/browser-webdriverio";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    cache: false,
    browser: {
      headless: true,
      enabled: true,
      provider: webdriverio(),
      instances: [{ browser: "chrome" }],
      screenshotFailures: false,
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});

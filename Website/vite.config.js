import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// FIX: You must import the base44 plugin before you can use it.
// Replace the string below with the actual path to your base44 file or npm package name.
import base44 from './base44/index.js' 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      analyticsTracker: true,
      visualEditAgent: true
    }),
    react(),
  ]
});

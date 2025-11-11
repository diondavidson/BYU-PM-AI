// Supabase Configuration Template
// Copy this file and rename it to supabase-config.js
// Replace the values below with your actual Supabase project credentials

// You can find these values in your Supabase project settings:
// 1. Go to https://app.supabase.com
// 2. Select your project
// 3. Go to Settings > API
// 4. Copy the "Project URL" and "anon/public" API key

const SUPABASE_CONFIG = {
  url: 'https://axspjydaizpsvwfujpvz.supabase.co', // e.g., https://xxxxxxxxxxxxx.supabase.co
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4c3BqeWRhaXpwc3Z3ZnVqcHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4OTEyNzUsImV4cCI6MjA3ODQ2NzI3NX0.qgBu5pN3p6qZn2KEj-DXcHF-B40JbDVBttBl538Qraw' // Your anon/public API key
};

// For Vercel deployment, you can also use environment variables:
// 1. In Vercel dashboard, go to Settings > Environment Variables
// 2. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
// 3. Redeploy your app

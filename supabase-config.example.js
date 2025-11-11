// Supabase Configuration Template
// Copy this file and rename it to supabase-config.js
// Replace the values below with your actual Supabase project credentials

// You can find these values in your Supabase project settings:
// 1. Go to https://app.supabase.com
// 2. Select your project
// 3. Go to Settings > API
// 4. Copy the "Project URL" and "anon/public" API key

const SUPABASE_CONFIG = {
  url: 'YOUR_SUPABASE_URL_HERE', // e.g., https://xxxxxxxxxxxxx.supabase.co
  anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE' // Your anon/public API key
};

// For Vercel deployment, you can also use environment variables:
// 1. In Vercel dashboard, go to Settings > Environment Variables
// 2. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
// 3. Redeploy your app

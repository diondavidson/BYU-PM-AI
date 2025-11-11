# Quick Deployment Guide

## Deploying the Supabase Version to Vercel

### Prerequisites
- Supabase project created and configured (see [SUPABASE_SETUP.md](SUPABASE_SETUP.md))
- GitHub repository with your code
- Vercel account connected to GitHub

### Step 1: Add Your Credentials to the HTML File

1. Open `todo-app-supabase.html` in a text editor
2. Find this section (around line 395):
   ```javascript
   const SUPABASE_CONFIG = {
       url: 'YOUR_SUPABASE_URL_HERE',
       anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE'
   };
   ```
3. Replace with your actual Supabase credentials:
   ```javascript
   const SUPABASE_CONFIG = {
       url: 'https://yourproject.supabase.co',
       anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-actual-key-here'
   };
   ```

### Step 2: Commit and Push

```bash
git add todo-app-supabase.html
git commit -m "Add Supabase credentials for deployment"
git push origin main
```

### Step 3: Deploy to Vercel

Vercel will automatically redeploy when you push to GitHub. If it doesn't:

1. Go to https://vercel.com/dashboard
2. Find your project
3. Click "Redeploy"

### Step 4: Update vercel.json (if needed)

If you want the Supabase version to be your main app, update `vercel.json`:

```json
{
  "version": 2,
  "routes": [
    {
      "src": "/",
      "dest": "/todo-app-supabase.html"
    }
  ]
}
```

Then commit and push:
```bash
git add vercel.json
git commit -m "Set Supabase version as default"
git push origin main
```

## Common Issues

### Error: "SUPABASE_CONFIG is not defined"
- Make sure you've replaced the placeholder values in `todo-app-supabase.html`
- Verify the credentials are inside the `<script>` tag
- Check that you committed and pushed the changes

### Error: "Invalid API key"
- Verify you're using the **anon** key, not the service_role key
- Check for any extra spaces or missing characters when copying
- Confirm the key matches what's shown in Supabase dashboard

### Tasks not syncing
- Ensure you've run the SQL schema in Supabase (Step 2 of setup)
- Check that Row Level Security is enabled
- Verify you're logged in (check browser console for auth status)

## Security Notes

**Is it safe to put credentials in the HTML?**

✅ **Yes!** The `anon` (public) key is designed for client-side use. It's safe because:
- Row Level Security (RLS) protects your data
- Users can only access their own tasks
- The anon key has limited permissions
- This is the standard way to use Supabase in client-side apps

❌ **Never** use the `service_role` key in client-side code - that would be a security risk!

## Testing Your Deployment

1. Visit your Vercel URL
2. Open browser DevTools (F12) > Console
3. Sign up for an account
4. Add some tasks
5. Open the app in a different browser/device
6. Log in with the same account
7. Your tasks should sync!

## Multiple Versions

You can have both versions available:
- `https://your-app.vercel.app/` - localStorage version (default)
- `https://your-app.vercel.app/todo-app-supabase.html` - Supabase version

Or change the default in `vercel.json` to serve the Supabase version.

## Support

If you run into issues:
1. Check browser console for error messages
2. Review [SUPABASE_SETUP.md](SUPABASE_SETUP.md) for setup steps
3. Verify your Supabase project is active (not paused)
4. Check that the database schema was run successfully

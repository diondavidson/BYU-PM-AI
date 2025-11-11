# Supabase Setup Guide

This guide will walk you through setting up Supabase as the backend for your to-do list app.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Your to-do list app code

## Step 1: Create a Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Fill in the project details:
   - **Name**: `todo-app` (or any name you prefer)
   - **Database Password**: Create a strong password (save it somewhere safe)
   - **Region**: Choose the region closest to your users
4. Click "Create new project"
5. Wait for the project to finish setting up (takes ~2 minutes)

## Step 2: Set Up the Database

1. In your Supabase project dashboard, click on "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy the entire contents of `supabase-schema.sql` from your project
4. Paste it into the SQL editor
5. Click "Run" (or press Ctrl+Enter / Cmd+Enter)
6. You should see a success message

### What This Creates:

- **tasks table**: Stores all to-do items with user associations
- **Row Level Security (RLS)**: Ensures users can only access their own tasks
- **Indexes**: Improves query performance
- **Triggers**: Automatically updates timestamps
- **View**: Provides task statistics (for future features)

## Step 3: Configure Authentication

1. In your Supabase dashboard, click on "Authentication" in the left sidebar
2. Click on "Providers"
3. **Email Provider** (enabled by default):
   - Enable "Enable email provider"
   - Optional: Configure email templates for better branding
4. **Optional - Add Social Providers**:
   - Enable Google, GitHub, or other OAuth providers if desired
   - Follow the setup instructions for each provider

### Email Settings (Optional but Recommended)

1. Go to "Authentication" > "Email Templates"
2. Customize the confirmation and password reset emails
3. Add your app's branding and messaging

## Step 4: Get Your API Credentials

1. In your Supabase dashboard, click on "Settings" (gear icon) in the left sidebar
2. Click on "API" in the settings menu
3. You'll need two values:
   - **Project URL**: Under "Project URL" (e.g., `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key**: Under "Project API keys" > "anon public"

⚠️ **Important**: The `anon` key is safe to use in your client-side code. Never use the `service_role` key in client-side code!

## Step 5: Configure Your App

### For Local Development

1. Open `todo-app-supabase.html` in a text editor
2. Find the `SUPABASE_CONFIG` section near the top of the `<script>` tag:
   ```javascript
   const SUPABASE_CONFIG = {
       url: 'YOUR_SUPABASE_URL_HERE',
       anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE'
   };
   ```
3. Replace `YOUR_SUPABASE_URL_HERE` with your actual Supabase URL
4. Replace `YOUR_SUPABASE_ANON_KEY_HERE` with your actual anon key
5. Save the file
6. Open the file in your browser to test

**Example:**
```javascript
const SUPABASE_CONFIG = {
    url: 'https://abcdefghijklmnop.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

### For Vercel/Production Deployment

**Important:** Before pushing to GitHub/deploying:

1. **Edit `todo-app-supabase.html` directly** with your credentials (as shown above)
2. Add and commit the file:
   ```bash
   git add todo-app-supabase.html
   git commit -m "Configure Supabase credentials for deployment"
   git push origin main
   ```
3. Vercel will automatically redeploy with your credentials

**Security Note:**
- ✅ The `anon` key is **safe** to include in your HTML file - it's designed for client-side use
- ✅ This key is protected by Row Level Security policies in your database
- ❌ Never use the `service_role` key in client-side code

### Alternative: Keep Credentials Private (Advanced)

If you don't want credentials in your Git repository:

1. Keep using `supabase-config.js` locally (it's already in `.gitignore`)
2. For Vercel, use a build step or manually update the deployed file
3. Or use Vercel's environment variables with a custom build process

For most users, the inline config approach above is simpler and perfectly secure.

## Step 6: What's Included

The `todo-app-supabase.html` file includes:
- Supabase client library (loaded from CDN)
- Authentication UI (login/signup/logout)
- User session management
- Database operations with Supabase
- Row Level Security integration

## Step 7: Test Your Setup

1. Open `todo-app-supabase.html` in your browser (or visit your deployed URL)
2. You should see a login/signup form
3. Create a new account:
   - Enter an email and password
   - Check your email for the confirmation link (if email confirmation is enabled)
   - Click the confirmation link
4. Log in with your credentials
5. Add some tasks
6. Refresh the page - your tasks should persist
7. Open the app in a different browser or device and log in - your tasks should sync!

## Verifying Database Setup

To check if your database is working correctly:

1. Go to "Table Editor" in your Supabase dashboard
2. Click on the "tasks" table
3. You should see any tasks you've created
4. Each task should have a `user_id` matching your user's ID

## Troubleshooting

### "Failed to fetch" errors
- Check that your Supabase URL and anon key are correct
- Ensure your Supabase project is running (not paused)
- Check browser console for detailed error messages

### Tasks not showing up
- Verify Row Level Security policies are enabled
- Check that you're logged in (check browser console)
- Ensure the `user_id` in tasks matches your auth user ID

### Email confirmation not received
- Check your spam folder
- Verify email provider settings in Supabase dashboard
- For development, you can disable email confirmation in Authentication settings

### Can't log in
- Ensure email confirmation is complete (or disabled for testing)
- Check that the user exists in "Authentication" > "Users"
- Verify password is correct (use "Reset Password" if needed)

## Security Best Practices

✅ **Do:**
- Use the `anon` key in client-side code
- Keep your database password secure
- Use environment variables for credentials in production
- Enable Row Level Security (RLS) on all tables

❌ **Don't:**
- Never commit `supabase-config.js` to version control
- Never use the `service_role` key in client-side code
- Never disable RLS unless you understand the security implications

## Next Steps

Now that your backend is set up, you can:

1. Test the authentication flow
2. Add tasks and verify they sync to the database
3. Deploy to Vercel with environment variables
4. Customize authentication UI to match your brand
5. Add more features like task categories, priorities, etc.

## Database Schema Reference

### tasks table

| Column | Type | Description |
|--------|------|-------------|
| id | BIGSERIAL | Primary key |
| user_id | UUID | Foreign key to auth.users |
| text | TEXT | Task description |
| completed | BOOLEAN | Task completion status |
| created_at | TIMESTAMP | When task was created |
| updated_at | TIMESTAMP | When task was last updated |

### RLS Policies

- Users can only SELECT their own tasks
- Users can only INSERT tasks for themselves
- Users can only UPDATE their own tasks
- Users can only DELETE their own tasks

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Authentication Guide](https://supabase.com/docs/guides/auth)

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Review the Supabase project logs
3. Consult the Supabase documentation
4. Ask for help in the Supabase Discord community

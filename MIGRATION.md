# Migration Guide: localStorage to Supabase

This guide explains the differences between the two versions of the to-do list app and how to migrate.

## Two Versions Available

### 1. `todo-app.html` - localStorage Version
**Best for:**
- Personal use on a single device
- No account creation needed
- Completely offline functionality
- Privacy-focused (no data leaves your browser)

**Limitations:**
- Tasks only available on one browser/device
- Clearing browser data will delete all tasks
- No backup or sync capabilities

### 2. `todo-app-supabase.html` - Cloud Synced Version
**Best for:**
- Multi-device access
- Team collaboration
- Automatic backups
- Syncing across browsers and devices

**Requirements:**
- Supabase account and project setup
- Internet connection
- User registration/authentication

## Comparison Table

| Feature | localStorage | Supabase |
|---------|-------------|----------|
| Setup Complexity | None | Medium (requires Supabase setup) |
| User Accounts | No | Yes (email/password) |
| Multi-device Sync | No | Yes |
| Offline Support | Full | Requires initial login |
| Data Backup | Manual only | Automatic |
| Privacy | Complete (local only) | Data stored in Supabase |
| Scalability | Browser limits | Unlimited |
| Collaboration | No | Possible (future feature) |

## Setting Up the Supabase Version

### Prerequisites

1. **Create Supabase Account**
   - Go to https://supabase.com
   - Sign up for a free account
   - Create a new project

2. **Set Up Database**
   - Follow instructions in `SUPABASE_SETUP.md`
   - Run the SQL schema in your Supabase project
   - Get your API credentials

3. **Configure the App**
   - Copy `supabase-config.example.js` to `supabase-config.js`
   - Add your Supabase URL and anon key
   - The config file is gitignored for security

### Configuration File

Create `supabase-config.js`:

```javascript
const SUPABASE_CONFIG = {
  url: 'https://xxxxxxxxxxxxx.supabase.co',
  anonKey: 'your-anon-key-here'
};
```

## Migrating Your Tasks

Unfortunately, there's no automatic migration from localStorage to Supabase. Here's how to manually migrate:

### Method 1: Manual Copy (Simple)

1. Open `todo-app.html` (localStorage version)
2. Write down or screenshot your tasks
3. Open `todo-app-supabase.html`
4. Create an account and log in
5. Manually re-enter your tasks

### Method 2: Export/Import (Advanced)

If you have programming knowledge, you can:

1. Open `todo-app.html` in browser
2. Open Developer Console (F12)
3. Export tasks:
   ```javascript
   console.log(JSON.stringify(JSON.parse(localStorage.getItem('todoTasks')), null, 2));
   ```
4. Copy the JSON output
5. Log into Supabase version
6. Use the Supabase dashboard's Table Editor to bulk insert tasks

## Deployment Considerations

### Deploying localStorage Version
- Works out of the box on any static host
- No environment variables needed
- Example: GitHub Pages, Vercel, Netlify

### Deploying Supabase Version
- Requires environment variables or config file
- **For Vercel:**
  1. Add environment variables in dashboard:
     - `VITE_SUPABASE_URL`
     - `VITE_SUPABASE_ANON_KEY`
  2. Update the script to read from env vars
  3. Deploy

## Which Version Should You Use?

### Choose localStorage (`todo-app.html`) if:
- ✅ You only need tasks on one device
- ✅ You want instant setup with no configuration
- ✅ You prefer complete privacy (no cloud storage)
- ✅ You don't need backups or sync

### Choose Supabase (`todo-app-supabase.html`) if:
- ✅ You need tasks on multiple devices
- ✅ You want automatic backups
- ✅ You're okay with creating an account
- ✅ You want room for future features (collaboration, etc.)
- ✅ You want your tasks accessible from anywhere

## Using Both Versions

You can use both versions simultaneously:

1. **Development/Testing**: Use localStorage version for quick testing
2. **Production**: Use Supabase version for real tasks

Just remember they maintain separate task lists.

## Future Features

The Supabase version enables many future features:

- **Collaboration**: Share task lists with others
- **Categories/Tags**: Organize tasks by project
- **Due Dates**: Set deadlines with reminders
- **Priorities**: Rank tasks by importance
- **Analytics**: Track productivity over time
- **Mobile App**: Native iOS/Android apps
- **API Access**: Integrate with other tools

The localStorage version is limited to single-device features only.

## Troubleshooting

### Supabase Version Not Loading
1. Check that `supabase-config.js` exists and has correct credentials
2. Verify your Supabase project is active (not paused)
3. Check browser console for error messages
4. Ensure you've run the SQL schema in Supabase

### Tasks Not Syncing
1. Verify you're logged in (check user email in header)
2. Check your internet connection
3. Review Supabase project logs for errors
4. Verify Row Level Security policies are set up correctly

### Can't Log In
1. Ensure you've confirmed your email (if required)
2. Check that the user exists in Supabase dashboard
3. Try resetting your password
4. Verify Supabase authentication is enabled

## Keeping Both Versions Updated

If you want to maintain both versions:

1. **CSS/UI changes**: Update both files manually
2. **Bug fixes**: Apply to both versions
3. **New features**: Consider if they need cloud sync
   - If yes: Add to Supabase version only
   - If no: Can add to both versions

## Recommended Workflow

For most users, we recommend:

1. **Start** with `todo-app.html` (localStorage) to try the app
2. **Evaluate** if you need multi-device sync
3. **Upgrade** to Supabase version if needed
4. **Migrate** tasks manually (one-time effort)

## Security Considerations

### localStorage Version
- All data stored in browser
- Vulnerable to XSS if you add external scripts
- Data deleted if browser data is cleared
- No authentication needed

### Supabase Version
- Data encrypted in transit (HTTPS)
- Password authentication required
- Row Level Security protects user data
- Regular Supabase backups
- **Never commit `supabase-config.js` to git**

## Support

If you need help:

1. Check `SUPABASE_SETUP.md` for detailed setup instructions
2. Review browser console for error messages
3. Check Supabase documentation
4. Open an issue on GitHub

## Summary

Both versions have their place:

- **localStorage**: Simple, private, single-device
- **Supabase**: Powerful, synced, multi-device

Choose based on your needs, and you can always migrate later!

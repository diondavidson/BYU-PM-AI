# To-Do List App

A clean, modern, and minimalist web-based to-do list application available in two versions: localStorage (single-device) and Supabase (cloud-synced with authentication).

## Two Versions Available

### 1. localStorage Version (`todo-app.html`)
Perfect for personal use on a single device. No setup required!

**Features:**
- Add, complete, and delete tasks
- Task counter (total and completed)
- Data persistence using localStorage (JSON format)
- Responsive design
- Clean, modern UI with smooth animations
- Works completely offline
- No account needed

### 2. Supabase Version (`todo-app-supabase.html`)
Cloud-synced with user authentication for multi-device access.

**Features:**
- All features from localStorage version
- User authentication (email/password)
- Cloud storage with Supabase
- Multi-device sync
- Automatic backups
- Secure with Row Level Security
- Real-time data sync

**See [MIGRATION.md](MIGRATION.md) to choose which version is right for you.**

## Live Demo

[View Live App](https://byu-pm-ai.vercel.app/) <!-- Add your Vercel URL here after deployment -->

## Getting Started

### localStorage Version (Quickstart)

Simply open `todo-app.html` in any modern web browser (Chrome, Firefox, Edge, Safari).

No build process or dependencies required!

### Supabase Version (Cloud Sync)

1. **Set up Supabase Backend**
   - Follow the detailed instructions in [SUPABASE_SETUP.md](SUPABASE_SETUP.md)
   - Create a Supabase project
   - Run the database schema
   - Get your API credentials

2. **Configure the App**
   ```bash
   cp supabase-config.example.js supabase-config.js
   ```
   Edit `supabase-config.js` with your Supabase credentials

3. **Open the App**
   Open `todo-app-supabase.html` in your browser

### Deployment

Both versions can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting service.

For Supabase version on Vercel, use environment variables (see [SUPABASE_SETUP.md](SUPABASE_SETUP.md)).

## Project Structure

```
├── todo-app.html                  # localStorage version (single-device)
├── todo-app-supabase.html         # Supabase version (cloud-synced)
├── supabase-schema.sql            # Database schema for Supabase
├── supabase-config.example.js     # Configuration template
├── SUPABASE_SETUP.md              # Supabase setup guide
├── MIGRATION.md                   # Guide to choosing between versions
├── requirements.md                # Future features and requirements
├── design.md                      # Front-end design overview
├── tasks.md                       # Implementation tasks checklist
├── vercel.json                    # Vercel deployment configuration
├── .gitignore                     # Git ignore rules
└── README.md                      # This file
```

## Technical Stack

### Both Versions
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox, transitions, and gradients
- **Vanilla JavaScript**: No frameworks or libraries

### localStorage Version
- **localStorage**: Client-side data persistence with JSON

### Supabase Version
- **Supabase**: PostgreSQL database with Row Level Security
- **Supabase Auth**: Email/password authentication
- **Supabase JS Client**: Real-time data sync

## Browser Support

- Chrome/Edge (Chromium) 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Features

See [requirements.md](requirements.md) for a detailed roadmap of planned features including:
- Edit tasks
- Task filtering
- Due dates and priorities
- Categories/tags
- Dark mode
- Export/Import
- And much more!

## Design Documentation

See [design.md](design.md) for comprehensive front-end design documentation including:
- Color palette and typography
- Component breakdown
- Interaction design
- Accessibility considerations
- Responsive design strategy

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

Built with Claude Code

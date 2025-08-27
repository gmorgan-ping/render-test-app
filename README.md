# Demo App - Render.com Deployment Test

A Node.js + Bootstrap application for testing deployment workflows on Render.com.

## Purpose

This app is specifically designed to:
- ✅ Test Render.com's automatic deployment from Git
- ✅ Validate Node.js/Express hosting capabilities  
- ✅ Verify static file serving on Render.com
- ✅ Demonstrate continuous deployment workflow

## Render.com Deployment

### Automatic Deployment
1. Connect your Git repository to Render.com
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Render will automatically deploy on every push to main branch

### Environment Variables
- `PORT` - Automatically set by Render.com
- No additional environment variables needed for this demo

## Features

- 🚀 **Node.js & Express**: Fast, lightweight server
- 🎨 **Bootstrap 5**: Modern, responsive UI framework
- 📱 **Responsive Design**: Works on all devices
- ✨ **Interactive Elements**: Animations and smooth scrolling
- 🎯 **Modern CSS**: Gradients, hover effects, and transitions

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Or start in production mode**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   Visit `http://localhost:3000`

## Project Structure

```
demo-app/
├── package.json          # Dependencies and scripts
├── server.js             # Express server
├── README.md            # This file
└── public/              # Static files
    ├── index.html       # Main HTML page
    ├── css/
    │   └── style.css    # Custom styles
    └── js/
        └── script.js    # Interactive JavaScript
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.2
- **Icons**: Font Awesome
- **Development**: Nodemon for auto-reload
- **Deployment**: Optimized for Render.com hosting

## Features Showcase

- **Hero Section**: Eye-catching gradient background with call-to-action buttons
- **Feature Cards**: Hover effects and animations
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Interactive Alerts**: Dynamic notifications
- **Responsive Design**: Mobile-first approach
- **Modern Styling**: CSS Grid, Flexbox, and custom animations

## Development

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload

The app runs on `http://localhost:3000` by default.

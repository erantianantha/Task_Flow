# TaskFlow - Premium Project Management Platform

A modern, full-stack project management application built with React, Node.js, and MongoDB. Features a premium UI with glassmorphism effects, smooth animations, and responsive design.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd trello-clone-mern
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server && npm install
   
   # Install client dependencies
   cd ../client && npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```bash
   cd ../server
   touch .env
   ```
   
   Add the following environment variables:
   ```env
   # MongoDB Connection
   MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/your-database?retryWrites=true&w=majority&appName=Cluster0
   
   # Server Configuration
   PORT=5001
   
   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-here
   TOKEN_EXPIRE_TIME=7d
   ```

### Running the Application

#### Option 1: Quick Setup (Recommended)
```bash
# Run the setup script
./setup.sh

# Start both server and client
npm start
```

#### Option 2: Manual Setup
1. **Start the server**
   ```bash
   cd server
   npm run dev
   ```
   Server runs on `http://localhost:5001`

2. **Start the client** (in a new terminal)
   ```bash
   cd client
   export NODE_OPTIONS="--openssl-legacy-provider" && npm start
   ```
   Client runs on `http://localhost:3000`

## 🎨 Features

### Core Functionality
- **User Authentication** - Secure JWT-based login/register system
- **Project Boards** - Create and manage multiple project boards
- **Task Lists** - Organize tasks into customizable lists
- **Drag & Drop** - Intuitive card and list management
- **Real-time Updates** - Live collaboration features
- **Search Functionality** - Find boards and tasks quickly

### Premium Design System
- **Glassmorphism Effects** - Frosted glass components with backdrop blur
- **Smooth Animations** - 60fps animations with premium easing curves
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Modern Typography** - Professional font system with multiple weights
- **Custom Color Palette** - Carefully crafted color scheme
- **Interactive Elements** - Hover effects and micro-interactions

### Technical Features
- **Modern Stack** - React, Node.js, Express, MongoDB
- **State Management** - Redux for predictable state updates
- **API Integration** - RESTful API with proper error handling
- **Security** - JWT authentication and password hashing
- **Performance** - Optimized rendering and efficient data flow

## 🛠️ Technology Stack

### Frontend
- **React 17** - Modern UI library with hooks
- **Styled Components** - CSS-in-JS styling solution
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **React Beautiful DnD** - Drag and drop functionality

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing

### Development Tools
- **Nodemon** - Server auto-restart
- **React Scripts** - Client build tools
- **ESLint** - Code linting

## 📁 Project Structure

```
trello-clone-mern/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── Components/    # React components
│   │   │   ├── Pages/     # Page components
│   │   │   ├── Modals/    # Modal components
│   │   │   └── ...        # Other components
│   │   ├── Services/      # API services
│   │   ├── Redux/         # State management
│   │   ├── Utils/         # Utility functions
│   │   └── Images/        # Image assets
│   └── package.json
├── server/                 # Node.js backend
│   ├── Controllers/       # Route controllers
│   ├── Models/           # Database models
│   ├── Routes/           # API routes
│   ├── Middlewares/      # Custom middlewares
│   ├── Services/         # Business logic
│   └── server.js         # Entry point
├── package.json           # Root package.json
├── setup.sh              # Setup script
└── README.md
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `PORT` | Server port | `5001` |
| `JWT_SECRET` | JWT signing secret | `your-secret-key` |
| `TOKEN_EXPIRE_TIME` | JWT expiration time | `7d` |

### MongoDB Setup

1. Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace `<username>`, `<password>`, and `<dbname>` in the connection string
5. Add the connection string to your `.env` file

## ✅ Pre-Deployment Checklist

Before deploying your TaskFlow application:

- [ ] **Environment Variables Set**
  - [ ] MongoDB URI configured
  - [ ] JWT Secret generated
  - [ ] Port configured (5001)

- [ ] **Dependencies Installed**
  - [ ] Server dependencies (`npm install` in server/)
  - [ ] Client dependencies (`npm install` in client/)

- [ ] **Database Ready**
  - [ ] MongoDB Atlas cluster created
  - [ ] Database connection tested
  - [ ] IP whitelist configured

- [ ] **Application Tested**
  - [ ] Server starts successfully
  - [ ] Client builds without errors
  - [ ] Login/Register functionality works
  - [ ] Board creation works
  - [ ] Drag & drop functionality works

- [ ] **Production Build**
  - [ ] Client build completed (`npm run build`)
  - [ ] Build artifacts generated
  - [ ] Static files optimized

## 🚀 Deployment

### Frontend Deployment

#### Vercel Deployment
1. **Build the client**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

#### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

### Backend Deployment

#### Heroku Deployment
1. **Prepare for deployment**
   ```bash
   cd server
   ```

2. **Create Procfile**
   ```bash
   echo "web: node server.js" > Procfile
   ```

3. **Deploy to Heroku**
   ```bash
   heroku create your-app-name
   heroku config:set MONGO_URI=your-mongodb-uri
   heroku config:set JWT_SECRET=your-jwt-secret
   git push heroku main
   ```

#### Railway Deployment
1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically on push

### Environment Variables for Production

Set these environment variables in your deployment platform:

```env
MONGO_URI=your-production-mongodb-uri
PORT=5001
JWT_SECRET=your-production-jwt-secret
TOKEN_EXPIRE_TIME=7d
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5000
   lsof -ti:5000 | xargs kill -9
   ```

2. **Node.js OpenSSL error**
   ```bash
   # Use legacy OpenSSL provider
   export NODE_OPTIONS="--openssl-legacy-provider"
   ```

3. **MongoDB connection issues**
   - Check your connection string
   - Ensure your IP is whitelisted in MongoDB Atlas
   - Verify your credentials

4. **Client build errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📱 Usage Guide

1. **Register** - Create a new account with email and password
2. **Login** - Sign in to your account
3. **Create Boards** - Start new projects with custom names
4. **Add Lists** - Organize your tasks into different categories
5. **Create Cards** - Add individual tasks with descriptions
6. **Drag & Drop** - Move cards between lists effortlessly
7. **Search** - Find boards and tasks quickly using the search bar

## 🎨 Customization

### Theme Customization

The app uses CSS custom properties for theming. Modify these in `client/src/index.css`:

```css
:root {
  --primary-500: #0ea5e9;    /* Primary color */
  --bg-primary: #ffffff;     /* Background */
  --text-primary: #171717;   /* Text color */
  /* ... more variables */
}
```

### Adding New Features

1. **Backend**: Add routes in `server/Routes/`
2. **Frontend**: Create components in `client/src/Components/`
3. **Styling**: Use the premium design system variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions:
- Create an issue in the repository
- Check the troubleshooting section above
- Review the documentation

---

**TaskFlow** - Modern project management made beautiful ✨
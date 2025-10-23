#!/bin/bash

# TaskFlow Deployment Script
echo "🚀 TaskFlow Deployment Script"
echo "=============================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server
if npm install; then
    echo "✅ Server dependencies installed successfully"
else
    echo "❌ Failed to install server dependencies"
    exit 1
fi

# Install client dependencies
echo "📦 Installing client dependencies..."
cd ../client
if npm install; then
    echo "✅ Client dependencies installed successfully"
else
    echo "❌ Failed to install client dependencies"
    exit 1
fi

# Check if .env file exists
echo "🔧 Checking environment configuration..."
cd ../server
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating template..."
    cat > .env << EOF
# MongoDB Connection
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/your-database?retryWrites=true&w=majority&appName=Cluster0

# Server Configuration
PORT=5001

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
TOKEN_EXPIRE_TIME=7d
EOF
    echo "📝 Please update the .env file with your actual values"
    echo "   - MONGO_URI: Your MongoDB connection string"
    echo "   - JWT_SECRET: A secure random string"
else
    echo "✅ .env file found"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the application:"
echo "1. Update your .env file in the server directory"
echo "2. Start the server: cd server && npm start"
echo "3. Start the client: cd client && export NODE_OPTIONS=\"--openssl-legacy-provider\" && npm start"
echo ""
echo "📖 For detailed instructions, see README.md"

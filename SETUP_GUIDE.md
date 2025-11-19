# How to Run Your Kashif Rugs E-Commerce Website

## 📋 Prerequisites

Before starting, make sure you have installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - Either:
  - Local MongoDB installation, OR
  - MongoDB Atlas account (free cloud database) - [Sign up here](https://www.mongodb.com/cloud/atlas)

## 🚀 Quick Start Guide

### Step 1: Install Backend Dependencies

Open a terminal/command prompt and navigate to the backend folder:

```bash
cd backend
npm install
```

This will install all required packages (Express, MongoDB, Multer, etc.)

### Step 2: Set Up MongoDB

#### Option A: Using MongoDB Atlas (Recommended for beginners)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (it looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. Replace `<password>` with your database password

#### Option B: Using Local MongoDB

1. Install MongoDB on your computer
2. Start MongoDB service
3. Your connection string will be: `mongodb://localhost:27017/kashifrugs`

### Step 3: Configure Backend Environment

1. In the `backend` folder, create a file named `.env`
2. Add the following content:

```env
MONGO_URI=your_mongodb_connection_string_here
PORT=5000
```

**Example for MongoDB Atlas:**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/kashifrugs?retryWrites=true&w=majority
PORT=5000
```

**Example for Local MongoDB:**
```env
MONGO_URI=mongodb://localhost:27017/kashifrugs
PORT=5000
```

### Step 4: Create Uploads Directory

Create a folder for storing product images:

```bash
# In the backend folder
mkdir uploads
```

### Step 5: Start Backend Server

```bash
# Make sure you're in the backend folder
npm run dev
```

You should see:
```
✅ MongoDB Connected
🚀 Server running on http://localhost:5000
```

**Keep this terminal window open!**

### Step 6: Install Frontend Dependencies

Open a **NEW** terminal/command prompt window and navigate to the frontend folder:

```bash
cd frontend
npm install
```

### Step 7: Start Frontend Development Server

```bash
# Make sure you're in the frontend folder
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 8: Visit Your Website! 🎉

Open your web browser and go to:
```
http://localhost:5173
```

## 📱 Testing the Website

1. **Home Page**: You'll see the landing page with hero section
2. **Add Products**: Go to `/admin` to add carpets with images
3. **Browse Products**: Visit `/carpets` to see your product catalog
4. **Shopping Cart**: Add items to cart and proceed to checkout
5. **Contact**: Test WhatsApp and Instagram links

## 🔧 Troubleshooting

### Backend Issues

**Problem: MongoDB connection error**
- Check your `.env` file has the correct connection string
- Make sure MongoDB is running (if using local)
- Verify your MongoDB Atlas credentials

**Problem: Port 5000 already in use**
- Change the PORT in `.env` to another number (e.g., 5001)
- Update the API_URL in `frontend/src/services/carpetService.js` and `orderService.js`

### Frontend Issues

**Problem: Cannot connect to backend**
- Make sure backend server is running on port 5000
- Check that CORS is enabled in backend (it should be)
- Verify the API URL in service files matches your backend port

**Problem: Images not loading**
- Make sure the `uploads` folder exists in the backend directory
- Check that images are being uploaded correctly through admin panel

## 📂 Project Structure

```
kashif-rugs/
├── backend/           # Node.js/Express API
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── uploads/       # Product images (create this)
│   ├── server.js      # Main server file
│   └── .env           # Environment variables (create this)
│
└── frontend/          # React application
    └── src/
        ├── components/   # Reusable components
        ├── pages/         # Page components
        ├── services/      # API services
        └── context/      # React context (Cart)
```

## 🌐 Making It Accessible Online

To make your website accessible from other devices or share it:

### Option 1: Local Network Access

1. Find your computer's IP address:
   - Windows: `ipconfig` (look for IPv4 Address)
   - Mac/Linux: `ifconfig` or `ip addr`

2. Start frontend with host flag:
   ```bash
   cd frontend
   npm run dev -- --host
   ```

3. Access from other devices on same network:
   ```
   http://YOUR_IP_ADDRESS:5173
   ```

### Option 2: Deploy Online (Production)

For production deployment, consider:
- **Frontend**: Vercel, Netlify, or GitHub Pages
- **Backend**: Heroku, Railway, or DigitalOcean
- **Database**: MongoDB Atlas (already cloud-based)

## 📝 Important Notes

1. **Development vs Production**: The current setup is for development. For production, you'll need to:
   - Build the frontend (`npm run build`)
   - Set up proper environment variables
   - Configure CORS for your domain
   - Use a production-ready database

2. **Image Storage**: Currently images are stored locally. For production, consider:
   - Cloud storage (AWS S3, Cloudinary)
   - CDN for faster image delivery

3. **Security**: Add authentication for admin panel in production

## ✅ Checklist

- [ ] Node.js installed
- [ ] MongoDB set up (Atlas or local)
- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] `.env` file created with MongoDB URI
- [ ] `uploads` folder created
- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 5173
- [ ] Website accessible in browser

## 🎯 Next Steps

1. Add your first product through the Admin panel
2. Test the shopping cart functionality
3. Update contact information in `frontend/src/pages/Contact.jsx`
4. Customize colors and branding
5. Add more products and test the full order flow

---

**Need Help?** Check the main README.md for more details about the project structure and features.


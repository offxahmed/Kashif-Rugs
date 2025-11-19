# ⚡ Quick Start - Run Your Website in 5 Minutes

## Step-by-Step Instructions

### 1️⃣ Install Backend Dependencies
```bash
cd backend
npm install
```

### 2️⃣ Set Up MongoDB

**Option A: MongoDB Atlas (Easiest - Free)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string

**Option B: Local MongoDB**
- Install MongoDB on your computer
- Connection string: `mongodb://localhost:27017/kashifrugs`

### 3️⃣ Create Backend Configuration

Create `backend/.env` file:
```env
MONGO_URI=your_connection_string_here
PORT=5000
```

### 4️⃣ Create Uploads Folder
```bash
# In backend folder
mkdir uploads
```

### 5️⃣ Start Backend Server
```bash
cd backend
npm run dev
```
✅ You should see: "🚀 Server running on http://localhost:5000"

### 6️⃣ Install Frontend Dependencies
Open a **NEW terminal window**:
```bash
cd frontend
npm install
```

### 7️⃣ Start Frontend Server
```bash
npm run dev
```
✅ You should see: "Local: http://localhost:5173/"

### 8️⃣ Open Your Website! 🎉
Open your browser and go to:
```
http://localhost:5173
```

## 🎯 What to Do Next

1. **Add Products**: Visit `/admin` to add your first carpet
2. **Browse**: Check out `/carpets` to see your products
3. **Test Cart**: Add items and test the checkout process
4. **Update Contact**: Edit `frontend/src/pages/Contact.jsx` with your WhatsApp/Instagram

## 📱 Responsive Features

Your website is now fully responsive:
- ✅ Mobile hamburger menu
- ✅ Responsive product grid
- ✅ Touch-friendly buttons
- ✅ Optimized for all screen sizes

## ❓ Having Issues?

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed troubleshooting.


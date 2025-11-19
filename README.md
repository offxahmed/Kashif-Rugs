# Kashif Rugs - E-Commerce Website

A full-featured e-commerce website for selling hand-knotted carpets, built with React and Node.js.

## Features

- 🛒 **Shopping Cart** - Add items to cart, manage quantities
- 📦 **Order Management** - Place orders with customer information
- 🖼️ **Product Catalog** - Browse and view detailed product pages
- 💬 **Contact Integration** - WhatsApp and Instagram contact links
- 📖 **About Us** - Company story and craftsmanship information
- 🔐 **Admin Panel** - Manage products and orders
- 📱 **Fully Responsive Design** - Mobile-first design that works perfectly on phones, tablets, and desktops with hamburger menu

## Tech Stack

### Frontend
- React with Vite
- React Router for navigation
- Tailwind CSS for styling
- Context API for cart management
- Axios for API calls

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Multer for file uploads
- RESTful API

## 🚀 Quick Start

**For detailed setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)**

### Quick Commands

```bash
# Backend
cd backend
npm install
# Create .env file with MONGO_URI and PORT
mkdir uploads
npm run dev

# Frontend (in a new terminal)
cd frontend
npm install
npm run dev
```

Then visit: **http://localhost:5173**

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Create an `uploads` directory in the backend folder (for storing images):
```bash
mkdir uploads
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is taken)

## Configuration

### Contact Information

Update the contact information in `frontend/src/pages/Contact.jsx`:
- Replace `whatsappNumber` with your WhatsApp number (format: country code + number, e.g., `923001234567`)
- Replace `instagramHandle` with your Instagram username

### API URL

If your backend runs on a different port, update the API URL in:
- `frontend/src/services/carpetService.js`
- `frontend/src/services/orderService.js`

## Project Structure

```
kashif-rugs/
├── backend/
│   ├── models/
│   │   ├── Carpet.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── carpets.js
│   │   └── orders.js
│   ├── uploads/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── AdminForm.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Carpets.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Admin.jsx
│   │   ├── context/
│   │   │   └── CartContext.jsx
│   │   ├── services/
│   │   │   ├── carpetService.js
│   │   │   └── orderService.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Usage

1. **Add Products**: Use the Admin panel (`/admin`) to add new carpets with images, titles, descriptions, and prices.

2. **Browse Products**: Visit the Carpets page (`/carpets`) to see all available products.

3. **View Details**: Click on any carpet to see detailed information and add to cart.

4. **Shopping Cart**: Add items to cart and manage quantities from the cart page.

5. **Checkout**: Fill in customer information and shipping details to place an order.

6. **Contact**: Use the Contact page to reach out via WhatsApp or Instagram.

## API Endpoints

### Carpets
- `GET /api/carpets` - Get all carpets
- `GET /api/carpets/:id` - Get single carpet
- `POST /api/carpets` - Create new carpet (admin)
- `PUT /api/carpets/:id` - Update carpet (admin)
- `DELETE /api/carpets/:id` - Delete carpet (admin)

### Orders
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status (admin)
- `DELETE /api/orders/:id` - Delete order (admin)

## Future Enhancements

- User authentication and accounts
- Payment gateway integration
- Order tracking
- Product reviews and ratings
- Email notifications
- Search and filter functionality
- Product categories

## License

This project is created for Kashif Rugs.


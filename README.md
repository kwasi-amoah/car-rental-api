As part of a backend assessment, I decided to try something a little different from the usual e-commerce example and instead build a Car Rental System API. The idea is similar: users interact with products, but in this case, the products are cars available for rent. This shift allowed me to explore the same backend fundamentals in a more refreshing context.

# 🚗 Car Rental System API – Express.js

This project is a backend REST API for a **Car Rental System**, built using **Node.js**, **Express**, and **MongoDB**. As part of a backend assignment, I decided to go beyond the typical e-commerce use case and try something a bit different — so in this system, the “products” are **cars** that users can rent.

---

## 🔧 Features

### 👤 User API (CRUD)
- `POST /api/users` – Create a new user
- `GET /api/users` – Get all users (protected)
- `GET /api/users/:id` – Get a user by ID (protected)
- `PUT /api/users/:id` – Update user info (protected)
- `DELETE /api/users/:id` – Delete a user (protected)

### 🔐 Authentication API
- `POST /api/auth/login` – Login user and store JWT token in cookie
- `POST /api/auth/logout` – Logout and clear the cookie

### 🚘 Car API (Product - POST only)
- `POST /api/cars` – Add a new car to the system

### 🛒 Cart API (Protected, POST only)
- `POST /api/cart` – Add a car to a user’s rental cart (requires login)

---

## 📁 Folder Structure
car-rental-api/
├── config/ # Database connection
├── controllers/ # Route logic
├── middleware/ # Auth middleware, # Role middleware
├── models/ # MongoDB schemas
├── routes/ # Express routes
├── .env.example # Environment variable template
├── .gitignore # Excludes node_modules and .env
├── package.json
├── package-lock.json     
├── server.js # Main app entry point
└── README.md

## 🛡️ Authentication & Security

- Passwords hashed using **bcryptjs**
- JWT tokens signed with a secret and stored in **HTTP-only cookies**
- **Protected routes** using middleware

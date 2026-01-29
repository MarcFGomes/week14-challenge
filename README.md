# 🏗️ Crowdfunding Platform

A full-stack crowdfunding web application built as part of a full-stack web development bootcamp challenge.
The app allows users to create accounts, post projects, and pledge support to crowdfunding campaigns.

This project demonstrates a complete MVC architecture using Node.js, Express, Sequelize, PostgreSQL, and Handlebars.

**Demo**
![Watch Video](./Assets/Demo.gif)

## 📌 Features

- User authentication (signup, login, logout)
- Secure password hashing using bcrypt
- Create, view, update, and delete crowdfunding projects
- Pledge support to projects
- Dynamic server-rendered pages using Handlebars
- RESTful API routes for users, projects, and pledges
- PostgreSQL database with Sequelize ORM
- Data seeding for development and testing

## 🧰 Tech Stack

Layer	Technologies:
- Frontend	Handlebars, HTML, CSS, JavaScript

Backend:
- Node.js, Express

Database:
- PostgreSQL
- ORM	Sequelize

Authentication:
- Express-session, bcrypt

Dev Tools:
- dotenv, nodemon

## 🗂️ Project Structure
```bash
.
├── config/          # Database connection
├── controllers/     # API and view routes
├── models/          # Sequelize models
├── public/          # Client-side JS & CSS
├── seeds/           # Sample data
├── views/           # Handlebars templates
├── .env
├── server.js
└── package.json
```

## ⚙️ Installation

Clone the repository:
- git clone <your-repo-url>
cd crowdfunding-platform


Install dependencies:
```bash
npm install
```

Create a .env file:
DB_NAME=crowdfunding_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost


Create the database:

psql -U postgres
CREATE DATABASE crowdfunding_db;
\q

## 🌱 Seed the Database
```bash
npm run seed
```

This will populate the database with sample users, projects, and pledges for testing.

##▶️ Run the Application
```bash
npm start
```
or (development mode)
```bash
npm run dev
```

Then open your browser:
http://localhost:3001

## 🧪 Test Login (Seeded Users)

Example test user (from seeds):
- Email: test1@email.com
- Password: password123

## 🧠 What This Project Demonstrates

This project was designed to demonstrate:
- Relational database design (users, projects, pledges)
- Sequelize model associations
- MVC (Model-View-Controller) architecture
- Secure authentication workflows
- RESTful API design
- Server-side rendering with dynamic data
- Real-world full-stack app structure

## 🎓 Bootcamp Challenge

This project was completed as part of a full-stack web development bootcamp challenge.
The goal was to build a functional, database-driven web application using professional development tools and workflows.

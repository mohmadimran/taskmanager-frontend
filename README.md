# ✅ Task Manager Application (MERN Stack)

A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to create, update, delete, and track tasks efficiently.  
This project demonstrates CRUD operations, file upload, and task management features within a clean, responsive interface built using **Material-UI (MUI)**.

---

## 🧭 1. Project Overview

### 🎯 Description
The **Task Manager** helps users manage daily tasks with status tracking, deadlines, and attachments.  
Users can log in securely, add tasks with file uploads, mark progress (Pending, In Progress, Completed), and filter/search through their tasks.

### ✅ Key Features
- Create, view, update, and delete tasks  
- File upload support for task attachments  
- Responsive design with Material-UI  
- RESTful API integration between frontend and backend  

### ⚙️ Assumptions
- Each user manages only their own tasks.  
- File uploads are limited to specific formats (PDF, DOCX, images).  
- Task status transitions follow a logical flow.

### ⚠️ Limitations
- No admin panel in this version.  
- Task reminders/notifications not yet automated.  
- File storage currently local (can be upgraded to cloud like AWS S3).

---

## 🏗️ 2. Tech Stack & Architecture

### 🖥️ Frontend
- **React.js** (functional components + hooks)
- **Material-UI (MUI)** for UI components  
- **React Router DOM** for navigation  
- **Axios** for API calls  

### ⚙️ Backend
- **Node.js** with **Express.js**  
- **Mongoose** for MongoDB ODM  
- **Multer** for file uploads  
- **JWT** for secure authentication  
- **Bcrypt.js** for password encryption  
- **dotenv**, **cors**, and **helmet** for configuration & security

### 🗄️ Database
- **MongoDB Atlas (Cloud Database)**

### Deployment

- **front-end: [vercel link](https://taskmanager-six-delta.vercel.app/)

- **Back-end [on render](https://taskmanger-backend-5npl.onrender.com/)
 


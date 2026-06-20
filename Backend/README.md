# Freelance Task Marketplace API

A production-ready backend API for a Freelance Task Marketplace built with the MERN stack. The platform allows clients to post jobs, freelancers to apply for jobs, and administrators to manage the system through role-based access control.

## Features

### Authentication & Security

* JWT Authentication
* Access Token & Refresh Token
* Refresh Token Rotation
* Password Hashing with bcrypt
* Secure Logout System
* Role-Based Access Control (RBAC)

### User Management

* User Registration & Login
* Profile Management
* Avatar Upload
* Client, Freelancer, and Admin Roles

### Job Management

* Create Job Posts
* Update Job Posts
* Delete Job Posts
* View All Jobs
* View Single Job Details
* Job Status Management

### Application System

* Apply for Jobs
* Accept/Reject Applications
* Track Application Status
* Prevent Duplicate Applications

### File Upload

* Cloudinary Integration
* Profile Avatar Upload
* Resume/CV Upload Support

### Email Notifications

* Job Application Notifications
* Application Acceptance Notifications

### Database Features

* MongoDB Relationships
* Aggregation Pipelines
* Optimized Queries

### Error Handling

* Centralized Error Handling
* Custom API Error Classes
* Consistent Response Structure


## Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT
* bcrypt

### File Storage

* Cloudinary
* Multer

### Email Service

* Nodemailer / Resend


## Project Structure

src/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
│
├── app.js
└── server.js




## User Roles

### Client

* Create Jobs
* Update Own Jobs
* Delete Own Jobs
* View Applications
* Accept/Reject Freelancers

### Freelancer

* Browse Jobs
* Apply to Jobs
* Manage Profile
* Upload Resume

### Admin

* Manage Users
* Manage Jobs
* Full System Access

---

## Authentication Flow

1. User Login
2. Access Token Generated
3. Refresh Token Generated
4. Protected Routes Verify Access Token
5. Refresh Token Used to Generate New Access Token
6. Token Rotation Implemented for Enhanced Security

---

## Database Models

### User

* name
* email
* password
* role
* avatar

### Job

* title
* description
* budget
* deadline
* status
* createdBy

### Application

* jobId
* freelancerId
* coverLetter
* status


## Environment Variables

PORT=

MONGODB_URI=

ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=

ACCESS_TOKEN_EXPIRY=
REFRESH_TOKEN_EXPIRY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

EMAIL_USER=
EMAIL_PASS=




##  Installation

git clone <repository-url>

cd project-name

npm install

npm run dev



##  Future Improvements

* Real-time Notifications
* Freelancer Ratings & Reviews
* Advanced Search & Filtering
* Admin Dashboard Analytics
* Payment Integration
* Bookmark/Favorite Jobs

---

## Learning Outcomes

This project demonstrates:

* REST API Design
* Authentication & Authorization
* Refresh Token Rotation
* MongoDB Relationships
* Aggregation Pipelines
* Cloudinary Integration
* Email Services
* Backend Security Best Practices
* Production-Level Project Structure

---

## Author

Developed by Nahid as a portfolio project to strengthen backend engineering skills and prepare for software engineering internships.

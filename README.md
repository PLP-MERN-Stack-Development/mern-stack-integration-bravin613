
# DevTide.

DevTide is a full-stack MERN (MongoDB, Express.js, React.js, vite, Node.js) blogging platform built by Bravin Musali.
It empowers developers, tech enthusiasts, and creators to write, publish, and share insights on programming, AI, productivity, and emerging tech trends.

## Features

- User Authentication – Secure signup/login with JWT
- Create & Publish Blogs – Rich text + image support
- Edit & Delete Posts – Full CRUD control for authors
- Image Uploads – Profile pictures & blog thumbnails
- Responsive Design – Clean, modern UI built with React and vite.
- Public Blog Feed – Browse latest posts from all authors


## Tech Stack


| Layer        | Technology                          |
|-------------|-------------------------------------|
| **Frontend** | React.js,  vite, Tailwind CSS.   |
| **Backend**  | Node.js, Express.js                 |
| **Database** | MongoDB (via Mongoose)              |
| **Auth**     | JWT (JSON Web Tokens)               |
| **File Upload** | Multer + local storage (`/uploads`) |
| **CORS**     | Enabled for frontend integration    |
| **Env Config** | `dotenv`                          |

## ⚙️ Setup Instructions

Follow these steps to set up and run the **Devtide Blog** project locally.


# 1. Clone the Repository
```bash
git clone https://github.com/bravin-musali/devtide-blog.git
cd devtide-blog
```
# 2. Backend Setup
```bash
cd backend
npm install
```
# Create a .env file inside the backend/ directory
# Paste the following configuration and update your credentials
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_secret_key
PORT=4000
```
# Start the Backend Server
```bash
node index.js
```
#  Backend runs at: http://localhost:4000

# 3. Frontend Setup
```bash
cd frontend
```
```bash
npm install
``` 
```bash
npm start
```
#  Frontend runs at: http://localhost:5173


# API Documentation

**Base URL:** `http://localhost:4000`

---

### User Routes

#### Register a new user
```http
POST /user/register
```
| Method | Endpoint | Description | Auth Required |
| :------ | :-------- | :----------- | :------------- |
| POST | /user/register | Register a new user | ❌ No |

---

#### Login & receive JWT token
```http
POST /user/login
```
| Method | Endpoint | Description | Auth Required |
| :------ | :-------- | :----------- | :------------- |
| POST | /user/login | Login & receive JWT token | ❌ No |

---

#### Get current user profile
```http
GET /user/profile
```
| Method | Endpoint | Description | Auth Required |
| :------ | :-------- | :----------- | :------------- |
| GET | /user/profile | Get current user profile | ✅ Yes |

---

### Blog Routes

#### Create a new blog post
```http
POST /blog/create
```
| Method | Endpoint | Description | Auth Required | Notes |
| :------ | :-------- | :----------- | :------------- | :------ |
| POST | /blog/create | Create a new blog post | ✅ Yes | multipart/form-data, image field required |

---

#### Fetch all published blogs
```http
GET /blog/all
```
| Method | Endpoint | Description | Auth Required | Notes |
| :------ | :-------- | :----------- | :------------- | :------ |
| GET | /blog/all | Fetch all published blogs | ❌ No | Public |

---

#### Get all blogs by logged-in user
```http
GET /blog/user/blogs
```
| Method | Endpoint | Description | Auth Required |
| :------ | :-------- | :----------- | :------------- |
| GET | /blog/user/blogs | Get all blogs by logged-in user | ✅ Yes |

---

#### Delete a blog (author only)
```http
DELETE /blog/delete/:id
```
| Method | Endpoint | Description | Auth Required |
| :------ | :-------- | :----------- | :------------- |
| DELETE | /blog/delete/:id | Delete a blog (author only) | ✅ Yes |

---



### Authentication Header

```http
Authorization: Bearer <your_jwt_token>
```

---

### Image Upload

Use **form-data** with key `image` when creating/updating blogs.

## Screenshots


register page

![App Screenshot](/frontend/public/2%20(2).png)

login page

![App Screenshot](/frontend/public/2%20(1).png)

home page

![App Screenshot](/frontend/public/4%20(1).png)

blog details page

![App Screenshot](/frontend/public/4%20(2).png)

dashboard page

![App Screenshot](/frontend/public/4%20(3).png)

add blog page

![App Screenshot](/frontend/public/4%20(4).png)

code base

![App Screenshot](/frontend/public/4%20(5).png)

mongo db database page

![App Screenshot](/frontend/public/4%20(6).png)


## Author

Bravin Musali

📧 Email: bravinmusali327@gmail.com.
# points-app


# 🎉 Points Claim System

## 📌 Project Objective

A simple full-stack system where:
- A user can **select one of ten users**
- Click **Claim Points** to add **1–10 random points**
- See the **leaderboard update** in real-time
- **History** of every claim is stored in the database

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: ReactJS (Basic UI)

---

## 📂 Project Structure
points-app-backend/
├── backend/
│ ├── app.js
│ ├── routes/
│ ├── models/
│ ├── .env
│ ├── .gitignore
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ ├── ...

bash
git clone https://github.com/YOUR-USERNAME/points-app.git
cd points-app-backend
2️⃣ Setup the Backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:

env

MONGO_URI=YOUR_MONGO_CONNECTION_STRING
PORT=5000
Start the server:


npm start
The backend runs on: http://localhost:5000

3️⃣ Setup the Frontend
Open a new terminal:

bash

cd frontend
npm install
npm start
The frontend runs on: http://localhost:3000 (or your default React port)

🚀 Features
📋 User Selection: Pick a user from dropdown

🎲 Claim Points: Adds random points (1–10)

📈 Leaderboard: Auto-updates in real-time

🗃️ Database: MongoDB stores users and claim history

📦 Collections
users

json
Copy
Edit
{
  "_id": "ObjectId",
  "name": "Rahul",
  "totalPoints": 12
}
history

json
Copy
Edit
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "points": 5,
  "createdAt": "Timestamp"
}
✨ Author
Created by Battu Kiran Meghana

https://github.com/kiranmeghana/points-app.git



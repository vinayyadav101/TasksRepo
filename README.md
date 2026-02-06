⚙️ Setup Instructions
📌 Prerequisites

Make sure the following are installed on your system:

Node.js (v18+ recommended)

npm or yarn

Git

🔧 Backend Setup
1️⃣ Clone the repository
```
git clone https://github.com/vinayyadav101/TasksRepo.git
cd TasksRepo
```

2️⃣ Navigate to backend folder
```
cd backend
```

3️⃣ Install dependencies
```
npm install
```

4️⃣ Create .env file
```
MYSQL_DATABASE = "task_manager"
MYSQL_USER = "root"
MYSQL_PASSWORD = ""
MYSQL_HOST = "localhost"

JWT_SECRET = your_secret_key

PORT = 5000

CLIENT_URL = "http://localhost:5173"

```
5️⃣ Start backend server
```
npm start
```

Backend will run at:

http://localhost:5000

🎨 Frontend Setup
1️⃣ Navigate to frontend folder
```
cd ../frontend
```
2️⃣ Install dependencies
```
npm install
```
3️⃣ Start frontend server
```
npm run dev
```

Frontend will run at:

http://localhost:5173

🔄 Running Both Together (Optional)

Open two terminals:

Terminal 1
```
cd backend
npm start
```

Terminal 2
```
cd frontend
npm start
```
✅ Setup Complete


Frontend: http://localhost:3000

Database: MongoDB connected successfully

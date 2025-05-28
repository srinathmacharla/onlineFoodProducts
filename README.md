# 🍔 onlineFoodProducts

An online food shopping web application with separate frontend and backend projects.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 📦 Backend Setup

1. Navigate to the backend project directory in the terminal:
   ```bash
   cd backend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

---

### 🌐 Frontend Setup

1. Open a new terminal window.

2. Navigate to the frontend project directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the frontend app:
   ```bash
   npm start
   ```

---

## ⚠️ Troubleshooting: Port 8080 Already in Use

If you stop the server and encounter an error when starting it again (such as port 8080 already being in use), follow these steps:

### 🛠️ Option 2: Kill the Process Manually

1. **Find the process using port 8080**:
   ```bash
   lsof -i :8080
   ```

   Example output:
   ```bash
   COMMAND   PID    USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
   node      12345  youruser   ...   TCP *:http-alt (LISTEN)
   ```

2. **Kill the process using its PID**:
   Replace `12345` with the actual PID from the previous command:
   ```bash
   kill -9 12345
   ```

---

## 📁 Project Structure

```
onlineFoodProducts/
├── backend/
│   └── ... (Node.js backend code)
├── frontend/
│   └── ... (React or frontend code)
└── README.md
```

---

## 📬 Contact

For any issues, reach out to the project maintainer.

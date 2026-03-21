# 💬 ChatApp — MERN + Socket.IO + Redux + Vite

A full-featured real-time chat application with 1-on-1 messaging, group chats, user search, and live online status.

---

## 🏗 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18 + Vite + Redux Toolkit     |
| Styling    | Tailwind CSS + DaisyUI              |
| Backend    | Node.js + Express.js                |
| Database   | MongoDB + Mongoose                  |
| Realtime   | Socket.IO (as Redux middleware)     |
| Auth       | JWT + HTTP-only cookies             |
| Deploy     | Render (server) + Vercel (client)   |

---


### 1. Clone and install

```bash
git clone <your-repo-url>
cd chat-app
npm run install:all
```

### 2. Configure environment variables

**Server** (`server/.env`):
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/chatapp
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

**Client** (`client/.env`):
```env
VITE_SERVER_URL=http://localhost:5000
```

### 3. Run development servers

```bash
# Terminal 1 - Backend
npm run dev:server

# Terminal 2 - Frontend
npm run dev:client
```

Open `http://localhost:5173` in your browser.

---

## 🔌 Redux + Socket.IO Architecture

The key architectural decision is using **Socket.IO as a Redux middleware**:

```
User action (e.g. send message)
    ↓
Redux Thunk (sendMessage)
    ↓
REST API → MongoDB saved
    ↓
Server emits socket event ("newMessage")
    ↓
socketMiddleware listens → dispatches addMessage()
    ↓
UI re-renders with new message
```

This means all state flows through Redux — no separate context needed.

---



## 🔄 Socket Events

| Event               | Direction          | Purpose                    |
|---------------------|--------------------|-----------------------------|
| `getOnlineUsers`    | Server → Client    | Online user IDs list        |
| `newMessage`        | Server → Client    | New message received        |
| `conversationUpdated` | Server → Client  | Sidebar last message update |
| `userTyping`        | Server → Client    | Typing indicator on         |
| `userStopTyping`    | Server → Client    | Typing indicator off        |
| `newGroup`          | Server → Client    | Added to a new group        |
| `groupUpdated`      | Server → Client    | Group info changed          |
| `groupDeleted`      | Server → Client    | Group was deleted           |
| `memberAdded`       | Server → Client    | New member joined group     |
| `memberRemoved`     | Server → Client    | Member removed from group   |
| `joinConversation`  | Client → Server    | Join a chat room            |
| `leaveConversation` | Client → Server    | Leave a chat room           |
| `typing`            | Client → Server    | User started typing         |
| `stopTyping`        | Client → Server    | User stopped typing         |

---



## ✨ Features

- ✅ JWT auth with HTTP-only cookies
- ✅ Real-time 1-on-1 messaging
- ✅ Real-time group chat
- ✅ Search users by username or unique ID (e.g. `usr_a3f9k`)
- ✅ Create group with members
- ✅ Add/remove group members (admin only)
- ✅ Typing indicators
- ✅ Online/offline status
- ✅ Socket.IO as Redux middleware
- ✅ DaisyUI night theme

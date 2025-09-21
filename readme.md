# Building a version control System (On Process....)

# 🚀 GitCloneHub

**GitCloneHub** is a GitHub-inspired platform built with modern web technologies. It replicates core functionality of GitHub such as repository management, user authentication, and collaborative workflows, providing a simplified version for learning and development.

---

## 📌 Features

- 🔐 **User Authentication** – Sign up, login, and secure sessions
- 📂 **Repository Management** – Create, view, update, and delete repositories
- 🌿 **Branching & Commits** – Manage branches and track commit history
- 👤 **User Profiles** – View personal and public repositories
- ⭐ **Star Repositories** – Like repositories for quick access
- 🔎 **Search** – Find repositories and users quickly
- 💬 **Issues & Discussions** – Report bugs and discuss features
- 📊 **Activity Feed** – Track latest commits and project updates

---

## 🛠️ Tech Stack

- **Frontend:** React.js, JavaScript, HTML, CSS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Cloud & Hosting:** AWS
- **Testing:** Jest
- **CLI Utilities:** Yargs

---

## 📂 Project Structure

```bash
GITHUB-MAIN/
├── backend-main/
│   ├── config/              # Database & server configurations
│   ├── controllers/         # API logic for handling requests
│   ├── middleware/          # Authentication & security middlewares
│   ├── models/              # MongoDB schemas
│   ├── routes/              # Express routes
│   ├── commit.json          # Commit tracking data
│   ├── index.js             # Backend entry point
│   ├── package-lock.json
│   └── package.json
│
├── frontend-main/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── assets/          # Images, icons, etc.
│   │   ├── components/      # UI components
│   │   │   ├── auth/        # Authentication components
│   │   │   ├── dashboard/   # Dashboard UI
│   │   │   ├── user/        # User-related components
│   │   │   ├── navbar.css   # Navbar styles
│   │   │   └── Navbar.jsx   # Navbar component
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── authContext.jsx  # Authentication context
│   │   ├── index.css
│   │   ├── main.jsx         # React entry point
│   │   └── Routes.jsx       # Application routes
│   ├── .eslintrc.cjs        # ESLint config
│   ├── .gitignore
│   ├── index.html           # Main HTML file
│   ├── package-lock.json
│   └── package.json
│
└── README.md

# Clone the repository
git clone https://github.com/JaganParida/GitCloneHub.git
cd GitCloneHub

# Setup Backend
cd backend-main
npm install
npm start

# Setup Frontend
cd ../frontend-main
npm install
npm run dev
```

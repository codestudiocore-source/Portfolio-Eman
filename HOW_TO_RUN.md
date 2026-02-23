## 🚀 How to Run Your Portfolio Project

### Prerequisites
- Node.js installed (download from nodejs.org)
- Gmail account with app password

---

### **Step 1: Setup Backend Environment Variables**

1. Open `backend/.env` file
2. Add your Gmail credentials:

```
EMAIL=your-email@gmail.com
PASSWORD=your-app-password
```

**How to get Gmail App Password:**
- Go to myaccount.google.com
- Security → App passwords
- Select "Mail" and "Windows Computer"
- Copy the password and paste in .env

---

### **Step 2: Install Backend Dependencies**

Open PowerShell, navigate to backend folder:

```powershell
cd backend
npm install
```

---

### **Step 3: Start Backend Server**

```powershell
npm start
```

Expected output:
```
Server running on http://localhost:5000
```

Keep this terminal open! ✅

---

### **Step 4: Start Frontend**

Open a NEW PowerShell window, navigate to frontend:

```powershell
cd "frontend files"
```

If you have Python:
```powershell
python -m http.server 8000
```

Or use VS Code Live Server extension

---

### **Step 5: Open in Browser**

- Frontend: `http://localhost:8000`
- Backend API: `http://localhost:5000`

---

### **Testing the Contact Form**

1. Click "Hire Me" button → scroll to Contact
2. Fill in the form
3. Click "Send Message"
4. Check your email for the message! ✅

---

### **Troubleshooting**

❌ **"Backend not running"** error?
- Make sure backend server is running on port 5000
- Check terminal for error messages

❌ **"No module found"** error?
- Run `npm install` in backend folder

❌ **Email not sending?**
- Check .env file credentials
- Use Gmail App Password (not regular password)
- Check spam folder

---

### **Project Structure**
```
📁 eman-portfolio/
├── 📁 frontend files/
│   ├── index.html
│   ├── style.css
│   └── scripe.js
├── 📁 backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── 📁 images/
├── 📁 assets/
│   └── Eman-Fatima-CV.pdf
└── README.md
```

---

### **Features Included**
✅ Professional portfolio website
✅ Node.js + Express backend
✅ Contact form with email notifications
✅ Rate limiting (5 emails per 15 min)
✅ Security headers & validation
✅ Responsive design
✅ Video showcase section
✅ Smooth animations

---

**Happy showcasing! 🎉**
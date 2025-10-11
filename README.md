# 😎 Face Blur Detection App

An AI-powered web application for detecting and blurring faces in uploaded images.  
Built with **Angular** (Frontend) and **NestJS** (Backend) using **Face-api.js / TensorFlow** and **Supabase + PostgreSQL** for data storage.

---

## 🧠 Tech Stack

### 💻 Frontend
- Angular + TypeScript  
- Tailwind CSS  
- Axios (HTTP client)  

### ⚙️ Backend
- NestJS + Express  
- Multer (File Upload)  
- Face-api.js / TensorFlow.js  
- Swagger (API Documentation)  
- PostgreSQL + Supabase (Database)  

### 🐳 DevOps & Tools
- Docker + Docker Compose  
- Git & GitHub  
- VS Code  
- Postman  

---

## 🚀 Features

- 📸 Upload image for face detection  
- 🕶️ Automatic face blur using AI  
- 💾 Download processed image  
- 🔗 Connected with NestJS backend  
- 🧰 Swagger API Docs (`/api/docs`)  
- 🗃️ Store metadata in PostgreSQL (via Supabase)  
- 🐳 Dockerized frontend & backend for easy deployment  

---

## 🖥️ Screenshots

<img width="1904" height="920" alt="image" src="https://github.com/user-attachments/assets/0b6be8ff-76d0-44aa-97b0-e024ab4cfa20" />
<img width="1907" height="914" alt="image" src="https://github.com/user-attachments/assets/e767296f-6e72-4625-9cd3-a5d086a970fb" />
<img width="1913" height="912" alt="image" src="https://github.com/user-attachments/assets/5f6d49c3-210f-46e5-abd3-f0f07aafa88d" />
<img width="1908" height="903" alt="image" src="https://github.com/user-attachments/assets/83a4c07c-1f48-44c0-998e-7c0a406fd462" />
<img width="1908" height="898" alt="image" src="https://github.com/user-attachments/assets/b29dc7af-69e4-4b65-9bc0-084e30a9f808" />
<img width="1908" height="913" alt="image" src="https://github.com/user-attachments/assets/082e45c3-f8a1-4f75-a6f1-e159a1da5c8f" />
<img width="1912" height="915" alt="image" src="https://github.com/user-attachments/assets/fca9125d-87f1-4386-9a48-ad3251f178fb" />
<img width="1915" height="914" alt="image" src="https://github.com/user-attachments/assets/01725999-f9b8-431d-81d8-6c1995ea9188" />
<img width="1909" height="907" alt="image" src="https://github.com/user-attachments/assets/3abe7986-8e5d-4f58-9bab-84c665a28e4a" />
<img width="1919" height="912" alt="image" src="https://github.com/user-attachments/assets/5079075c-9b72-4171-a60a-571d5f82a11b" />
<img width="1918" height="912" alt="image" src="https://github.com/user-attachments/assets/6672da0b-86e4-438e-9bb1-814cd7f8786d" />
<img width="1913" height="905" alt="image" src="https://github.com/user-attachments/assets/064498bf-90f6-4049-bb78-271ac83c020b" />
<img width="1913" height="918" alt="image" src="https://github.com/user-attachments/assets/77cae3cf-14be-418e-b18f-9c89ff19afe9" />
<img width="1908" height="909" alt="image" src="https://github.com/user-attachments/assets/29ce4597-db91-4648-b925-346958443ace" />

---

## 🔗 Repository

- GitHub: [https://github.com/Foam-01/Face-Blur](https://github.com/Foam-01/Face-Blur)

---

## 🏁 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Foam-01/Face-Blur.git
```

2️⃣ Setup Environment
Backend (.env)
PORT=3000
SUPABASE_URL=https://xyzcompany.supabase.co
SUPABASE_KEY=your-supabase-key
DATABASE_URL=postgresql://postgres:password@localhost:5432/faceblur

3️⃣ Run with Docker 🐳
docker-compose up --build


Then open:

Frontend → http://localhost:4200

Backend API → http://localhost:3000

Swagger Docs → http://localhost:3000/api/docs

4️⃣ Or Run Manually
🧩 Frontend (Angular)
cd frontend
npm install
ng serve

⚙️ Backend (NestJS)
cd backend
npm install
npm run start:dev

📦 API Endpoint Example (NestJS)
POST /api/face/detect
Content-Type: multipart/form-data
Body: { image: <file> }

Response:
{
  "status": "success",
  "blurredImage": "data:image/jpeg;base64,...",
  "facesDetected": 3
}

📘 Swagger UI

Access via:
👉 http://localhost:3000/api/docs

Generated automatically using @nestjs/swagger

🧑‍💻 Author

Foam-01
📧 foam.dev@example.com

💻 GitHub: https://github.com/Foam-01

🐘 PostgreSQL | 🐳 Docker | 🧠 AI Vision



# 📦 My React + JSON Server Project

🚀 مشروع React متكامل مع JSON Server لتخزين البيانات وعرضها بشكل ديناميكي.
## 🚀 الميزات
- 📡 استخدام `JSON Server` لمحاكاة الـ Backend
- 🏗️ مبني باستخدام `React + Redux Toolkit`
- 🎨 تصميم عصري باستخدام `Tailwind CSS & Flowbite`
- 🔥 استخدام `Axios` لتحميل البيانات بسهولة


```sh
### **1️⃣ تثبيت الحزم**
npm install 

## 🛠️ **التثبيت والتشغيل**

// start project front-end

npm run dev

// start server back-end

npm run server  ==>  json-server --watch db.json --port 3004

by using styling ===> tailwindcss ==> flowbite react

by using fetching ==> axios

📁 Courses
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📜 store.jsx
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 AddCourseForm.jsx
 ┃ ┃ ┣ 📜 CourseList.jsx
 ┃ ┃ ┣ 📜 Home.jsx
 ┃ ┣ 📜 App.js
 ┣ 📜 db.json  
 ┣ 📜 package.json
 ┣ 📜 README.md




fetch("http://localhost:3004/courses")
  .then(res => res.json())
  .then(data => console.log(data));



fetch("http://localhost:3004/courses", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ Title: "New Course", description: "course java" duration: 30, instructor: "John Doe" })
});

```

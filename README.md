📦 Courses Project

🚀 مشروع React لإدارة الدورات باستخدام Supabase كـ Backend.

🚀 الميزات

✅ Supabase كقاعدة بيانات وخدمة مصادقة
✅ React + Redux Toolkit لإدارة الحالة
✅ Tailwind CSS & Flowbite لتصميم عصري
✅ react-hot-toast للإشعارات
✅ React Router DOM للتنقل بين الصفحات

🛠️ التثبيت والتشغيل

npm install  # تثبيت الحزم
npm run dev  # تشغيل المشروع

📁 هيكلة المشروع

📁 Courses
 ┣ 📂 src
 ┃ ┣ 📂 redux (إدارة الحالة)
 ┃ ┣ 📂 components (المكونات)
 ┃ ┣ 📜 App.js
 ┣ 📜 package.json
 ┣ 📜 README.md

🌐 الاتصال بـ Supabase

import { createClient } from "@supabase/supabase-js";
const supabase = createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY");

📤 العمليات الأساسية

// جلب البيانات
const fetchCourses = async () => {
  const { data, error } = await supabase.from("courses").select("*");
  if (error) console.error(error);
  return data;
};

// إضافة دورة جديدة
const addCourse = async () => {
  await supabase.from("courses").insert([
    { title: "New Course", description: "Learn JavaScript", duration: 30, instructor: "John Doe" }
  ]);
};

📜 ترخيص MIT


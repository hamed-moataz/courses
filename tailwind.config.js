import flowbite from "flowbite/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"  ], // تأكد من هذا المسار
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};

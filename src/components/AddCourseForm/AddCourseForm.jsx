import React, { useState } from "react";

import { useDispatch } from "react-redux";

import toast, { Toaster } from "react-hot-toast";
import { addCourse } from "../../redux/Courses/add";
const AddCourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [duration, setDuration] = useState("");

  

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !instructor || !duration) return;

    dispatch(addCourse({ title, description, instructor, duration }));
    toast.success("Added successfully");

    setTitle("");
    setDescription("");
    setInstructor("");
    setDuration("");
  };
  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter course title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter course description"
            value={description}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="instructor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Instructor Name
          </label>
          <input
            type="text"
            id="instructor"
            onChange={(e) => setInstructor(e.target.value)}
            placeholder="Enter instructor name"
            value={instructor}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="duration"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Duration
          </label>
          <input
            type="text"
            id="duration"
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter course duration"
            value={duration}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="relative h-10">
          <button
            type="submit"
            className="absolute right-0 bottom-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Course
          </button>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </>
  );
};

export default AddCourseForm;

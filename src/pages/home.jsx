import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample data structure for courses
const coursesData = {
  numbers: [
    {
      title: "Numbers",
      color: "#0F82F2",
      icon: "/images/math01.png",
      sections: [
        {
          name: "Introduction",
          link: "/math01#introduction",
        },
        { name: "Real Numbers", link: "/math01" },
        {
          name: "Complex Numbers",
          link: "/math01",
        },
        {
          name: "Mathematical Induction",
          link: "/math01",
        },
      ],
    },
    // Add other geometry courses here...
  ],
  mechanics: [
    {
      title: "Mechanics",
      color: "#1AA845",
      icon: "/images/phy01.png",
      sections: [
        {
          name: "What is Mechanics",
          link: "/physics01#introduction",
        },
        { name: "Scalar and Vector quantities", link: "/physics01" },
        {
          name: "Compositionn and resolution of forces",
          link: "/physics01",
        },
        { name: "Moments and Couples", link: "/physics01#forces" },
        { name: "Black Holes", link: "/physics01" },
      ],
    },
    // Add sequences, quadratics, etc.
  ],
  chemistry: [
    {
      title: "Surface of Mars",
      color: "#1AA845",
      icon: "/content/divisibility/icon.png",
      sections: [
        {
          name: "What is Mechanics",
          link: "/physics01",
        },
        { name: "Scalar and Vector quantities", link: "/physics01" },
        { name: "Prime Numbers", link: "/physics01" },
        {
          name: "Compositionn and resolution of forces",
          link: "/physics01",
        },
        { name: "Moments and Couples", link: "" },
        { name: "Black Holes", link: "/physics01" },
      ],
    },
  ],
  biology: [
    {
      title: "Blood Test",
      color: "#1AA845",
      icon: "/content/divisibility/icon.png",
      sections: [
        {
          name: "What is Mechanics",
          link: "/physics01",
        },
        { name: "Scalar and Vector quantities", link: "/physics01" },
        { name: "Prime Numbers", link: "/physics01" },
        {
          name: "Compositionn and resolution of forces",
          link: "/physics01",
        },
        { name: "Moments and Couples", link: "" },
        { name: "Black Holes", link: "/physics01" },
      ],
    },
  ],
};

const Hero = () => (
  <div
    className="hero relative overflow-hidden h-[300px] bg-cover bg-center"
    style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
  >
    {/* Overlay for better text contrast */}
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-white text-4xl md:text-5xl font-bold flex items-center gap-4">
        {/* <img src="/icons/library.svg" alt="Library" className="w-14 h-14" /> */}
        Love STEM
      </h1>
      <div className="subtitle mt-4 text-white/80 text-lg md:text-xl">
        Explore the Textbook of the Future
      </div>
    </div>
  </div>
);

const Tabs = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-gray-100 p-2 rounded-lg">
      <button
        className={`px-4 py-2 font-medium transition-colors duration-200 ${
          activeTab === "geometry"
            ? "bg-blue-100 text-black"
            : "bg-gray-100 text-black hover:bg-blue-100"
        }`}
        onClick={() => setActiveTab("numbers")}
      >
        Mathematics
      </button>

      <button
        className={`px-4 py-2 font-medium transition-colors duration-200 ${
          activeTab === "mechanics"
            ? "bg-blue-100 text-black"
            : "bg-gray-100 text-black hover:bg-blue-100"
        }`}
        onClick={() => setActiveTab("mechanics")}
      >
        Physics
      </button>

      <button
        className={`px-4 py-2 font-medium transition-colors duration-200 ${
          activeTab === "chemistry"
            ? "bg-blue-100 text-black"
            : "bg-gray-100 text-black hover:bg-blue-100"
        }`}
        onClick={() => setActiveTab("chemistry")}
      >
        Chemistry
      </button>

      <button
        className={`px-4 py-2 font-medium transition-colors duration-200 ${
          activeTab === "biology"
            ? "bg-blue-100 text-black"
            : "bg-gray-100 text-black hover:bg-blue-100"
        }`}
        onClick={() => setActiveTab("biology")}
      >
        Biology
      </button>
      <button
        className={`px-4 py-2 font-medium transition-colors duration-200 ${
          activeTab === "biology"
            ? "bg-blue-100 text-black"
            : "bg-gray-100 text-black hover:bg-blue-100"
        }`}
        onClick={() => navigate("/more")}
      >
        More
      </button>
    </div>
  );
};

const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col mt-5 ml-3">
    <div
      className="h-32 w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundColor: course.color,
        backgroundImage: `url(${course.icon})`,
      }}
    ></div>

    <div className="p-4 flex flex-col gap-2">
      <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
      <div className="flex flex-col gap-1">
        {course.sections.map((section, idx) => (
          <a
            key={idx}
            href={section.link}
            className="text-blue-600 hover:underline text-sm"
          >
            {section.name}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const CoursesPanel = ({ courses }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {courses.map((course, idx) => (
      <CourseCard key={idx} course={course} />
    ))}
  </div>
);

const Footer = () => (
  <footer className="bg-gray-100 text-gray-700 py-6 mt-5 bt-0">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Left links */}
      <div className="flex flex-col md:flex-row md:gap-6 text-sm text-gray-600">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a href="/about" className="hover:text-gray-900">
            About
          </a>
          <span>•</span>
          <a href="/learn" className="hover:text-gray-900">
            Talks and Events
          </a>
          <span>•</span>
          <a href="/teachers" className="hover:text-gray-900">
            For Teachers
          </a>
          <span>•</span>
          <a href="/store" className="hover:text-gray-900">
            Gift Store
          </a>
          <span>•</span>
          <a href="/press" className="hover:text-gray-900">
            Press
          </a>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 md:mt-0">
          <a href="/faqs" className="hover:text-gray-900">
            FAQs
          </a>
          <span>•</span>
          <a href="/accessibility" className="hover:text-gray-900">
            Accessibility
          </a>
          <span>•</span>
          <a
            href="https://amplify.com/customer-privacy"
            target="_blank"
            className="hover:text-gray-900"
          >
            Privacy Policy
          </a>
          <span>•</span>
          <a
            href="https://amplify.com/acceptable-use-policy"
            target="_blank"
            className="hover:text-gray-900"
          >
            Acceptable Use Policy
          </a>
        </div>
      </div>

      {/* Right copyright */}
      <div className="text-sm text-gray-500 mt-2 md:mt-0">
        © 2025 LearnPhysics
      </div>
    </div>
  </footer>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("mechanics");

  return (
    <>
      <main className="font-sans text-gray-800 bg-gray-50 leading-relaxed">
        <Hero />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <CoursesPanel courses={coursesData[activeTab]} />
      </main>
      <Footer />
    </>
  );
}

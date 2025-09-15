import React from "react";

export default function FullStackDevelopment() {
  const courses = [
    {
      title: "Full Stack Development",
      description: "Complete web development course",
      link: "https://docs.google.com/document/d/1V-lqQQ4Ck86OXRzPaYO5gukUFnKqcEqb0hw8L6IWTyo/edit?tab=t.0",
      available: true,
    },
    {
      title: "Mobile",
      description: "Mobile app development",
      link: "https://drive.google.com/file/d/1bW3kTRMIukMN6KEwAAEsxdgJ7L_2KoMX/view?usp=sharing",
      available: true,
    },
    {
      title: "LLD",
      description: "Low Level Design",
      link: "https://docs.google.com/document/d/1-wUb337VySf2xAwRIEsil93828sTHpRWBWmtTJoYKvI/edit?usp=sharing",
      available: false,
      availableBy: "28",
    },
    {
      title: "HLD",
      description: "High Level Design",
      link: "https://drive.google.com/file/d/1c2Y9c2mE3ys2J9B_daFVufnop6lX6iks/view?usp=sharing",
      available: false,
      availableBy: "28",
    },
    {
      title: "Machine Coding(Backend)",
      description: "Backend coding practices",
      link: "https://drive.google.com/file/d/1jJqSMDglLVZ0t5k40MS-vek90aUsjPMX/view?usp=sharing",
      available: false,
      availableBy: "28",
    },
    {
      title: "DevOps",
      description: "Development Operations",
      link: "https://drive.google.com/file/d/1ORFhxwxPITlJY0lTAKF8SU-0JZTlU_FW/view?usp=sharing",
      available: true,
    },
  ];

  const dataScience = {
    links: [
      { title: "Data Science Resources", url: "#" },
      {
        title: "Google Docs Resource",
        url: "https://drive.google.com/file/d/1q3mcaOpMyzHgzYSygW_DGaxu4WF3kZ1Z/view?usp=sharing",
      },
    ],
  };

  const aptitudeCourse = {
    title: "Aptitude Course",
    link: "https://www.youtube.com/watch?v=eQN_sz2crc0&list=PLYwpaL_SFmcBpa1jwpCbEDespCRF3UPE5&ab_channel=5MinutesEngineering",
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3 underline decoration-blue-500 decoration-4 underline-offset-8">
          Full Stack DEVELOPMENT
        </h1>
        <p className="text-gray-600 text-lg">
          Complete development learning path
        </p>
      </div>

      {/* Dev Mentor Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">👨‍💻</span>
          <h2 className="text-2xl font-bold text-gray-800">
            Dev Mentor Session
          </h2>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="text-gray-700 mb-3">
            Access exclusive mentorship content:
          </p>
          <a
            href="#"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <span className="mr-2">📹</span>
            Watch the video
          </a>
        </div>
      </div>

      {/* Dev Documents Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <span className="text-2xl mr-3">📚</span>
          <h2 className="text-2xl font-bold text-gray-800">Dev Documents</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-800">{course.title}</h3>
                {course.available ? (
                  <span className="text-green-500 text-sm">✅</span>
                ) : (
                  <span className="text-orange-500 text-sm">⏳</span>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-3">{course.description}</p>

              <div className="flex items-center justify-between">
                <a
                  href={course.link}
                  className={`text-blue-600 hover:text-blue-800 underline font-medium ${
                    !course.available ? "opacity-60" : ""
                  }`}
                >
                  Link
                </a>
                {!course.available && (
                  <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded">
                    Available by {course.availableBy}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Science Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">📊</span>
          <h2 className="text-2xl font-bold text-gray-800">Data Science</h2>
        </div>

        <div className="space-y-3">
          {dataScience.links.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-blue-500 mr-3">→</span>
              <a
                href={item.url}
                className="text-blue-600 hover:text-blue-800 underline flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
              <span className="text-gray-400 text-sm">🔗</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aptitude Course Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">🧮</span>
          <h2 className="text-2xl font-bold text-gray-800">Aptitude Course</h2>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
          <p className="text-gray-700 mb-3">
            Improve your problem-solving skills with our comprehensive aptitude
            course:
          </p>
          <a
            href={aptitudeCourse.link}
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <span className="mr-2">🎯</span>
            Access Course
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-10 p-6 bg-white rounded-lg shadow-lg">
        <p className="text-gray-600">
          <span className="text-xl mr-2">🚀</span>
          Ready to start your full-stack development journey? Choose a course
          above to begin!
        </p>
        <div className="flex justify-center space-x-4 mt-4 text-sm text-gray-500">
          <span className="flex items-center">
            <span className="text-green-500 mr-1">✅</span>
            Available Now
          </span>
          <span className="flex items-center">
            <span className="text-orange-500 mr-1">⏳</span>
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
}

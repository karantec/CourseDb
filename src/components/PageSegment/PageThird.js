import React, { useState } from "react";

export default function InterviewResources() {
  const [activeTab, setActiveTab] = useState("companies");

  const companyInterviews = [
    {
      company: "Amazon",
      type: "OA + Interview Prep",
      link: "https://docs.google.com/document/d/16RDtQOeUKPwuIeQPuFb8H8Twyj4qDUM3Bg8io7Fyiz0/edit?tab=t.0",
    },
    {
      company: "Apple",
      type: "OA + Interview Prep",
      link: "https://docs.google.com/document/d/11TooT7jZmrKppxGYKgDzpfslE8S_FYTWOhX3GKLm06g/edit",
    },
    {
      company: "Samsung",
      type: "OA + Interview Prep",
      link: "https://docs.google.com/document/d/1i4g-aIjGp91FZ-pOQ0O3GUAwriHs58jKIFSUhqnL4Oo/edit?tab=t.0",
    },
    {
      company: "Cisco",
      type: "OA + Interview Prep",
      link: "https://docs.google.com/document/d/17WWhOyuWck0v4rQ-bY1BiRHyRSFRUQdct8G7QZ4ajS0/edit",
    },
    {
      company: "ZScalar",
      type: "OA + Interview Prep",
      link: "https://docs.google.com/document/d/14c4Qx5G-qSe-1EzMXYAeUAcvsRJVfQURjwkxGK7QxD8/edit",
    },

    {
      company: "Google",
      type: "OA + Interview Prep",
      link: "https://docs.google.com/document/d/1t4Jjt2UC0KPe44KD7Jv8QCGDddU9yxR1M8LK7Mc_HT8/edit?tab=t.0",
    },
    {
      company: "JustPay",
      type: "OA + Interview Prep",
      link: "https://docs.google.com/document/d/1t4Jjt2UC0KPe44KD7Jv8QCGDddU9yxR1M8LK7Mc_HT8/edit?tab=t.0",
    },
  ];

  const competitiveProgramming = [
    {
      title: "Competitive Programming Course",
      link: "#",
      description: "Complete DSA and problem-solving course",
    },
  ];

  const importantProblems = [
    {
      category: "SystemDesign",
      problems: [
        {
          title:
            " How will you design a Hotel booking application like AirBnB?",
          difficulty: "Easy",
          link: "https://lnkd.in/gk-T7rGy",
        },
        {
          title: "How will you design a Stack Overflow clone?",
          difficulty: "Medium",
          link: "https://lnkd.in/gakYwyXB",
        },
        {
          title: "How will you design a ticket booking system like BookMyShow?",
          difficulty: "Medium",
          link: "https://lnkd.in/g-MtGkkX",
        },
        {
          title: "How will you design a Black Jack Card Game?",
          difficulty: "Hard",
          link: "https://lnkd.in/ggvP9VpU",
        },
        {
          title: "How will you design a board game like chess?",
          difficulty: "Medium",
          link: "https://lnkd.in/g3DnBsA3",
        },
        {
          title:
            "How will you create a file-sharing system like Google Drive/ Dropbox?",
          difficulty: "Medium",
          link: "https://lnkd.in/ghmRS6JZ",
        },

        {
          title: "How will you design a URL shortener like bit.ly or goo.gl?",
          difficulty: "Medium",
          link: "https://lnkd.in/gXEcvQEX",
        },

        {
          title: "How will you design an ATM?",
          difficulty: "Medium",
          link: "https://lnkd.in/gsGPgZsJ",
        },
        {
          title: "How will you design a Vending Machine in Java?",
          difficulty: "Medium",
          link: "https://lnkd.in/gDYft4Mi",
        },
        {
          title: "How will you design a ride-sharing app like Uber or Ola?",
          difficulty: "Medium",
          link: "https://lnkd.in/g2gsjPFD",
        },
        {
          title: "How will you design an autocomplete feature?",
          difficulty: "Medium",
          link: "https://lnkd.in/gk2vvMn5",
        },
      ],
    },
  ];

  const systemDesignResources = [
    {
      title: "Scalable System Design - Social Media Platform",
      link: "https://leetcode.com/discuss/interview-experience/5073429/sii-or-principal-swtich-cycle-dr-desisgn",
      platform: "LeetCode",
    },
    {
      title: "System Design - Chat Application",
      link: "https://leetcode.com/discuss/interview-question/system-design/5071636/system-design-examples",
      platform: "LeetCode",
    },
    {
      title: "Scalable Web Architecture - E-commerce Platform",
      link: "https://leetcode.com/discuss/interview-question/system-design/5126821/frequently-ask-ed-new-design-hld-questions",
      platform: "LeetCode",
    },
    {
      title: "Distributed System Design - Video Streaming",
      link: "https://leetcode.com/discuss/interview-question/system-design/5124660/top-25-hld-sq-uestions-list",
      platform: "LeetCode",
    },
    {
      title: "Microservices Architecture - Payment System",
      link: "https://leetcode.com/discuss/interview-question/5177554/flipkart-sde2-machine-coding-round",
      platform: "LeetCode",
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "hard":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Interview Preparation Hub
        </h1>
        <p className="text-gray-600 text-lg">
          Complete resource collection for technical interviews
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg shadow-lg p-2">
        <button
          onClick={() => setActiveTab("companies")}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === "companies"
              ? "bg-blue-500 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          🏢 Company Prep
        </button>
        <button
          onClick={() => setActiveTab("competitive")}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === "competitive"
              ? "bg-green-500 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          🏆 Competitive Programming
        </button>
        <button
          onClick={() => setActiveTab("leetcode")}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === "leetcode"
              ? "bg-orange-500 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          💻 System Design Interview Questions
        </button>
        <button
          onClick={() => setActiveTab("system-design")}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === "system-design"
              ? "bg-purple-500 text-white shadow-md"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          🏗️ System Design
        </button>
      </div>

      {/* Company Interview Prep */}
      {activeTab === "companies" && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3">🏢</span>
            Company-wise Interview Preparation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyInterviews.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.company}
                  </h3>
                  <span className="text-blue-500">🔗</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.type}</p>
                <a
                  href={item.link}
                  className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                >
                  <span className="mr-2">📋</span>
                  View Prep Material
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Competitive Programming */}
      {activeTab === "competitive" && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3">🏆</span>
            Competitive Programming Course
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Complete DSA Mastery
            </h3>
            <p className="text-gray-700 mb-4">
              Master data structures and algorithms with our comprehensive
              competitive programming course. Perfect for coding interviews and
              competitive contests.
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <span className="mr-2">🚀</span>
              Start Learning
            </a>
          </div>
        </div>
      )}

      {/* LeetCode Problems */}
      {activeTab === "leetcode" && (
        <div className="space-y-6">
          {importantProblems.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-3">💻</span>
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.problems.map((problem, problemIndex) => (
                  <div
                    key={problemIndex}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-800 flex-1">
                        {problem.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                          problem.difficulty
                        )}`}
                      >
                        {problem.difficulty}
                      </span>
                    </div>
                    <a
                      href={problem.link}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
                    >
                      View Solution →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* System Design */}
      {activeTab === "system-design" && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3">🏗️</span>
            System Design Resources
          </h2>
          <div className="space-y-4">
            {systemDesignResources.map((resource, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-gray-800 flex-1">
                    {resource.title}
                  </h3>
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                    {resource.platform}
                  </span>
                </div>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">🔗</span>
                  View Discussion
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-2">🎯 DESIGNS</h3>
        <p className="text-blue-100">
          Master your interview skills with comprehensive preparation materials
        </p>
        <div className="flex justify-center space-x-6 mt-6 text-sm">
          <span className="flex items-center">
            <span className="mr-2">✅</span>
            500+ Problems
          </span>
          <span className="flex items-center">
            <span className="mr-2">🏢</span>
            Top Companies
          </span>
          <span className="flex items-center">
            <span className="mr-2">🏗️</span>
            System Design
          </span>
        </div>
      </div>
    </div>
  );
}

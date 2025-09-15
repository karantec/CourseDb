import React from "react";

export default function InterviewPrep() {
  const videoSections = [
    {
      title: "Java Interview Free Questions 1",
      link: "https://drive.google.com/file/d/1410D04xszc0g03kGZUW5P8a1vFKKG60z/view?usp=sharing",
    },
    {
      title: "Java Interview Free Questions 2",
      link: "https://drive.google.com/file/d/1YFBYXzC4BYsU2fSSNvgE-vAf8gXxjNYb/view?usp=sharing",
    },
    {
      title: "Java Interview Free Questions 3",
      link: "https://drive.google.com/file/d/19d9QOUGU_a7x8lxkAQP8Tz2M-F6fUX60/view?usp=sharing",
    },
    {
      title: "Java Interview Free Questions 4",
      link: "https://drive.google.com/file/d/128ZXUF8C-nvvQLI3Jd3M3XhUbqRVlxPk/view?usp=sharing",
    },
    {
      title: "Java Interview Free Questions 5",
      link: "https://drive.google.com/file/d/1L8Fs_jxOXxWdylP8jtXaPBLx-us4Aadt/view?usp=sharing",
    },
    {
      title: "Java Interview Free Questions 6",
      link: "https://drive.google.com/file/d/1LmkmWksxPun1oArDBg9zYFFs7FPeTsUJ/view?usp=sharing",
    },
  ];

  const experienceLinks = [
    {
      text: "Link",
      url: "https://docs.google.com/document/d/1nQb3mkOnP8a6B_RnBAb33F8T5_wlbmBf1wEdKK9hWos/edit",
    },
    {
      text: "Link",
      url: "https://docs.google.com/document/d/1BQKOF7JxGY-glf3ipjvSpC2UL6oPQ6ZcCLRs912JXCk/edit",
    },
    {
      text: "Link",
      url: "https://docs.google.com/document/d/139wX4PejtcIqz9Fkp6JQm1nv3cu4G_lhrBriaMZdqu4/edit",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">INTERVIEW</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>

      {/* Video Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className="text-red-500 mr-2 text-xl">▶️</span>
          <span className="text-lg font-semibold text-gray-700">
            Watch this video before coding interview (
            <a
              href="https://drive.google.com/file/d/1UcZasHMtK4fhErvVamKA6Cb3fuDuBMJV/view"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch This Video
            </a>
            )
          </span>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-green-500 mr-2 text-xl">✅</span>
          Key Interview Tips
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            • <strong>About how the tech-length of life:</strong> Clearly
            interview are not going to ask the number of significant which can
            be asked.
          </p>
          <p>
            • <strong>Never give up easily:</strong> Sometimes you might not
            give the correct answer, but never give up. Keep trying and show
            your problem-solving skills.
          </p>
          <p>
            • <strong>Practice coding:</strong> Make sure to do robust how much
            time is left. If tired, go left - quickly explain all the algorithm
            and free space complexity of data structures and information science
            as well as to order output. Even asking all big plus time.
          </p>
          <p>
            • <strong>Communication is key:</strong> Always explain your thought
            process. Talk through your solution step by step.
          </p>
          <p>
            • <strong>Time management:</strong> Be aware of time constraints.
            Don't spend too much time on any single part of the solution.
          </p>
        </div>
      </div>

      {/* Behavioral Questions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-purple-500 mr-2 text-xl">👥</span>
          Behavioral Interview Preparation
        </h2>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-2">
            <strong>
              Then prepare your intro and project + interview/work experience
              summary in detail with some questions that can be asked:
            </strong>
          </p>
          <div className="bg-red-100 p-3 rounded border-l-4 border-red-400">
            <p className="text-red-700 font-medium">
              Tell me about your previous data or brief and how fresh is it?
            </p>
          </div>
        </div>
      </div>

      {/* Technical Preparation */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-green-500 mr-2 text-xl">💻</span>
          Technical Knowledge Preparation
        </h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-4">
            <strong>1st - Managerial model prep</strong> - Get full knowledge of
            the company and their recent news before attending this round.
          </p>

          <div className="space-y-2">
            <p className="font-semibold text-gray-800">Study Resources:</p>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://github.com/ashishps1/awesome-behavioral-interviews"
                  className="text-blue-600 hover:text-blue-800 underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-1">🔗</span>
                  Behavioral Interview Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Java Interview Questions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Java Interview Questions
        </h2>
        <div className="grid gap-3">
          {videoSections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
            >
              <a
                href={section.link}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                <span className="mr-2">▶️</span>
                {section.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-orange-500 mr-2 text-xl">⏰</span>
          Previous Work Experience
        </h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-4">
            All these will explain to you how to explain previous work
            experience, previous projects, and design of the systems:
          </p>

          <div className="space-y-3">
            <div>
              <p className="font-semibold text-gray-800 mb-2">
                Experience of Java Backend SDE/2 Selected candidates:
              </p>
              <div className="flex flex-wrap gap-2">
                {experienceLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-blue-600 hover:text-blue-800 underline bg-white px-3 py-1 rounded border"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-2">
                How to Articulate and Explain your work experience in Java of
                previous company:
              </p>
              <a
                href="https://drive.google.com/file/d/1FchR0eagMnlHTP9wVyDQLfOVmNPKqM6r/view?usp=sharing"
                className="text-blue-600 hover:text-blue-800 underline bg-white px-3 py-1 rounded border inline-block"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-500 text-sm mt-8 p-4 bg-gray-50 rounded-lg">
        <p>
          Remember: Practice makes perfect. Good luck with your interview
          preparation! 🚀
        </p>
      </div>
    </div>
  );
}

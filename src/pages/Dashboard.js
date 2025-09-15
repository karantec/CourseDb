import React, { useEffect, useState } from "react";
import api from "../api/api";
import Home from "./Home";

const Dashboard = () => {
  const [modules, setModules] = useState([]);
  const [courseTitle, setCourseTitle] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get("/course/navigation");
        setCourseTitle(res.data.courseTitle);
        setModules(res.data.modules);
      } catch (err) {
        console.error(err);
        alert("You are not logged in or session expired!");
      }
    };
    fetchCourse();
  }, []);

  useEffect(() => {
    // Disable Copy / Paste
    const handleCopyPaste = (e) => {
      e.preventDefault();
      alert("Copy / Paste is disabled!");
    };

    // Disable Right Click
    const handleRightClick = (e) => {
      e.preventDefault();
      alert("Right-click is disabled!");
    };

    // Block certain key combinations
    const handleKeyDown = (e) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
        alert("Developer tools are disabled!");
      }
      // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
      if (
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
        alert("Developer tools are disabled!");
      }
    };

    document.addEventListener("copy", handleCopyPaste);
    document.addEventListener("paste", handleCopyPaste);
    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("copy", handleCopyPaste);
      document.removeEventListener("paste", handleCopyPaste);
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Home />
      {/* <ul>
        {modules.map((mod, idx) => (
          <li key={idx}>{mod}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Dashboard;

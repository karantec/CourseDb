import React, { useEffect, useState } from "react";

const Login = () => {
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("error") === "unauthorized") {
      setError("❌ You are not authorized. Contact admin.");
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login to Course</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleGoogleLogin}>Login with Gmail</button>
    </div>
  );
};

export default Login;

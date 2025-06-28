import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Email and password fields are kept for design only, no validation is required
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // No validation/auth needed, just simulate loading and navigate
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/member_profile");
    } catch (error) {
      // Handle login error if needed
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      style={{ 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        background: `linear-gradient(135deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`
      }}
    >
      <div 
        style={{
          backgroundColor: "white",
          padding: "3rem",
          borderRadius: "1rem",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          width: "100%",
          maxWidth: "400px"
        }}
      >
        <h2 
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: PRIMARY,
            textAlign: "center"
          }}
        >
          Member Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label 
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "0.5rem"
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s",
                backgroundColor: isLoading ? "#f9fafb" : "white"
              }}
              onFocus={(e) => e.target.style.borderColor = PRIMARY}
              onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
            />
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label 
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "0.5rem"
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s",
                backgroundColor: isLoading ? "#f9fafb" : "white"
              }}
              onFocus={(e) => e.target.style.borderColor = PRIMARY}
              onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              backgroundColor: isLoading ? "#9ca3af" : PRIMARY,
              color: "white",
              padding: "0.75rem 1rem",
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              marginBottom: "1rem"
            }}
            onMouseOver={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = "#1e40af";
                e.currentTarget.style.transform = "translateY(-1px)";
              }
            }}
            onMouseOut={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = PRIMARY;
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div style={{ textAlign: "center" }}>
          <a 
            href="#"
            style={{
              color: PRIMARY,
              textDecoration: "none",
              fontSize: "0.875rem"
            }}
            onMouseOver={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "underline"}
            onMouseOut={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "none"}
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
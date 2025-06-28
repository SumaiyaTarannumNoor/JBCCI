import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PRIMARY = "#18069e";
const SECONDARY = "#e6aa05";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Optionally, you can handle error, loading, etc.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you should add authentication logic.
    // For now, redirect to member profile page after login.
    navigate("/login_page/member_profile");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#edeafd] via-white to-[#fff8e3]">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
        <img
          src="/assets/logo/logo.png"
          alt="JBCCI Logo"
          className="h-20 w-20 mb-6 rounded-full border-2 border-primary object-contain"
        />
        <h1 className="text-2xl font-bold mb-6" style={{ color: PRIMARY }}>
          Member Login
        </h1>
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              placeholder="Enter your email"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              placeholder="Enter your password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold transition-all"
            style={{ background: SECONDARY, color: PRIMARY }}
          >
            Login
          </button>
        </form>
        <div className="text-sm mt-4 text-gray-500">
          <a href="#" className="hover:underline text-primary">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
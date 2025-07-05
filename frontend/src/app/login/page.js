"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const handleLogin = async (e) => {

    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid login");
        return;
      }

      // Save token, redirect to home
      localStorage.setItem("token", data.token);
      login(data);
      router.push("/");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF4FF] px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#1E1B4B] mb-6">
          👋 Welcome Back
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 text-sm mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none text-sm"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full outline-none text-sm"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4C1D95] text-white py-2 rounded hover:bg-[#3b1580] transition"
          >
            🔐 Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-[#4C1D95] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Signup response:", data); 

      if (res.ok) {
        setMessage("✅ User Registered Successfully!");
        login(data);

        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        setMessage(`❌ Error: ${data.message || "Registration failed"}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("❌ Server error");
    }
  };


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#FDF4FF] px-4 py-12">

        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#1E1B4B]">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C084FC]"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C084FC]"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C084FC]"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C084FC] hover:bg-[#4C1D95] text-white font-medium py-2 rounded-md transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[#4C1D95] font-medium hover:underline">
              Log In
            </a>
          </p>
        </div>

      </div>
      {message && (
        <div className={`mt-4 absolute right-0 top-[10vh] pe-10 ps-2 rounded-l-md pb-1 pt-4 text-l border-b-2 border-[#C084FC] text-center  ${message == '✅ User Registered Successfully!' ? "text-[green] ": "text-red-500"} font-medium`}>
          {message}
        </div>
      )}
    </>
  );
}

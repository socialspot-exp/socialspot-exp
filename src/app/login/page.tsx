"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.push("/");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Top Navigation */}
      <div className="flex items-center p-4 justify-between">
        <Link
          href="/"
          className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
          SocialSpot Exp
        </h2>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="px-4 py-3"
      >
        <div
          className="relative bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[320px] bg-slate-800"
          style={{
            backgroundImage:
              'linear-gradient(to top, rgba(35, 26, 15, 0.9) 0%, rgba(35, 26, 15, 0.2) 60%), url("https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80")',
          }}
        >
          <div className="p-6">
            <div className="mb-2 inline-flex items-center justify-center p-2 bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined text-3xl">hub</span>
            </div>
            <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight">
              Join the Experience
            </h1>
            <p className="text-white/80 mt-2 text-base">
              Connect, discover, and share your world.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex flex-col gap-4 px-4 py-6"
      >
        {/* Email Field */}
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold pb-2 px-1">
            Email Address
          </p>
          <div className="relative">
            <input
              className="form-input flex w-full rounded-xl border-slate-200 dark:border-primary/20 bg-white dark:bg-primary/5 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 text-base transition-all"
              placeholder="your@email.com"
              type="email"
            />
          </div>
        </label>

        {/* Password Field */}
        <label className="flex flex-col w-full">
          <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold pb-2 px-1">
            Password
          </p>
          <div className="flex w-full items-stretch relative">
            <input
              className="form-input flex w-full rounded-xl border-slate-200 dark:border-primary/20 bg-white dark:bg-primary/5 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 text-base transition-all"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </label>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <a
            className="text-primary text-sm font-semibold hover:underline"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <motion.button
          onClick={handleLogin}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-lg shadow-primary/20 transition-all mt-2"
        >
          Log In
        </motion.button>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-4 px-4 py-4">
        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-primary/20"></div>
        <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
          or continue with
        </span>
        <div className="h-[1px] flex-1 bg-slate-200 dark:bg-primary/20"></div>
      </div>

      {/* Social Logins */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="grid grid-cols-2 gap-4 px-4 py-2"
      >
        <button className="flex items-center justify-center gap-2 h-14 rounded-xl border border-slate-200 dark:border-primary/20 bg-white dark:bg-primary/5 hover:bg-slate-50 dark:hover:bg-primary/10 transition-all">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            ></path>
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            ></path>
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.25.81-.59z"
              fill="#FBBC05"
            ></path>
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            ></path>
          </svg>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
            Google
          </span>
        </button>
        <button className="flex items-center justify-center gap-2 h-14 rounded-xl border border-slate-200 dark:border-primary/20 bg-white dark:bg-primary/5 hover:bg-slate-50 dark:hover:bg-primary/10 transition-all">
          <svg
            className="w-5 h-5 fill-slate-900 dark:fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M17.05 20.28c-.98.95-2.05 1.72-3.15 1.72-1.07 0-1.42-.66-2.67-.66-1.28 0-1.68.64-2.67.66-1.11 0-2.32-.88-3.37-1.91-2.15-2.1-3.61-5.91-3.61-9.2 0-3.32 1.63-5.12 3.31-5.12 1.04 0 1.83.6 2.51.6.68 0 1.65-.67 2.88-.67 1.25 0 2.29.56 2.94 1.39-2.58 1.34-2.17 4.94.39 6.13-.91 2.22-1.92 4.49-4.56 7.06zM12.03 5.43c-.11-1.9 1.4-3.55 3.07-3.43.19 1.79-1.45 3.51-3.07 3.43z"></path>
          </svg>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
            Apple
          </span>
        </button>
      </motion.div>

      {/* Footer / Sign Up Link */}
      <div className="mt-auto flex flex-col items-center p-8 gap-2">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Don't have an account?{" "}
          <Link className="text-primary font-bold hover:underline" href="/signup">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Bottom Spacer */}
      <div className="h-6 bg-background-light dark:bg-background-dark"></div>
    </div>
  );
}

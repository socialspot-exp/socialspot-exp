"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSignUp = () => {
    if (agreedToTerms) {
      login();
      router.push("/");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* Top Navigation */}
      <div className="flex items-center p-4 pb-2 justify-between">
        <Link
          href="/login"
          className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-primary/20 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
          Sign Up
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
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[180px] border border-primary/10"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80")',
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-background-dark/80 to-transparent p-6 flex flex-col justify-end">
            <h1 className="text-white text-[32px] font-bold leading-tight">
              Create Account
            </h1>
            <p className="text-white/90 text-base font-normal leading-normal">
              Join SocialSpot Exp today and start exploring.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex flex-col gap-4 px-4 py-6"
      >
        {/* Full Name */}
        <label className="flex flex-col gap-2">
          <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">
            Full Name
          </span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
              person
            </span>
            <input
              className="w-full rounded-lg border border-primary/20 bg-slate-100 dark:bg-primary/10 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-12 pr-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-normal transition-all"
              placeholder="Enter your full name"
              type="text"
            />
          </div>
        </label>

        {/* Email Address */}
        <label className="flex flex-col gap-2">
          <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">
            Email Address
          </span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
              mail
            </span>
            <input
              className="w-full rounded-lg border border-primary/20 bg-slate-100 dark:bg-primary/10 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-12 pr-4 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-normal transition-all"
              placeholder="your@email.com"
              type="email"
            />
          </div>
        </label>

        {/* Password */}
        <label className="flex flex-col gap-2">
          <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">
            Password
          </span>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
              lock
            </span>
            <input
              className="w-full rounded-lg border border-primary/20 bg-slate-100 dark:bg-primary/10 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary h-14 pl-12 pr-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-normal transition-all"
              placeholder="Create a password"
              type={showPassword ? "text" : "password"}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </label>

        {/* Terms & Conditions */}
        <div className="flex items-start gap-3 py-2">
          <div className="flex h-5 items-center">
            <input
              className="h-5 w-5 rounded border-primary/20 bg-slate-100 dark:bg-primary/10 text-primary focus:ring-primary/50 transition-all cursor-pointer"
              id="terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
          </div>
          <label
            className="text-sm text-slate-600 dark:text-slate-400 leading-tight"
            htmlFor="terms"
          >
            I agree to the{" "}
            <a className="text-primary font-medium hover:underline" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-primary font-medium hover:underline" href="#">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Sign Up Button */}
        <motion.button
          onClick={handleSignUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!agreedToTerms}
          className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all mt-2 ${
            agreedToTerms
              ? "bg-primary hover:bg-primary/90 text-white shadow-primary/20"
              : "bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed"
          }`}
        >
          Sign Up
        </motion.button>

        {/* Divider */}
        <div className="relative my-6">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background-light dark:bg-background-dark px-4 text-slate-500 font-medium">
              Or sign up with
            </span>
          </div>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 border border-primary/20 bg-white dark:bg-primary/5 hover:bg-slate-50 dark:hover:bg-primary/10 py-3 rounded-lg transition-all font-medium text-slate-700 dark:text-slate-200">
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-primary/20 bg-white dark:bg-primary/5 hover:bg-slate-50 dark:hover:bg-primary/10 py-3 rounded-lg transition-all font-medium text-slate-700 dark:text-slate-200">
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M17.05 20.28c-.96.95-2.06 1.72-3.32 2.12-.9.29-1.84.44-2.78.44-1.12 0-2.19-.19-3.18-.57-1-.38-1.91-.93-2.7-1.63-1.57-1.39-2.58-3.41-2.58-5.63 0-2.22 1.01-4.24 2.58-5.63.79-.7 1.7-1.25 2.7-1.63.99-.38 2.06-.57 3.18-.57.94 0 1.88.15 2.78.44 1.26.4 2.36 1.17 3.32 2.12l-1.5 1.5c-.56-.55-1.19-.99-1.9-1.27-.6-.23-1.24-.35-1.89-.35-.78 0-1.53.13-2.22.39-.7.26-1.33.64-1.88 1.13-1.1 1-1.8 2.39-1.8 3.96 0 1.57.7 2.96 1.8 3.96.55.49 1.18.87 1.88 1.13.69.26 1.44.39 2.22.39.65 0 1.29-.12 1.89-.35.71-.28 1.34-.72 1.9-1.27l1.5 1.5zM12 10V7h2v3h3v2h-3v3h-2v-3H9v-2h3z"></path>
            </svg>
            Apple
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-8 text-center pb-8">
          <p className="text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link
              className="text-primary font-bold hover:underline ml-1"
              href="/login"
            >
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

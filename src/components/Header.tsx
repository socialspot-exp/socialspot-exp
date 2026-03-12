"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const handleAccountClick = () => {
    if (isLoggedIn) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
      <div className="flex items-center gap-2">
        <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-white text-2xl">
            celebration
          </span>
        </div>
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          SocialSpot <span className="text-primary">Exp</span>
        </h1>
      </div>
      <button
        onClick={handleAccountClick}
        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 hover:bg-primary/20 transition-all active:scale-95"
      >
        <span className="material-symbols-outlined text-primary">
          account_circle
        </span>
      </button>
    </nav>
  );
}

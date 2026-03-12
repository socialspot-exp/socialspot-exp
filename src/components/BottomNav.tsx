"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: "home", label: "Home", href: "/" },
    { icon: "explore", label: "Explore", href: "/explore" },
    { icon: "calendar_month", label: "Events", href: "/events" },
    { icon: "person", label: "Profile", href: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#2b2419] border-t border-primary/20 px-4 pb-6 pt-2 z-50">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              className="flex flex-col items-center gap-1"
              href={item.href}
            >
              <div
                className={`flex items-center justify-center transition-all active:scale-90 ${
                  isActive
                    ? "bg-primary w-12 h-12 rounded-full"
                    : "w-12 h-12"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-2xl ${
                    isActive
                      ? "text-background-dark"
                      : "text-[#7a7a7a]"
                  }`}
                >
                  {item.icon}
                </span>
              </div>
              <p
                className={`text-xs font-medium leading-normal tracking-tight ${
                  isActive ? "text-primary" : "text-[#7a7a7a]"
                }`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

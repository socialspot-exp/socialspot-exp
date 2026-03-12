"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState("Today");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const filters = ["Today", "This Weekend", "Next Week", "All Dates"];

  const categories = [
    { icon: "music_note", label: "Music" },
    { icon: "palette", label: "Art" },
    { icon: "public", label: "Cultural" },
    { icon: "restaurant", label: "Food" },
    { icon: "sports_basketball", label: "Sports" },
    { icon: "memory", label: "Tech" },
  ];

  const trendingEvents = [
    {
      title: "Neon Pulse Festival",
      location: "Downtown Arena",
      date: "JUL 24",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    },
    {
      title: "Modern Visions Expo",
      location: "The Grand Gallery",
      date: "JUL 26",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
    },
  ];

  const nearbyEvents = [
    {
      title: "Mixology Workshop",
      venue: "Gilded Lounge",
      time: "7 PM",
      distance: "0.4 miles away",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80",
      liked: true,
    },
    {
      title: "Street Food Safari",
      venue: "Market Square",
      time: "12 PM",
      distance: "1.2 miles away",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
      liked: false,
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-24">
      <Header />

      {/* Search & Filters */}
      <div className="sticky top-[73px] z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold tracking-tight">Explore</h2>
          <button className="p-2 rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center mb-4">
          <div className="absolute left-3 text-slate-500">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            className="w-full pl-10 pr-4 py-3 bg-slate-200/50 dark:bg-primary/10 border-none rounded-xl focus:ring-2 focus:ring-primary text-sm placeholder:text-slate-500 outline-none"
            placeholder="Search events, artists, or venues"
            type="text"
          />
        </div>

        {/* Date Filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-slate-200 dark:bg-primary/20 text-slate-700 dark:text-slate-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-4"
      >
        <h3 className="px-4 text-lg font-bold mb-3">Categories</h3>
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
          {categories.map((category, idx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 shrink-0 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">
                  {category.icon}
                </span>
              </div>
              <span className="text-xs font-medium">{category.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Trending Events */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mt-8"
      >
        <div className="flex items-center justify-between px-4 mb-4">
          <h3 className="text-lg font-bold">Trending Events</h3>
          <button className="text-sm font-semibold text-primary">
            See All
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar">
          {trendingEvents.map((event, idx) => (
            <Link key={event.title} href={`/event/${idx + 1}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-64 shrink-0 rounded-2xl overflow-hidden bg-slate-200 dark:bg-primary/5 shadow-lg cursor-pointer"
              >
              <div
                className="h-40 w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url('${event.image}')` }}
              >
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 text-white text-xs font-bold">
                  {event.date}
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-bold text-base mb-1">{event.title}</h4>
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  <span>{event.location}</span>
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Discover Nearby */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-8 px-4"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Discover Nearby</h3>
          <div className="flex bg-slate-200 dark:bg-primary/10 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1 rounded-md text-xs font-bold ${
                viewMode === "list"
                  ? "bg-white dark:bg-primary"
                  : "text-slate-500"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`px-3 py-1 rounded-md text-xs font-bold ${
                viewMode === "map"
                  ? "bg-white dark:bg-primary"
                  : "text-slate-500"
              }`}
            >
              Map
            </button>
          </div>
        </div>

        {/* Map Preview */}
        <div className="rounded-2xl overflow-hidden h-40 w-full relative mb-4 bg-slate-300 dark:bg-primary/20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-primary text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
              <span className="material-symbols-outlined">explore</span>
              Open Map View
            </button>
          </div>
        </div>

        {/* Nearby Events List */}
        <div className="space-y-4">
          {nearbyEvents.map((event) => (
            <div
              key={event.title}
              className="flex gap-4 p-3 bg-slate-100 dark:bg-primary/5 rounded-2xl items-center border border-transparent dark:hover:border-primary/30 transition-colors"
            >
              <div
                className="w-20 h-20 rounded-xl bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url('${event.image}')` }}
              ></div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  {event.distance}
                </span>
                <h4 className="font-bold text-sm">{event.title}</h4>
                <p className="text-xs text-slate-500 mt-1">
                  {event.venue} • {event.time}
                </p>
              </div>
              <button
                className={event.liked ? "text-primary" : "text-slate-400"}
              >
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      <BottomNav />
    </div>
  );
}

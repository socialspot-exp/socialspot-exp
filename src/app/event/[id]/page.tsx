"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EventDetailsPage() {
  const router = useRouter();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const relatedEvents = [
    {
      id: 1,
      title: "Midnight Warehouse",
      date: "Oct 28",
      location: "Brooklyn, NY",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    },
    {
      id: 2,
      title: "Synthwave Sessions",
      date: "Nov 05",
      location: "Downtown Arena",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    },
    {
      id: 3,
      title: "Winter Solstice Rave",
      date: "Dec 12",
      location: "Manhattan, NY",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-light dark:bg-background-dark">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between">
        <button
          onClick={() => router.back()}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-primary/20 cursor-pointer active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-slate-900 dark:text-primary">
            arrow_back
          </span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          Event Details
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-full size-10 bg-slate-200 dark:bg-primary/20 text-primary active:scale-95 transition-all">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="px-4 py-2"
      >
        <div
          className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl shadow-2xl"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80")',
          }}
        ></div>
      </motion.div>

      {/* Event Identity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="px-4 pt-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <span className="size-2 rounded-full bg-primary animate-pulse"></span>
          Music Festival
        </div>
        <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-extrabold leading-tight mb-6">
          Neon Pulse Festival 2024
        </h1>
      </motion.div>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="space-y-4 px-4"
      >
        {/* Date & Time */}
        <div className="flex items-center gap-4 bg-white dark:bg-primary/5 p-4 rounded-xl border border-slate-200 dark:border-primary/10">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
            <span className="material-symbols-outlined">calendar_today</span>
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-slate-900 dark:text-slate-100 text-base font-bold">
              Saturday, Oct 21, 2024
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              7:00 PM - 2:00 AM
            </p>
          </div>
          <button className="text-primary text-sm font-bold px-3 py-1 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
            Add
          </button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 bg-white dark:bg-primary/5 p-4 rounded-xl border border-slate-200 dark:border-primary/10">
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-slate-900 dark:text-slate-100 text-base font-bold">
              Central Park, NYC
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Great Lawn Arena
            </p>
          </div>
          <div className="size-10 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=200&q=80"
              alt="Map preview"
            />
          </div>
        </div>

        {/* Organizer */}
        <div className="flex items-center gap-4 bg-white dark:bg-primary/5 p-4 rounded-xl border border-slate-200 dark:border-primary/10">
          <div className="shrink-0 size-12 rounded-full overflow-hidden border-2 border-primary">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
              alt="Organizer"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-slate-900 dark:text-slate-100 text-base font-bold">
              SocialSpot Exp
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Organizer • 12k followers
            </p>
          </div>
          <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-primary/90 transition-colors active:scale-95">
            Follow
          </button>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="px-4 py-8"
      >
        <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-3">
          About the Event
        </h3>
        <p
          className={`text-slate-600 dark:text-slate-400 leading-relaxed ${
            !showFullDescription ? "line-clamp-4" : ""
          }`}
        >
          Experience the ultimate electronic music journey at the Neon Pulse
          Festival. Featuring world-class DJs, immersive laser shows, and
          interactive art installations. Join thousands of fans under the stars
          in the heart of New York City for a night that pulses with energy and
          light. Get ready for an unforgettable experience with multiple stages,
          food trucks, and exclusive VIP areas.
        </p>
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-primary font-bold mt-2 flex items-center gap-1 hover:underline"
        >
          {showFullDescription ? "Read less" : "Read more"}
          <span className="material-symbols-outlined text-sm">
            {showFullDescription ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
        </button>
      </motion.div>

      {/* Related Events Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="py-4"
      >
        <div className="flex justify-between items-center px-4 mb-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
            You might also like
          </h3>
          <button className="text-primary text-sm font-bold uppercase tracking-tight">
            See All
          </button>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 hide-scrollbar">
          {relatedEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[240px] bg-white dark:bg-primary/5 rounded-xl overflow-hidden border border-slate-200 dark:border-primary/10 cursor-pointer"
            >
              <div
                className="h-32 w-full bg-center bg-cover"
                style={{ backgroundImage: `url('${event.image}')` }}
              ></div>
              <div className="p-3">
                <p className="text-primary text-[10px] font-bold uppercase">
                  {event.date}
                </p>
                <p className="text-slate-900 dark:text-slate-100 font-bold truncate">
                  {event.title}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  {event.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-primary/10 p-4 pb-8 flex items-center justify-between z-50">
        <div className="flex flex-col">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
            Price starting from
          </p>
          <p className="text-slate-900 dark:text-slate-100 text-2xl font-black">
            $85.00
          </p>
        </div>
        <Link href="/checkout">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all"
          >
            Book Tickets
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

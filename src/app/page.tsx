"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 8,
    hours: 14,
    minutes: 52,
    seconds: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-24">
      <Header />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="px-4 py-6"
      >
        <div className="relative overflow-hidden rounded-xl bg-primary/10 p-6 min-h-[240px] flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/30 rounded-full -ml-12 -mb-12 blur-2xl"></div>
          <h2 className="text-3xl font-extrabold leading-tight mb-6 relative z-10">
            Where <span className="text-primary">Experiences</span> Turn Into
            Memories
          </h2>
          <div className="relative z-10">
            <label className="flex items-center bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-primary/10 h-14 px-4">
              <span className="material-symbols-outlined text-slate-400 mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 w-full text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none"
                placeholder="Search for events..."
                type="text"
              />
              <button className="bg-primary text-white p-2 rounded-lg flex items-center justify-center ml-2">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </label>
          </div>
        </div>
      </motion.div>

      {/* Categories Section */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="py-4"
      >
        <div className="px-4 flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Categories</h3>
          <a className="text-primary text-sm font-semibold" href="#">
            See all
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 hide-scrollbar">
          {[
            { icon: "music_note", label: "Music" },
            { icon: "palette", label: "Art" },
            { icon: "festival", label: "Cultural" },
            { icon: "restaurant", label: "Food" },
            { icon: "sports_soccer", label: "Sports" },
            { icon: "theater_comedy", label: "Shows" },
          ].map((category, idx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 shrink-0 cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${
                  idx === 0 ? "bg-primary/20" : "bg-primary/10"
                } flex items-center justify-center text-primary transition-all hover:scale-110`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {category.icon}
                </span>
              </div>
              <span className="text-xs font-medium">{category.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="py-6"
      >
        <div className="px-4 flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Upcoming Events</h3>
          <a className="text-primary text-sm font-semibold" href="#">
            View more
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 hide-scrollbar">
          {[
            {
              title: "Vibe City Music Festival",
              location: "Central Park, NYC",
              price: "$45.00",
              date: { month: "Oct", day: "12" },
              image:
                "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
            },
            {
              title: "Halloween Techno Night",
              location: "Warehouse 5, London",
              price: "$30.00",
              date: { month: "Oct", day: "28" },
              image:
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
            },
          ].map((event, idx) => (
            <Link key={event.title} href={`/event/${idx + 1}`}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-72 shrink-0 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-primary/5 cursor-pointer"
              >
              <div className="h-40 relative">
                <img
                  className="w-full h-full object-cover"
                  src={event.image}
                  alt={event.title}
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg px-2 py-1 text-center">
                  <p className="text-[10px] font-bold text-primary uppercase leading-tight">
                    {event.date.month}
                  </p>
                  <p className="text-lg font-extrabold leading-tight">
                    {event.date.day}
                  </p>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">
                    favorite
                  </span>
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-base mb-1 line-clamp-1">
                  {event.title}
                </h4>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mb-3">
                  <span className="material-symbols-outlined text-sm mr-1">
                    location_on
                  </span>
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-primary font-bold">{event.price}</p>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold">
                    Book Now
                  </button>
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Featured Celebration */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="px-4 py-6"
      >
        <div className="relative bg-primary/20 rounded-2xl p-6 overflow-hidden border border-primary/20">
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Special Event
            </span>
            <h3 className="text-2xl font-black mb-1">
              Fagun Holi Festival 2024
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-[240px]">
              Celebrate the festival of colors with live music and organic
              gulal!
            </p>
            {/* Countdown Timer */}
            <div className="flex gap-3 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center font-extrabold text-lg border border-primary/20">
                  {String(countdown.days).padStart(2, "0")}
                </div>
                <span className="text-[10px] mt-1 font-bold text-slate-500">
                  DAYS
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center font-extrabold text-lg border border-primary/20">
                  {String(countdown.hours).padStart(2, "0")}
                </div>
                <span className="text-[10px] mt-1 font-bold text-slate-500">
                  HRS
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center font-extrabold text-lg border border-primary/20">
                  {String(countdown.minutes).padStart(2, "0")}
                </div>
                <span className="text-[10px] mt-1 font-bold text-slate-500">
                  MINS
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center font-extrabold text-lg border border-primary/20">
                  {String(countdown.seconds).padStart(2, "0")}
                </div>
                <span className="text-[10px] mt-1 font-bold text-slate-500">
                  SECS
                </span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-white py-4 rounded-xl font-extrabold text-lg shadow-xl shadow-primary/30"
            >
              Get Tickets Early
            </motion.button>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
        </div>
      </motion.section>

      {/* Community Moments */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="py-6 mb-8"
      >
        <div className="px-4 flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Community Moments</h3>
          <span className="text-slate-500 text-xs font-medium">
            #SocialSpotExp
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 px-4">
          {[
            "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
            "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=400&q=80",
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
          ].map((src, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-xl overflow-hidden bg-slate-200"
            >
              <img
                className="w-full h-full object-cover"
                src={src}
                alt="Community moment"
              />
            </div>
          ))}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-primary/20 flex items-center justify-center">
            <img
              className="w-full h-full object-cover opacity-30"
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80"
              alt="More moments"
            />
            <span className="absolute text-primary font-extrabold text-sm">
              +2.4k
            </span>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="py-8 bg-[#111827] text-white"
      >
        <div className="px-4 flex items-end justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">
              What Our <br />
              <span className="text-primary">Community</span> Says
            </h3>
          </div>
          <div className="flex gap-2 mb-1">
            <button className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
            </button>
            <button className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center bg-slate-800">
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 hide-scrollbar">
          {[
            {
              name: "Aria Sharma",
              role: "Regular Attendee",
              text: "SocialSpot events are unlike anything else. The energy is purely magical and the people you meet become lifelong friends.",
            },
            {
              name: "Rohan Verma",
              role: "Photographer",
              text: "The organization is seamless. From booking tickets to the actual event experience, everything is premium and thoughtful.",
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="shrink-0 w-[280px] bg-slate-900/50 border border-slate-800 p-5 rounded-2xl"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-primary text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-300 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="text-xs font-bold">{testimonial.name}</p>
                  <p className="text-[10px] text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA Cards Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="px-4 py-8 space-y-4 bg-background-light dark:bg-background-dark"
      >
        {/* Volunteer Card */}
        <div className="relative overflow-hidden bg-[#ff8c00] rounded-2xl p-6 text-white">
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-2">Become a Volunteer</h4>
            <p className="text-sm text-white/80 mb-6 max-w-[240px]">
              Be a part of the team that makes magic happen on the ground. Gain
              experience and join the family.
            </p>
            <button className="bg-white text-primary px-6 py-2 rounded-lg text-sm font-bold shadow-lg">
              Join the Team
            </button>
          </div>
          <div className="absolute bottom-0 right-0 opacity-10">
            <span className="material-symbols-outlined text-[120px]">
              favorite
            </span>
          </div>
        </div>

        {/* Partner Card */}
        <div className="relative overflow-hidden bg-[#1a140d] rounded-2xl p-6 text-white border border-white/5">
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-2">Partner with Us</h4>
            <p className="text-sm text-slate-400 mb-6 max-w-[240px]">
              Collaborate with SocialSpot to bring your creative vision to life
              or sponsor our upcoming festivals.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">
              Collaborate
            </button>
          </div>
          <div className="absolute bottom-0 right-0 opacity-10">
            <span className="material-symbols-outlined text-[100px] -mr-4 -mb-4">
              handshake
            </span>
          </div>
        </div>
      </motion.section>

      <BottomNav />
    </div>
  );
}

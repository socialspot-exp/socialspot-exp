"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import TicketModal from "@/components/TicketModal";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"tickets" | "saved" | "memories">(
    "tickets"
  );
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const upcomingTickets = [
    {
      id: 1,
      title: "Neon Pulse Festival",
      date: "Sat, Oct 14",
      time: "8:00 PM",
      location: "Pier 70, San Francisco",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
      daysUntil: 2,
      ticketId: "#TKT-88219",
    },
    {
      id: 2,
      title: "Sunset Jazz Lounge",
      date: "Oct 21",
      time: "7:00 PM",
      location: "The Fillmore",
      image:
        "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80",
      ticketId: "#TKT-88220",
    },
  ];

  const savedEvents = [
    {
      id: 1,
      title: "Tech Conference 2026",
      date: "Nov 5, 2026",
      location: "Moscone Center",
      price: "$299.00",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    },
    {
      id: 2,
      title: "Food & Wine Festival",
      date: "Nov 12, 2026",
      location: "Golden Gate Park",
      price: "$75.00",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    },
  ];

  const memories = [
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80",
    "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=400&q=80",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&q=80",
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark pb-24">
      {/* Header */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
        <div className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          Profile
        </h1>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-primary/10 text-slate-900 dark:text-slate-100">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      {/* Profile Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex p-6"
      >
        <div className="flex w-full flex-col gap-6 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary shadow-lg shadow-primary/20"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80')",
                }}
              ></div>
              <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-2 border-background-dark">
                <span className="material-symbols-outlined text-sm block">
                  verified
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-slate-900 dark:text-slate-100 text-2xl font-extrabold leading-tight tracking-tight text-center">
                Alex Johnson
              </p>
              <p className="text-slate-500 dark:text-primary/70 text-sm font-medium leading-normal text-center mt-1">
                <span className="material-symbols-outlined text-xs align-middle mr-1">
                  location_on
                </span>
                San Francisco, CA
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed text-center mt-2 max-w-[280px]">
                Event enthusiast & nightlife photographer. Always looking for
                the next big beat in the city.
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full max-w-sm">
            <button className="flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide transition-all active:scale-95 shadow-lg shadow-primary/20">
              Edit Profile
            </button>
            <button className="size-12 flex cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary/10 dark:bg-primary/20 text-primary transition-all active:scale-95">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex flex-wrap gap-3 px-4 py-3"
      >
        <div className="flex min-w-[100px] flex-1 basis-[fit-content] flex-col gap-1 rounded-2xl border border-primary/10 bg-primary/5 p-4 items-center text-center">
          <p className="text-slate-900 dark:text-slate-100 tracking-tight text-xl font-extrabold leading-tight">
            24
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            Events
          </p>
        </div>
        <div className="flex min-w-[100px] flex-1 basis-[fit-content] flex-col gap-1 rounded-2xl border border-primary/10 bg-primary/5 p-4 items-center text-center">
          <p className="text-slate-900 dark:text-slate-100 tracking-tight text-xl font-extrabold leading-tight">
            1.2k
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            Followers
          </p>
        </div>
        <div className="flex min-w-[100px] flex-1 basis-[fit-content] flex-col gap-1 rounded-2xl border border-primary/10 bg-primary/5 p-4 items-center text-center">
          <p className="text-slate-900 dark:text-slate-100 tracking-tight text-xl font-extrabold leading-tight">
            850
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            Following
          </p>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="sticky top-[72px] z-10 bg-background-light dark:bg-background-dark pt-2"
      >
        <div className="flex border-b border-primary/10 px-4 justify-between">
          <button
            onClick={() => setActiveTab("tickets")}
            className={`flex flex-col items-center justify-center border-b-2 ${
              activeTab === "tickets"
                ? "border-primary text-primary"
                : "border-transparent text-slate-400"
            } pb-3 pt-4 flex-1`}
          >
            <p className="text-sm font-bold leading-normal tracking-tight">
              My Tickets
            </p>
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`flex flex-col items-center justify-center border-b-2 ${
              activeTab === "saved"
                ? "border-primary text-primary"
                : "border-transparent text-slate-400"
            } pb-3 pt-4 flex-1`}
          >
            <p className="text-sm font-bold leading-normal tracking-tight">
              Saved
            </p>
          </button>
          <button
            onClick={() => setActiveTab("memories")}
            className={`flex flex-col items-center justify-center border-b-2 ${
              activeTab === "memories"
                ? "border-primary text-primary"
                : "border-transparent text-slate-400"
            } pb-3 pt-4 flex-1`}
          >
            <p className="text-sm font-bold leading-normal tracking-tight">
              Memories
            </p>
          </button>
        </div>
      </motion.div>

      {/* Tab Content: My Tickets */}
      {activeTab === "tickets" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 flex flex-col gap-4"
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-base">
              Upcoming (2)
            </h3>
            <span className="text-primary text-xs font-bold uppercase cursor-pointer">
              View All
            </span>
          </div>

          {/* Featured Ticket Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-primary/5 flex flex-col"
          >
            <div
              className="h-32 w-full bg-center bg-cover relative"
              style={{
                backgroundImage: `url('${upcomingTickets[0].image}')`,
              }}
            >
              <div className="absolute top-3 right-3 bg-white/90 dark:bg-background-dark/90 px-2 py-1 rounded-lg text-[10px] font-bold text-primary backdrop-blur-sm">
                IN {upcomingTickets[0].daysUntil} DAYS
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div className="flex flex-col">
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">
                  {upcomingTickets[0].title}
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-xs text-primary">
                    calendar_month
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    {upcomingTickets[0].date} • {upcomingTickets[0].time}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-primary">
                    location_on
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    {upcomingTickets[0].location}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTicket(upcomingTickets[0])}
                className="size-14 rounded-xl bg-white dark:bg-background-dark border border-primary/20 flex items-center justify-center shadow-sm"
              >
                <span className="material-symbols-outlined text-3xl text-slate-900 dark:text-slate-100">
                  qr_code_2
                </span>
              </button>
            </div>
            <div className="px-4 pb-4">
              <button
                onClick={() => setSelectedTicket(upcomingTickets[0])}
                className="w-full h-11 bg-primary/20 dark:bg-primary/30 text-primary rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-colors"
              >
                View Ticket Details
              </button>
            </div>
          </motion.div>

          {/* Minimal Ticket Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex gap-4 p-4 rounded-2xl border border-primary/10 bg-white dark:bg-white/5 items-center cursor-pointer"
          >
            <div
              className="size-16 rounded-xl bg-center bg-cover shrink-0"
              style={{
                backgroundImage: `url('${upcomingTickets[1].image}')`,
              }}
            ></div>
            <div className="flex-1">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm leading-tight">
                {upcomingTickets[1].title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                {upcomingTickets[1].date} • {upcomingTickets[1].location}
              </p>
            </div>
            <button
              onClick={() => setSelectedTicket(upcomingTickets[1])}
              className="size-10 rounded-full flex items-center justify-center text-primary bg-primary/10"
            >
              <span className="material-symbols-outlined">
                confirmation_number
              </span>
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Tab Content: Saved */}
      {activeTab === "saved" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 flex flex-col gap-4"
        >
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-base">
              Saved Events ({savedEvents.length})
            </h3>
          </div>

          {savedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-primary/5"
            >
              <div className="flex gap-3 p-3">
                <div
                  className="w-20 h-20 rounded-xl bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url('${event.image}')` }}
                ></div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm mb-1">{event.title}</h4>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <span className="material-symbols-outlined text-sm mr-1">
                      calendar_today
                    </span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mb-2">
                    <span className="material-symbols-outlined text-sm mr-1">
                      location_on
                    </span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-primary font-bold text-sm">
                      {event.price}
                    </p>
                    <button className="bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Tab Content: Memories */}
      {activeTab === "memories" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900 dark:text-slate-100 font-bold text-base">
              Your Memories ({memories.length * 4})
            </h3>
            <button className="text-primary text-xs font-bold uppercase">
              Upload
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {memories.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url('${img}')` }}
              ></div>
            ))}
          </div>
        </motion.div>
      )}

      <TicketModal
        isOpen={!!selectedTicket}
        onClose={() => setSelectedTicket(null)}
        event={
          selectedTicket || {
            title: "",
            date: "",
            time: "",
            location: "",
            ticketId: "",
          }
        }
      />

      <BottomNav />
    </div>
  );
}

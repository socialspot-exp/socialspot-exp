"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import TicketModal from "@/components/TicketModal";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Jazz Night",
      date: "Mar 15, 2026",
      time: "8:00 PM",
      location: "Blue Note Jazz Club",
      image:
        "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80",
      ticketId: "#TKT-2847",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Tech Summit 2026",
      date: "Mar 22, 2026",
      time: "9:00 AM",
      location: "Convention Center",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      ticketId: "#TKT-2891",
      status: "confirmed",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Vibe City Music Festival",
      date: "Feb 28, 2026",
      time: "6:00 PM",
      location: "Central Park, NYC",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
      rating: 5,
      attended: true,
    },
    {
      id: 4,
      title: "Art & Wine Evening",
      date: "Feb 14, 2026",
      time: "7:00 PM",
      location: "Modern Gallery",
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
      rating: 4,
      attended: true,
    },
  ];

  const recommendedEvents = [
    {
      id: 5,
      title: "Indie Rock Showcase",
      date: "Apr 5, 2026",
      location: "The Basement",
      price: "$25.00",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      matchScore: 95,
    },
    {
      id: 6,
      title: "Food & Culture Fest",
      date: "Apr 12, 2026",
      location: "Harbor Square",
      price: "$15.00",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      matchScore: 88,
    },
    {
      id: 7,
      title: "Digital Art Exhibition",
      date: "Apr 18, 2026",
      location: "Tech Gallery",
      price: "$20.00",
      image:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80",
      matchScore: 82,
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-24">
      <Header />

      {/* Page Title & Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="px-4 pt-6 pb-4"
      >
        <h2 className="text-2xl font-bold mb-2">My Events</h2>
        <div className="flex gap-3">
          <div className="flex-1 bg-primary/10 rounded-xl p-3 border border-primary/20">
            <p className="text-2xl font-extrabold text-primary">12</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Events Attended
            </p>
          </div>
          <div className="flex-1 bg-primary/10 rounded-xl p-3 border border-primary/20">
            <p className="text-2xl font-extrabold text-primary">2</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Upcoming
            </p>
          </div>
          <div className="flex-1 bg-primary/10 rounded-xl p-3 border border-primary/20">
            <p className="text-2xl font-extrabold text-primary">8</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Favorites
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tab Switcher */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="px-4 mb-6"
      >
        <div className="flex bg-slate-200 dark:bg-primary/10 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === "upcoming"
                ? "bg-white dark:bg-primary text-slate-900 dark:text-white shadow-sm"
                : "text-slate-500"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === "past"
                ? "bg-white dark:bg-primary text-slate-900 dark:text-white shadow-sm"
                : "text-slate-500"
            }`}
          >
            Past Events
          </button>
        </div>
      </motion.div>

      {/* Upcoming Events */}
      {activeTab === "upcoming" && (
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 space-y-4 mb-8"
        >
          {upcomingEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-primary/5"
            >
              <div className="flex gap-4 p-4">
                <div
                  className="w-24 h-24 rounded-xl bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url('${event.image}')` }}
                ></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-bold text-base">{event.title}</h4>
                    <span className="bg-green-500/20 text-green-600 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                      {event.status}
                    </span>
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <span className="material-symbols-outlined text-sm mr-1">
                      calendar_today
                    </span>
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mb-2">
                    <span className="material-symbols-outlined text-sm mr-1">
                      location_on
                    </span>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-mono">
                    {event.ticketId}
                  </p>
                </div>
              </div>
              <div className="flex border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setSelectedTicket(event)}
                  className="flex-1 py-3 text-sm font-bold text-primary flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-lg">
                    qr_code
                  </span>
                  View Ticket
                </button>
                <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                <button className="flex-1 py-3 text-sm font-bold text-slate-600 dark:text-slate-400 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-lg">
                    share
                  </span>
                  Share
                </button>
              </div>
            </motion.div>
          ))}

          {/* Quick Actions */}
          <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 mt-6">
            <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                lightbulb
              </span>
              Quick Actions
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white dark:bg-slate-800 rounded-xl p-3 text-left border border-primary/10">
                <span className="material-symbols-outlined text-primary text-xl mb-1">
                  add_circle
                </span>
                <p className="text-xs font-bold">Add to Calendar</p>
              </button>
              <button className="bg-white dark:bg-slate-800 rounded-xl p-3 text-left border border-primary/10">
                <span className="material-symbols-outlined text-primary text-xl mb-1">
                  directions
                </span>
                <p className="text-xs font-bold">Get Directions</p>
              </button>
              <button className="bg-white dark:bg-slate-800 rounded-xl p-3 text-left border border-primary/10">
                <span className="material-symbols-outlined text-primary text-xl mb-1">
                  group
                </span>
                <p className="text-xs font-bold">Invite Friends</p>
              </button>
              <button className="bg-white dark:bg-slate-800 rounded-xl p-3 text-left border border-primary/10">
                <span className="material-symbols-outlined text-primary text-xl mb-1">
                  notifications_active
                </span>
                <p className="text-xs font-bold">Set Reminder</p>
              </button>
            </div>
          </div>
        </motion.section>
      )}

      {/* Past Events */}
      {activeTab === "past" && (
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 space-y-4 mb-8"
        >
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-primary/5"
            >
              <div className="flex gap-4 p-4">
                <div
                  className="w-24 h-24 rounded-xl bg-cover bg-center shrink-0 relative"
                  style={{ backgroundImage: `url('${event.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-bold text-base">{event.title}</h4>
                    <span className="bg-slate-500/20 text-slate-600 dark:text-slate-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                      Attended
                    </span>
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <span className="material-symbols-outlined text-sm mr-1">
                      calendar_today
                    </span>
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-xs mb-2">
                    <span className="material-symbols-outlined text-sm mr-1">
                      location_on
                    </span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined text-sm ${
                          i < event.rating ? "text-primary" : "text-slate-300"
                        }`}
                        style={
                          i < event.rating
                            ? { fontVariationSettings: "'FILL' 1" }
                            : undefined
                        }
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex border-t border-slate-200 dark:border-slate-700">
                <button className="flex-1 py-3 text-sm font-bold text-primary flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-lg">
                    photo_library
                  </span>
                  View Photos
                </button>
                <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                <button className="flex-1 py-3 text-sm font-bold text-slate-600 dark:text-slate-400 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-lg">
                    rate_review
                  </span>
                  Review
                </button>
              </div>
            </div>
          ))}

          {/* Memories Section */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-5 border border-primary/20 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  photo_camera
                </span>
                Your Memories
              </h4>
              <button className="text-xs font-semibold text-primary">
                View All
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
                "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
                "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80",
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Recommended Events Section */}
      <section className="px-4 py-6 bg-slate-100 dark:bg-[#1a140d]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold">Recommended For You</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Based on your interests
            </p>
          </div>
          <button className="text-xs font-semibold text-primary">See All</button>
        </div>

        <div className="space-y-3">
          {recommendedEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-primary/5"
            >
              <div className="flex gap-3 p-3">
                <div
                  className="w-20 h-20 rounded-xl bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url('${event.image}')` }}
                ></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-bold text-sm">{event.title}</h4>
                    <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {event.matchScore}% Match
                    </span>
                  </div>
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Preferences */}
      <section className="px-4 py-6">
        <h3 className="text-lg font-bold mb-4">Your Preferences</h3>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-primary/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  tune
                </span>
              </div>
              <div>
                <p className="font-bold text-sm">Event Notifications</p>
                <p className="text-xs text-slate-500">
                  Get alerts for new events
                </p>
              </div>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
              </div>
              <div>
                <p className="font-bold text-sm">Location Services</p>
                <p className="text-xs text-slate-500">Find events near you</p>
              </div>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Calendar Widget */}
      <section className="px-4 py-6 mb-8">
        <div className="bg-gradient-to-br from-primary to-orange-600 rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-5xl mb-3">
              calendar_month
            </span>
            <h4 className="text-xl font-bold mb-2">
              Sync with Your Calendar
            </h4>
            <p className="text-sm text-white/80 mb-4 max-w-[240px]">
              Never miss an event. Add all your bookings to Google Calendar or
              Apple Calendar.
            </p>
            <button className="bg-white text-primary px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg">
              Connect Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Friends Going Section */}
      <section className="px-4 py-6 mb-8">
        <h3 className="text-lg font-bold mb-4">Friends Also Going</h3>
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white dark:border-slate-800 flex items-center justify-center"
                >
                  <span className="material-symbols-outlined text-primary text-sm">
                    person
                  </span>
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-sm">8 friends going</p>
              <p className="text-xs text-slate-500">to Summer Jazz Night</p>
            </div>
          </div>
          <button className="w-full bg-primary/10 text-primary py-2 rounded-lg text-sm font-bold border border-primary/20">
            View All Friends
          </button>
        </div>
      </section>

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

"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    date: string;
    time: string;
    location: string;
    ticketId: string;
    ticketType?: string;
  };
}

export default function TicketModal({
  isOpen,
  onClose,
  event,
}: TicketModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-end sm:items-center justify-center"
          onClick={onClose}
        >
          {/* Bottom Sheet / Modal Container */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-background-light dark:bg-background-dark rounded-t-xl sm:rounded-xl overflow-hidden shadow-2xl flex flex-col border-t border-slate-200 dark:border-primary/20"
          >
        {/* Handle Bar for mobile feel */}
        <div className="flex h-5 w-full items-center justify-center sm:hidden">
          <div className="h-1.5 w-12 rounded-full bg-slate-300 dark:bg-slate-700"></div>
        </div>

        {/* Header */}
        <div className="flex items-center p-4 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={onClose}
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <h2 className="flex-1 text-center text-lg font-bold tracking-tight mr-8">
            Ticket Details
          </h2>
        </div>

        {/* Ticket Content */}
        <div className="flex flex-col items-center px-6 py-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
            <p className="text-primary font-semibold">
              {event.date} • {event.time}
            </p>
            <div className="flex items-center justify-center gap-1 mt-1 text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              <span className="text-sm">{event.location}</span>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="relative p-6 bg-white rounded-xl shadow-inner border-8 border-slate-100 dark:border-slate-800 mb-6">
            <div className="w-48 h-48 bg-slate-900 flex items-center justify-center overflow-hidden rounded-lg">
              <div className="grid grid-cols-4 grid-rows-4 gap-2 w-40 h-40">
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-slate-900"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-slate-900"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-slate-900"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-slate-900"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-slate-900"></div>
                <div className="bg-white"></div>
              </div>
              {/* Center Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border-4 border-slate-100">
                  <span className="material-symbols-outlined text-primary text-3xl font-bold">
                    bolt
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="flex justify-between items-center p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Ticket Type
                </p>
                <p className="font-bold">
                  {event.ticketType || "General Admission"}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Order #
                </p>
                <p className="font-bold">{event.ticketId.replace("#TKT-", "NP-")}</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">download</span>
              Save to Wallet
            </motion.button>
          </div>
        </div>

        {/* Footer spacing */}
        <div className="h-8 bg-background-light dark:bg-background-dark"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [ticketCount, setTicketCount] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "apple" | "google"
  >("card");

  const ticketPrice = 85.0;
  const serviceFee = 4.5;
  const total = ticketPrice * ticketCount + serviceFee;

  const handleConfirmPayment = () => {
    router.push("/events");
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden pb-32">
      {/* Header */}
      <header className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <button
          onClick={() => router.back()}
          className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
          Checkout
        </h2>
      </header>

      <main className="flex flex-col gap-6 p-4">
        {/* Event Summary Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700/50"
        >
          <div className="flex flex-col gap-1 flex-[2_2_0px] justify-center">
            <p className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight">
              Neon Pulse Festival 2024
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                calendar_today
              </span>
              Saturday, Oct 21, 2024
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                location_on
              </span>
              Central Park, NYC
            </p>
          </div>
          <div
            className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80")',
            }}
          ></div>
        </motion.section>

        {/* Ticket Selection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight pb-3">
            Ticket Selection
          </h3>
          <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl px-4 min-h-[72px] py-3 justify-between border border-slate-200 dark:border-slate-700/50">
            <div className="flex flex-col justify-center">
              <p className="text-slate-900 dark:text-slate-100 text-base font-semibold leading-normal">
                General Admission
              </p>
              <p className="text-primary text-sm font-bold leading-normal">
                ${ticketPrice.toFixed(2)}
              </p>
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
                <button
                  onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors active:scale-95"
                >
                  <span className="material-symbols-outlined text-sm">
                    remove
                  </span>
                </button>
                <span className="text-lg font-bold w-4 text-center">
                  {ticketCount}
                </span>
                <button
                  onClick={() => setTicketCount(ticketCount + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:opacity-90 transition-colors active:scale-95"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Payment Method */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight pb-3">
            Payment Method
          </h3>
          <div className="flex flex-col gap-3">
            {/* Credit Card */}
            <div
              onClick={() => setPaymentMethod("card")}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === "card"
                  ? "border-primary bg-primary/5 dark:bg-primary/10"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/30"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-4 flex items-center justify-center ${
                  paymentMethod === "card"
                    ? "border-primary bg-white"
                    : "border-slate-400 dark:border-slate-600"
                }`}
              ></div>
              <span className="material-symbols-outlined text-slate-700 dark:text-slate-300">
                credit_card
              </span>
              <span className="text-slate-900 dark:text-slate-100 font-medium">
                Credit / Debit Card
              </span>
            </div>

            {/* Card Details Form */}
            {paymentMethod === "card" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 space-y-4"
              >
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary p-3"
                      placeholder="xxxx xxxx xxxx xxxx"
                      type="text"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                      <div className="w-8 h-5 bg-slate-200 dark:bg-slate-700 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Expiry Date
                    </label>
                    <input
                      className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary p-3"
                      placeholder="MM/YY"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      CVV
                    </label>
                    <input
                      className="w-full bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary p-3"
                      placeholder="123"
                      type="text"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Apple Pay */}
            <div
              onClick={() => setPaymentMethod("apple")}
              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                paymentMethod === "apple"
                  ? "border-primary bg-primary/5 dark:bg-primary/10"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 hover:border-primary/50"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-4 ${
                  paymentMethod === "apple"
                    ? "border-primary bg-white"
                    : "border-slate-400 dark:border-slate-600"
                }`}
              ></div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  Apple Pay
                </span>
              </div>
            </div>

            {/* Google Pay */}
            <div
              onClick={() => setPaymentMethod("google")}
              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                paymentMethod === "google"
                  ? "border-primary bg-primary/5 dark:bg-primary/10"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/30 hover:border-primary/50"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-4 ${
                  paymentMethod === "google"
                    ? "border-primary bg-white"
                    : "border-slate-400 dark:border-slate-600"
                }`}
              ></div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  Google Pay
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Order Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700/50 space-y-3"
        >
          <h3 className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-wider pb-1">
            Order Summary
          </h3>
          <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
            <span className="text-sm">
              {ticketCount}x General Admission
            </span>
            <span className="text-sm font-medium">
              ${(ticketPrice * ticketCount).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
            <span className="text-sm">Service Fee</span>
            <span className="text-sm font-medium">
              ${serviceFee.toFixed(2)}
            </span>
          </div>
          <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <span className="text-base font-bold text-slate-900 dark:text-slate-100">
              Total
            </span>
            <span className="text-xl font-bold text-primary">
              ${total.toFixed(2)}
            </span>
          </div>
        </motion.section>
      </main>

      {/* Fixed Bottom Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 pb-8 z-20">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <div className="flex flex-col">
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tighter leading-none">
              Total Price
            </p>
            <p className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              ${total.toFixed(2)}
            </p>
          </div>
          <motion.button
            onClick={handleConfirmPayment}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-primary hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            Confirm & Pay
            <span className="material-symbols-outlined">chevron_right</span>
          </motion.button>
        </div>
      </footer>
    </div>
  );
}

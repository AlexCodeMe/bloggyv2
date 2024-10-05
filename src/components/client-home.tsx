"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import AuthModal from "./auth-modal";

const images = [
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1503551723145-6c040742065b?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&h=900&fit=crop",
];

export default function ClientLanding() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Blog background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
      <div className="relative z-10 text-center text-white p-6 max-w-4xl mx-auto flex items-center flex-col">
        <motion.h2
          className="text-5xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Unleash Your Creativity with AI-Powered Blogging
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Elevate your writing, engage your audience, and grow your online
          presence with Bloggy.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-fit text-lg bg-primary rounded-lg px-4 py-2 flex items-center justify-center"
        >
          <AuthModal label="Start for Free!" /> <ArrowRight className="ml-2" />
        </motion.div>
      </div>
    </section>
  );
}

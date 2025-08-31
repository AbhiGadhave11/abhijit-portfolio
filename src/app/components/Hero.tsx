"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Abhijit
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            Full-Stack Engineer passionate about crafting performant, scalable, and elegant web apps.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link
              href="https://drive.google.com/file/d/10eNKH1oFbunhBwpM_E2hgs3R28eW7__J/view?usp=sharing"
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
              📄 Download Resume
            </Link>
            <Link
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-xl shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              🚀 View Projects
            </Link>
          </div>
          {/* Social Links */}
            <div className="mt-8 flex justify-center md:justify-start gap-5">
                <Link
                    href="https://github.com/AbhiGadhave11"
                    target="_blank"
                    className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white transition transform hover:scale-110 shadow">
                    <Github className="w-5 h-5" />
                </Link>
                <Link
                    href="https://linkedin.com/in/abhijit-gadhave"
                    target="_blank"
                    className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-500 text-gray-700 dark:text-gray-300 hover:text-white transition transform hover:scale-110 shadow">
                    <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                    href="mailto:abhijitgadhave21@gmail.com"
                    className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-red-500 text-gray-700 dark:text-gray-300 hover:text-white transition transform hover:scale-110 shadow">
                    <Mail className="w-5 h-5" />
                </Link>
                <Link
                    href="https://twitter.com/Abhijit872"
                    target="_blank"
                    className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-sky-500 text-gray-700 dark:text-gray-300 hover:text-white transition transform hover:scale-110 shadow">
                    <Twitter className="w-5 h-5" />
                </Link>
            </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 blur-3xl opacity-30 animate-pulse" />
            <Image
              src='/Images/Profile/Myimage4.jpg'
              alt="Profile Picture"
              fill
              className="relative rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client"
import { FaFacebook, FaGithub } from "react-icons/fa";
import ProfileImage from "../profileImage";
import { motion } from "framer-motion";

export default function HomePage(){
    return(
        <section id="" className="h-screen flex">
            <div className="flex flex-1 flex-col items-center justify-center gap-6 py-12">
            <ProfileImage />
            <div className="flex flex-col items-center justify-center text-center font-bebas">
                <h1 className="bg-linear-to-r from-slate-800 via-slate-950 to-slate-700 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                John Dominique L. Gonzales
                </h1>
                <p className="mt-2 text-lg font-semibold text-gray-600">
                Software Developer
                </p>
            </div>
            </div>
            <div className="flex flex-col flex-2 justify-center gap-5">
                <p className="text-2xl text-gray-500">
                    Programmer by craft, technologist by obsession. 
                    I break down problems like game mechanics, find the pattern, 
                    optimize the build, unlock the next skill.
                </p>
                <div className="flex gap-5">
                    <motion.a
                        href="https://github.com/Jeydeee04"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="text-3xl p-3 border-2 border-slate-300 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-slate-300 transition-colors duration-300 hover:border-indigo-500 hover:text-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25"
                    >
                        <FaGithub />
                    </motion.a>

                    <motion.a
                        href="https://www.facebook.com/john.dominique.gonzales.2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook Profile"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="text-3xl p-3 border-2 border-slate-300 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-slate-300 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                        <FaFacebook />
                    </motion.a>
                </div>
            </div>
        </section>
    )
}
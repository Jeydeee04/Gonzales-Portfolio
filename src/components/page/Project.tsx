"use client";

import { useState } from "react";
import ProjectCard from "../projectCard"
import { projects } from "@/data"
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

export default function ProjectPage(){
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1;

    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const goToPrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return(
        <section 
            id="projects" 
            className="h-screen flex flex-col justify-center items-center gap-20 py-20"
        >
            {currentProjects.map((proj, i) => (
                <div 
                    key={i}
                    className="h-screen"
                >
                    <ProjectCard
                        images={proj.images}
                        title={proj.title}
                        desc={proj.desc}
                        features={proj.features}
                        frameworks={proj.frameworks}
                        languages={proj.languages}
                        link={proj.link}
                    />
                </div>
            ))}

            <div className="flex gap-5">
                <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="text-4xl cursor-pointer"
                    >
                    <MdOutlineNavigateBefore />
                </button>

                <div className="flex items-center gap-3">
                    {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = currentPage === pageNumber;

                    return (
                        <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        aria-label={`Go to page ${pageNumber}`}
                        className={`h-5 rounded-full transition-all border-2 duration-300 ${
                            isActive
                            ? "w-15 bg-white border-black"
                            : "w-5 bg-gray-200 hover:bg-gray-400 border-gray-200"
                        }`}
                        />
                    );
                    })}
                </div>

                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="text-4xl cursor-pointer"
                    >
                    <MdOutlineNavigateNext />
                </button>
            </div>
        </section>
    )
}
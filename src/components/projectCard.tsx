"use client";

import { useState } from "react";
import { Project } from "@/models/projects"
import Image from "next/image"

export default function ProjectCard({images, title, desc, features, frameworks, languages, link}:Project) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 1;

    const totalPages = Math.ceil(images.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentImage = images.slice(startIndex, startIndex + itemsPerPage);

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const goToPrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };
    return(
        <div className="flex gap-5">
            {currentImage.map((img, i) => (
                <div className="border-2 rounded-2xl">
                    <Image
                    src={`/images/${img}`}
                    alt=""
                    width={720}
                    height={1080}
                    className="rounded-2xl"
                    /> 
                </div>
            ))}
        </div>
    )
}
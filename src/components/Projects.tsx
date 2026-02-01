"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.css";

const categories = [
    { id: "all", label: "All" },
    { id: "fullstack", label: "Full Stack" },
    { id: "spring", label: "Spring Projects" },
    { id: "xray", label: "Java Utilities" },
];

const projects = [
    {
        id: 1,
        title: "Protectix - AI Protection Planning Co-Pilot",
        category: "fullstack",
        image: "/images/protectix.png",
        link: "https://protectix.co.uk",
        period: "Technical Co-founder | 2024 - Present",
        description: "Building an AI-powered platform for financial advisers that transforms complex protection research from 2 hours to 10 minutes. Features Selectix (AI research engine) and Agentix (conversational AI) for policy analysis and compliance.",
        techStack: "Next.js, TypeScript, TailwindCSS, OpenAI LLM, Vercel, GitHub, Firebase",
    },
    {
        id: 2,
        title: "Tourlingo - Multilingual Tour Assistant",
        category: "fullstack",
        image: "/images/tourlingo.jpg",
        link: "https://tour-de-fake.vercel.app",
        period: "May 2025 - September 2025",
        description: "Designed and implemented a full-stack web application for an international client, integrating generative AI to deliver personalised, location specific travel insights.",
        techStack: "Next.js, TypeScript, TailwindCSS, Java Spring Boot, PostgreSQL, Docker, Kubernetes, Eureka",
    },
    {
        id: 3,
        title: "Customer Microservices Spring Application",
        category: "spring",
        image: "/images/portfolio-1.jpg",
        link: "https://github.com/Saqsy/Customer-Application-MicroServices-Project",
    },
    {
        id: 4,
        title: "User Registration Spring Application",
        category: "spring",
        image: "/images/portfolio-1.jpg",
        link: "https://github.com/Saqsy/User-Registration-Spring",
    },
    {
        id: 5,
        title: "Spring Data JPA Application",
        category: "spring",
        image: "/images/portfolio-1.jpg",
        link: "https://github.com/Saqsy/spring-jpa",
    },
    {
        id: 6,
        title: "XRay Cucumber Feature Uploader",
        category: "xray",
        image: "/images/Xray_uploader.jpg",
        link: "https://github.com/Saqsy/XRay-Cucumber-Feature-Uploader",
    },
    {
        id: 7,
        title: "XRay Cucumber Feature Downloader",
        category: "xray",
        image: "/images/Xray_downloader.jpg",
        link: "https://github.com/Saqsy/XRay-Feature-File-Downloader",
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects = projects.filter(
        (project) => activeFilter === "all" || project.category === activeFilter
    );

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    <h2>Projects</h2>
                    <p>Some of the personal projects I&apos;ve worked on</p>
                </motion.div>

                {/* Filter buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.filters}
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`${styles.filterBtn} ${activeFilter === category.id ? styles.active : ""}`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <motion.div layout className={styles.projectsGrid}>
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className={styles.projectCard}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={styles.image}
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewProject}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                                <polyline points="15,3 21,3 21,9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            View Project
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.projectInfo}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    {"period" in project && (
                                        <span className={styles.projectPeriod}>{project.period}</span>
                                    )}
                                    {"description" in project && (
                                        <p className={styles.projectDescription}>{project.description}</p>
                                    )}
                                    {"techStack" in project && (
                                        <p className={styles.projectTech}><strong>Tech:</strong> {project.techStack}</p>
                                    )}
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

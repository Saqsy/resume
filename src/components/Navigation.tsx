"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navigation.module.css";

const navItems = [
    { id: "hero", label: "Home", icon: "⌂" },
    { id: "skills", label: "Skills", icon: "◈" },
    { id: "resume", label: "Resume", icon: "◉" },
    { id: "projects", label: "Projects", icon: "◆" },
    { id: "contact", label: "Contact", icon: "✉" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={styles.desktopNav}
            >
                <ul className={styles.navList}>
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ""}`}
                                aria-label={item.label}
                            >
                                <span className={styles.icon}>{item.icon}</span>
                                <span className={styles.label}>{item.label}</span>
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </motion.nav>

            {/* Mobile Navigation Toggle */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className={`${styles.mobileToggle} ${scrolled ? styles.scrolled : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                <span className={`${styles.hamburger} ${isOpen ? styles.open : ""}`} />
            </motion.button>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.mobileOverlay}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className={styles.mobileNav}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ul className={styles.mobileNavList}>
                                {navItems.map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className={`${styles.mobileNavItem} ${activeSection === item.id ? styles.active : ""}`}
                                        >
                                            <span className={styles.mobileIcon}>{item.icon}</span>
                                            <span>{item.label}</span>
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const contactInfo = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: "Location",
        details: ["London, United Kingdom"],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        title: "Email",
        details: ["hireme@saquibkazi.com", "hello@saquibkazi.com"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    <h2>Contact</h2>
                    <p>Let&apos;s connect and discuss opportunities</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className={styles.contactGrid}
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={styles.contactCard}
                        >
                            <div className={styles.iconWrapper}>{info.icon}</div>
                            <h3 className={styles.cardTitle}>{info.title}</h3>
                            {info.details.map((detail, i) => (
                                <p key={i} className={styles.cardDetail}>
                                    {info.title === "Email" ? (
                                        <a href={`mailto:${detail}`} className={styles.emailLink}>
                                            {detail}
                                        </a>
                                    ) : (
                                        detail
                                    )}
                                </p>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.cta}
                >
                    <p className={styles.ctaText}>
                        Interested in working together? Feel free to reach out!
                    </p>
                    <div className={styles.ctaButtons}>
                        <a
                            href="mailto:hireme@saquibkazi.com"
                            className={`btn btn-primary ${styles.ctaBtn}`}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            Send Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/saquib-kazi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn btn-outline ${styles.ctaBtn}`}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

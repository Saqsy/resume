"use client";

import { motion } from "framer-motion";
import styles from "./Resume.module.css";

const experiences = [
    {
        type: "work",
        title: "Technical Co-founder",
        organization: "Protectix",
        period: "2024 – Present",
        description: [
            "Co-founding an AI-powered protection planning platform for financial advisers",
            "Architecting and developing full-stack application using Next.js, TypeScript, and TailwindCSS",
            "Integrating OpenAI LLM for intelligent policy analysis and conversational AI features",
            "Managing deployment pipeline with Vercel and Firebase for scalable cloud infrastructure",
        ],
    },
    {
        type: "work",
        title: "Software Development Engineer in Test",
        organization: "Veeva Software Systems",
        period: "December 2022 – July 2024",
        description: [
            "Developed an internal React-based web tool for triaging automation failures, slashing manual effort by nearly 50%",
            "Architected an email-testing utility within the automation framework, enhancing automated email scenario coverage by more than 50 test cases and cutting manual validation effort by 80%",
            "Pioneered the use of front-end API calls to segment large end-to-end flow tests, reducing test duration by nearly 30%",
            "Monitored 15+ Jenkins pipelines daily, performing root cause analysis of job failures with AWS, Kibana, and Elasticsearch",
            "Enhanced RESTful API testing by designing and executing 200+ Java test cases, elevating endpoint coverage from 50% to 70%",
        ],
    },
    {
        type: "work",
        title: "Software Engineer",
        organization: "Capgemini",
        period: "May 2021 – November 2022",
        description: [
            "Engineered a multi-threaded Java utility with a GUI, streamlining cucumber feature file uploads to Jira and eliminating 400 minutes of manual team effort each sprint",
            "Spearheaded the creation and continuous improvement of over 500 end-to-end test scripts, comprising 200 Selenium (web UI), 100 REST Assured (API), and 200 Appium (Android/iOS) scripts",
            "Drove a 90% success rate across 12 GitLab CI/CD pipelines through weekly maintenance and optimisation",
        ],
    },
];

const education = [
    {
        type: "education",
        title: "Master of Science in Computer Science",
        organization: "University of Bristol, UK",
        period: "September 2024 - August 2025",
        description: [],
    },
    {
        type: "education",
        title: "Bachelor of Engineering in Mechanical Engineering",
        organization: "Savitribai Phule Pune University, India",
        period: "August 2015 - May 2019",
        description: [],
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
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 },
    },
};

export default function Resume() {
    return (
        <section id="resume" className={styles.resume}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    <h2>Resume</h2>
                    <p>My professional journey and qualifications</p>
                </motion.div>

                <div className={styles.resumeGrid}>
                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={styles.summaryCard}
                    >
                        <h3 className={styles.sectionTitle}>Summary</h3>
                        <p className={styles.summaryText}>
                            Master&apos;s student in Computer Science at University of Bristol with 3+ years of
                            experience as a Software Engineer. Passionate about building full-stack applications
                            and developer tools. Skilled in React, Next.js, Java, Spring Boot, and test automation
                            frameworks. Proven track record of creating solutions that significantly reduce manual
                            effort and improve team productivity.
                        </p>
                        <ul className={styles.highlights}>
                            <li>🚀 Looking for permanent, contract & freelance opportunities</li>
                            <li>🌍 Open for Remote & International Opportunities</li>
                        </ul>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className={styles.column}
                    >
                        <h3 className={styles.sectionTitle}>Experience</h3>
                        <div className={styles.timeline}>
                            {experiences.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={styles.timelineItem}
                                >
                                    <div className={styles.timelineDot} />
                                    <div className={styles.timelineContent}>
                                        <h4 className={styles.itemTitle}>{item.title}</h4>
                                        <span className={styles.itemPeriod}>{item.period}</span>
                                        <p className={styles.itemOrg}>{item.organization}</p>
                                        {item.description.length > 0 && (
                                            <ul className={styles.itemList}>
                                                {item.description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className={styles.column}
                    >
                        <h3 className={styles.sectionTitle}>Education</h3>
                        <div className={styles.timeline}>
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={styles.timelineItem}
                                >
                                    <div className={styles.timelineDot} />
                                    <div className={styles.timelineContent}>
                                        <h4 className={styles.itemTitle}>{item.title}</h4>
                                        <span className={styles.itemPeriod}>{item.period}</span>
                                        <p className={styles.itemOrg}>{item.organization}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

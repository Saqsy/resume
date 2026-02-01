import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main className={styles.main}>
        <Hero />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

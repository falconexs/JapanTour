import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tokyoBg from "../../img/TOKYO/TOKYO-BG.png";
import tokyoTemple from "../../img/TOKYO/TOKYO-TEMPLE.png";
import "./TokyoPage.css";

gsap.registerPlugin(ScrollTrigger);

const notes = ["Morning temples", "Night streets", "Food alleys"];

export default function TokyoPage() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(".tokyo-temple-card", {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0 0 0)",
        });
        gsap.set([".tokyo-header", ".tokyo-intro-reveal", ".tokyo-notes-reveal"], {
          clearProps: "all",
        });
        return;
      }

      gsap.from(".tokyo-header", {
        opacity: 0,
        y: -18,
        duration: 0.8,
        ease: "power3.out",
      });

        const sceneTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".tokyo-scroll-scene",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      sceneTl
        .fromTo(
          ".tokyo-bg-layer img",
          { scale: 1.03, yPercent: 0 },
          { scale: 1.08, yPercent: -2, ease: "none" },
          0
        )
        .fromTo(
          ".tokyo-temple-card",
          {
            opacity: 0,
            y: 86,
            clipPath: "inset(12% 0 0 0)",
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0 0)",
            ease: "none",
          },
          0.18
        )
        .fromTo(
          ".tokyo-scene-copy",
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, ease: "none" },
          0.48
        );

      gsap.from(".tokyo-intro-reveal", {
        scrollTrigger: {
          trigger: ".tokyo-intro",
          start: "top 68%",
          once: true,
        },
        opacity: 0,
        y: 34,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".tokyo-notes-reveal", {
        scrollTrigger: {
          trigger: ".tokyo-notes",
          start: "top 74%",
          once: true,
        },
        opacity: 0,
        y: 34,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <article className="tokyo-page" ref={pageRef}>
      <header className="tokyo-header">
        <div className="tokyo-header-left">
          <Link className="tokyo-brand" to="/">
            <span className="tokyo-brand-mark" aria-hidden="true" />
            <span>HIKARI</span>
          </Link>
          <Link className="tokyo-back" to="/">
            ← Back to Explore
          </Link>
        </div>
        <nav className="tokyo-nav" aria-label="Tokyo navigation">
          <Link to="/">Routes</Link>
          <a href="mailto:hello@hikari.example">Experience</a>
          <a href="mailto:hello@hikari.example">Contact</a>
        </nav>
      </header>

      <section className="tokyo-scroll-scene" aria-label="Tokyo layered scroll scene">
        <div className="tokyo-sticky">
          <div className="tokyo-bg-layer" aria-hidden="true">
            <img src={tokyoBg} alt="" />
          </div>
          <div className="tokyo-overlay" aria-hidden="true" />
          <div className="tokyo-temple-layer" aria-hidden="true">
            <div className="tokyo-temple-card">
              <img src={tokyoTemple} alt="" />
            </div>
          </div>
          <div className="tokyo-scene-content">
            <p className="tokyo-progress-label">Scroll / Layer 01</p>
            <p className="tokyo-scene-copy">
              Where the city moves fast, silence still has its own architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="tokyo-intro" aria-labelledby="tokyo-title">
        <div className="tokyo-intro-inner">
          <p className="tokyo-kicker tokyo-intro-reveal">01 / Urban Rituals</p>
          <div className="tokyo-title-row">
            <h1 className="tokyo-title tokyo-intro-reveal" id="tokyo-title">
              TOKYO
            </h1>
            <p className="tokyo-kanji tokyo-intro-reveal" aria-label="Tokyo in Japanese">
              東京
            </p>
          </div>
          <p className="tokyo-subtitle tokyo-intro-reveal">
            Neon, temples and metropolitan rhythm.
          </p>
          <p className="tokyo-description tokyo-intro-reveal">
            A private route through quiet mornings, electric nights, hidden food streets
            and old rituals inside the modern city.
          </p>
        </div>
      </section>

      <section className="tokyo-notes">
        <div className="tokyo-notes-inner">
          <p className="tokyo-kicker tokyo-notes-reveal">02 / Notes</p>
          <h2 className="tokyo-notes-title tokyo-notes-reveal">Tokyo is contrast.</h2>
          <p className="tokyo-notes-copy tokyo-notes-reveal">
            Private mornings, hidden shrines, late-night food streets and the rhythm of a
            city that never fully stops.
          </p>
          <div className="tokyo-note-grid">
            {notes.map((note) => (
              <article className="tokyo-note tokyo-notes-reveal" key={note}>
                {note}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tokyo-cta">
        <p>Design my Tokyo route</p>
        <a className="tokyo-cta-button" href="mailto:hello@hikari.example">
          Plan this chapter
        </a>
        <Link className="tokyo-cta-link" to="/">
          Back to all routes
        </Link>
      </section>
    </article>
  );
}

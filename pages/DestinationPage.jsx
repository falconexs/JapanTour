import { useLayoutEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { destinations, destinationList } from "./destinationData.jsx";
import "./DestinationPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function DestinationPage({ city }) {
  const pageRef = useRef(null);
  const data = destinations[city];

  useLayoutEffect(() => {
    if (!data) return undefined;

    window.scrollTo(0, 0);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set([".destination-header", ".destination-building", ".destination-reveal"], {
          clearProps: "all",
        });
        return;
      }

      gsap.from(".destination-header", {
        opacity: 0,
        y: -18,
        duration: 0.8,
        ease: "power3.out",
      });

      const sceneTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".destination-scroll-scene",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      sceneTl
        .fromTo(
          ".destination-bg img",
          { scale: data.bgScaleStart ?? 1.02, yPercent: 0 },
          { scale: data.bgScaleEnd ?? 1.08, yPercent: -2.5, ease: "none" },
          0
        )
        .fromTo(
          ".destination-building",
          { opacity: 0, y: 92, clipPath: "inset(16% 0 0 0)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", ease: "none" },
          0.16
        )
        .fromTo(
          ".destination-scene-copy > *",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.2, stagger: 0.06, ease: "none" },
          0.34
        );

      gsap.from(".destination-title-word", {
        scrollTrigger: {
          trigger: ".destination-intro",
          start: "top 72%",
          once: true,
        },
        opacity: 0,
        yPercent: 85,
        rotate: 2,
        duration: 0.9,
        stagger: 0.06,
        ease: "power3.out",
      });

      gsap.from(".destination-reveal", {
        scrollTrigger: {
          trigger: ".destination-intro",
          start: "top 68%",
          once: true,
        },
        opacity: 0,
        y: 34,
        duration: 0.95,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.utils.toArray(".destination-animate-group").forEach((group) => {
        gsap.from(group.querySelectorAll(".destination-animate-item"), {
          scrollTrigger: {
            trigger: group,
            start: "top 76%",
            once: true,
          },
          opacity: 0,
          y: 28,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
        });
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, [data]);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const titleWords = data.title.split(" ");

  return (
    <article
      className="destination-page"
      ref={pageRef}
      style={{ "--city-accent": data.accent, "--city-deep": data.deep }}
    >
      <header className="destination-header">
        <div className="destination-header-left">
          <Link className="destination-brand" to="/">
            <span className="destination-brand-mark" aria-hidden="true" />
            <span>HIKARI</span>
          </Link>
          <Link className="destination-back" to="/">
            Back to Explore
          </Link>
        </div>
        <nav className="destination-nav" aria-label="Destination navigation">
          {destinationList.map((item) => (
            <Link key={item.slug} to={`/${item.slug}`} aria-current={item.slug === data.slug ? "page" : undefined}>
              {item.name}
            </Link>
          ))}
        </nav>
      </header>

      <section className="destination-scroll-scene" aria-label={`${data.name} poster scene`}>
        <div className="destination-sticky">
          <div className="destination-bg" aria-hidden="true">
            <img src={data.bg} alt="" />
          </div>
          <div className="destination-building-layer" aria-hidden="true">
            <div className="destination-building">
              <img src={data.building} alt="" />
            </div>
          </div>
          <div className="destination-scene-content">
            <div className="destination-scene-copy">
              <p className="destination-progress">Scroll / Layer {data.index}</p>
              <p>{data.sceneCopy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="destination-intro" aria-labelledby={`${data.slug}-title`}>
        <div className="destination-intro-inner">
          <p className="destination-kicker destination-reveal">
            {data.index} / {data.region}
          </p>
          <div className="destination-title-row">
            <h1 className="destination-title destination-reveal" id={`${data.slug}-title`}>
              {data.displayName}
            </h1>
            <p className="destination-kanji destination-reveal" aria-label={`${data.name} in Japanese`}>
              {data.jp}
            </p>
          </div>
          <h2 className="destination-editorial-title" aria-label={data.title}>
            {titleWords.map((word) => (
              <span className="destination-title-word" key={`${data.slug}-${word}`}>
                {word}
              </span>
            ))}
          </h2>
          <p className="destination-description destination-reveal">{data.description}</p>
          <div className="destination-fact-row destination-reveal">
            {data.facts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="destination-essay destination-animate-group">
        <div className="destination-essay-inner">
          <p className="destination-kicker destination-animate-item">02 / Composition</p>
          <div className="destination-essay-grid">
            <h2 className="destination-essay-title destination-animate-item">
              A private chapter with its own rhythm.
            </h2>
            <div className="destination-essay-copy destination-animate-item">
              <p>{data.philosophy}</p>
              <p>{data.mood}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="destination-notes destination-animate-group">
        <div className="destination-notes-inner">
          <p className="destination-kicker destination-animate-item">03 / Field Notes</p>
          <div className="destination-note-grid">
            {data.notes.map((note, index) => (
              <article className="destination-note destination-animate-item" key={note.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="destination-attractions destination-animate-group">
        <div className="destination-attractions-inner">
          <div className="destination-section-heading">
            <p className="destination-kicker destination-animate-item">04 / Places</p>
            <h2 className="destination-attractions-title destination-animate-item">
              Three places that hold the chapter.
            </h2>
          </div>
          <div className="destination-attraction-grid">
            {data.attractions.map((place, index) => (
              <article className="destination-attraction destination-animate-item" key={place.title}>
                <div className="destination-attraction-image">
                  <img src={place.image} alt={place.title} />
                </div>
                <div className="destination-attraction-copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{place.title}</h3>
                  <p>{place.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="destination-sequence destination-animate-group">
        <div className="destination-sequence-inner">
          <p className="destination-kicker destination-animate-item">05 / Sequence</p>
          <h2 className="destination-sequence-title destination-animate-item">
            How {data.name} enters the journey.
          </h2>
          <ol className="destination-sequence-list">
            {data.sequence.map((step, index) => (
              <li className="destination-animate-item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="destination-cta">
        <p>{data.cta}</p>
        <a className="destination-cta-button" href="mailto:hello@hikari.example">
          Plan this chapter
        </a>
        <Link className="destination-cta-link" to="/">
          Back to all routes
        </Link>
      </section>
      <footer className="destination-credit" aria-label="Project credit">
        Developed by <span>VENTOR DIGITAL</span><sup>TM</sup>
      </footer>
    </article>
  );
}

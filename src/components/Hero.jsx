import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import heroImage from "../../img/HERO-IMAGE.png";

const navItems = ["Routes", "Experience", "Contact"];
const titleChars = ["日", "本", "の", "美"];
const places = [
  { label: "Tokyo", jp: "東京", to: "/tokyo" },
  { label: "Osaka", jp: "大阪", to: "/osaka" },
  { label: "Kyoto", jp: "京都", to: "/kyoto" },
  { label: "Hokkaido", jp: "北海道", to: "/hokkaido" },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const titleWrap = heroRef.current.querySelector(".hero-title-wrap");
      const maskStrokes = gsap.utils.toArray(".ink-mask-stroke");

      maskStrokes.forEach((stroke) => {
        const length = stroke.getTotalLength();
        gsap.set(stroke, {
          strokeDasharray: length,
          strokeDashoffset: reduceMotion ? 0 : length,
        });
      });

      if (reduceMotion) {
        gsap.set(titleWrap, {
          "--brush-x": "96%",
          "--brush-opacity": 0,
        });
        gsap.set([".hero-header", ".hero-visual-slot", ".hero-copy > *"], {
          clearProps: "all",
        });
        return;
      }

      gsap.set(titleWrap, {
        "--brush-x": "-8%",
        "--brush-opacity": 0,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-header", {
        opacity: 0,
        y: -18,
        duration: 0.78,
      })
        .from(
          ".hero-visual-slot",
          {
            opacity: 0,
            y: 24,
            duration: 0.9,
          },
          "-=0.38"
        )
        .to(
          maskStrokes,
          {
            strokeDashoffset: 0,
            duration: 1.28,
            stagger: 0.12,
          },
          "-=0.18"
        )
        .to(
          titleWrap,
          {
            "--brush-x": "96%",
            duration: 1.52,
          },
          "<+=0.06"
        )
        .to(
          titleWrap,
          {
            "--brush-opacity": 0.58,
            duration: 0.18,
          },
          "<"
        )
        .to(
          titleWrap,
          {
            "--brush-opacity": 0,
            duration: 0.36,
          },
          ">-0.34"
        )
        .from(
          ".hero-copy > *",
          {
            opacity: 0,
            y: 24,
            duration: 0.78,
            stagger: 0.1,
          },
          "-=0.24"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <header className="hero-header">
        <a className="brand" href="#main" aria-label="HIKARI home">
          <span className="brand-mark" aria-hidden="true" />
          <span>HIKARI</span>
        </a>
        <nav className="hero-nav" aria-label="Hero navigation">
          {navItems.map((item) => (
            <a key={item} href="#main">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <div className="hero-layout">
        <aside className="hero-visual-slot" aria-hidden="true">
          <img className="hero-image" src={heroImage} alt="" />
        </aside>

        <div className="hero-content">
          <p className="eyebrow">Private Japan Journeys</p>
          <div className="hero-title-wrap">
            <span className="ink-cursor" aria-hidden="true" />
            <span className="title-reference" aria-hidden="true">01</span>
            <h1 className="hero-japanese-title" id="hero-title" aria-label="日本の美">
              <svg
                className="hero-title-svg"
                viewBox="0 0 1080 235"
                role="presentation"
                aria-hidden="true"
              >
                <defs>
                  <mask id="hikari-title-ink-mask" maskUnits="userSpaceOnUse">
                    <rect width="1080" height="235" fill="black" />
                    <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                      <path
                        className="ink-mask-stroke ink-mask-stroke-one"
                        d="M -92 54 C 134 16 292 60 496 42 C 700 24 884 58 1180 28"
                        strokeWidth="118"
                      />
                      <path
                        className="ink-mask-stroke ink-mask-stroke-two"
                        d="M -96 124 C 120 94 326 142 530 120 C 740 98 904 134 1184 104"
                        strokeWidth="138"
                      />
                      <path
                        className="ink-mask-stroke ink-mask-stroke-three"
                        d="M -74 194 C 150 166 348 202 570 182 C 774 164 930 202 1176 174"
                        strokeWidth="112"
                      />
                    </g>
                  </mask>
                </defs>
                <text
                  className="hero-title-text"
                  x="-6"
                  y="178"
                  textLength="1070"
                  lengthAdjust="spacingAndGlyphs"
                  mask="url(#hikari-title-ink-mask)"
                >
                  {titleChars.join("")}
                </text>
              </svg>
            </h1>
          </div>
          <div className="hero-copy">
            <p className="title-note">
              <span>01</span>
              <span>The Beauty of Japan</span>
            </p>
            <p className="hero-subtitle">
              Private journeys through forests, temples, cities and timeless Japanese
              aesthetics.
            </p>
            <div className="hero-actions" aria-label="Journey actions">
              <a className="button button-primary" href="mailto:hello@hikari.example">
                Begin the Journey
              </a>
              <a className="button button-secondary" href="#main">
                Explore Routes
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="explore-strip">
        <button
          className="explore-button"
          type="button"
          aria-controls="explore-menu"
          aria-expanded={isExploreOpen}
          onClick={() => setIsExploreOpen((current) => !current)}
        >
          EXPLORE
        </button>
      </div>
      <nav
        className={`explore-menu ${isExploreOpen ? "is-open" : ""}`}
        id="explore-menu"
        aria-label="Explore destinations"
        aria-hidden={!isExploreOpen}
      >
        <ul>
          {places.map((place) => (
            <li key={place.to}>
              <Link
                className="explore-place"
                to={place.to}
                data-jp={place.jp}
                tabIndex={isExploreOpen ? 0 : -1}
              >
                <span>{place.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="portfolio-credit" aria-label="Project credit">
        Developed by <span>VENTOR DIGITAL</span><sup>TM</sup>
      </footer>
    </section>
  );
}

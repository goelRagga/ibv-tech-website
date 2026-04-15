"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01.",
    title: "Business Consulting",
    image: "/images/consulting.jpg",
  },
  {
    number: "02.",
    title: "Digital Marketing",
    image: "/images/marketing.jpg",
  },
  {
    number: "03.",
    title: "Technology Solutions",
    image: "/images/technology.jpg",
  },
  {
    number: "04.",
    title: "Brand Strategy",
    image: "/images/brand.jpg",
  },
];

const SCROLL_ABSORB = 3; // scroll events to absorb in each direction

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Auto-rotate every 2.5 seconds ────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // ── Bidirectional scroll pin ──────────────────────────────────────────────
  // scrollCount goes 0 → SCROLL_ABSORB as user scrolls down through section.
  // When scrolling back up, it counts back down to 0 before releasing upward.
  const scrollCount = useRef(0);
  const pinActive = useRef(false);
  const isInView = useRef(false);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.95) {
            if (!isInView.current) {
              isInView.current = true;
              pinActive.current = true;

              // Coming from above (scrolling down into section) → start at 0
              // Coming from below (scrolling up into section) → start at max
              const fromBelow =
                window.scrollY + window.innerHeight <
                (sectionRef.current?.offsetTop ?? 0) + (sectionRef.current?.offsetHeight ?? 0);
              scrollCount.current = fromBelow ? SCROLL_ABSORB : 0;
            }
          } else {
            isInView.current = false;
            pinActive.current = false;
          }
        });
      },
      { threshold: 0.95 }
    );

    observer.observe(section);

    const handleWheel = (e: WheelEvent) => {
      if (!pinActive.current || !isInView.current) return;

      const now = Date.now();
      // Throttle: one counted event per 350ms to avoid trackpad spam
      if (now - lastScrollTime.current < 350) {
        e.preventDefault();
        return;
      }
      lastScrollTime.current = now;

      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      if (goingDown) {
        if (scrollCount.current < SCROLL_ABSORB) {
          // Still absorbing — keep user on section
          e.preventDefault();
          scrollCount.current += 1;
        } else {
          // Used up all absorb budget — release downward
          pinActive.current = false;
        }
      } else if (goingUp) {
        if (scrollCount.current > 0) {
          // Still absorbing upward — keep user on section
          e.preventDefault();
          scrollCount.current -= 1;
        } else {
          // Used up all absorb budget upward — release upward
          pinActive.current = false;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      observer.disconnect();
    };
  }, []);

  // Build paint order (back → front) so front card renders on top
  const paintOrder = Array.from({ length: services.length }, (_, depth) => {
    return (activeIndex + depth) % services.length;
  }).reverse();

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#E3020A",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 20,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "95vw",
          margin: "0 auto",
          padding: "80px 32px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Text content ──────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "32px",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px" }}>↳</span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                About{" "}
                <span style={{ color: "white", fontWeight: 700 }}>Us</span>
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "'Source Serif 4', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(30px, 3.8vw, 56px)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: "0 0 48px 0",
              }}
            >
              Where innovation meets intelligence.
            </h2>

            {/* Body paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.75,
                  maxWidth: "500px",
                  margin: 0,
                }}
              >
                At IBV Technologies, every engagement starts with a deep understanding of
                your business, your market, and your goals. We focus on bringing clarity to
                complex problems and building solutions that are grounded in real-world
                application.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.75,
                  maxWidth: "500px",
                  margin: 0,
                }}
              >
                Our work is shaped by insight, execution, and a strong focus on results. By
                combining expertise across strategy, marketing, and technology, we ensure
                every solution delivers lasting value.
              </p>
            </div>

            {/* Progress dots */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "48px",
                alignItems: "center",
              }}
            >
              {services.map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: "6px",
                    borderRadius: "999px",
                    background: activeIndex === i ? "white" : "rgba(255,255,255,0.28)",
                    width: activeIndex === i ? "24px" : "6px",
                    transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Stacked card carousel ────────────────────────────── */}
          <div className="relative mb-4 mt-4 lg:mt-12" style={{ height: isMobile ? "400px" : "500px" }}>
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "20px",
              }}
            >
              {paintOrder.map((serviceIndex, paintIdx) => {
                const depthFromFront = services.length - 1 - paintIdx;
                const isFront = depthFromFront === 0;
                const service = services[serviceIndex];

                const offsetX = depthFromFront * 22;
                const offsetY = -(depthFromFront * 22);

                return (
                  <motion.div
                    key={serviceIndex}
                    animate={{
                      x: offsetX,
                      y: offsetY,
                      scale: 1 - depthFromFront * 0.018,
                      zIndex: paintIdx + 1,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 28,
                      mass: 1.2,
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: isMobile ? "260px" : "320px",
                      height: isMobile ? "340px" : "420px",
                      background: "white",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: isFront
                        ? "0 32px 72px rgba(0,0,0,0.30), 0 8px 24px rgba(0,0,0,0.14)"
                        : "0 4px 16px rgba(0,0,0,0.08)",
                    }}
                  >
                    {/* Number — visible on all cards */}
                    <div style={{ padding: "20px 20px 6px 20px" }}>
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: "16px",
                          letterSpacing: "-0.01em",
                          color: "#0a0a0a",
                        }}
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* Front card: title + image */}
                    {isFront && (
                      <motion.div
                        key={`content-${serviceIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
                      >
                        <div style={{ padding: "4px 20px 16px 20px" }}>
                          <h3
                            style={{
                              fontWeight: 700,
                              fontSize: "23px",
                              letterSpacing: "-0.02em",
                              color: "#0a0a0a",
                              margin: 0,
                              lineHeight: 1.2,
                            }}
                          >
                            {service.title}
                          </h3>
                        </div>
                        <div
                          style={{
                            margin: "0 16px 16px 16px",
                            borderRadius: "12px",
                            overflow: "hidden",
                            height: isMobile ? "210px" : "270px",
                          }}
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                            }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=640&q=80";
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
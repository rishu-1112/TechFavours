import { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Beam from "./Beam";
import AuroraText from "../ui/aurora-text";

gsap.registerPlugin(ScrollTrigger);

/* ---------- Timeline Item (ref goes ONLY to DOT) ---------- */
const TimelineItem = forwardRef(({ title, children }, dotRef) => {
  return (
    <div className="relative flex gap-6 pb-8">
      {/* DOT */}
      <div className="relative z-10 mt-1">
        <div
          ref={dotRef}
          className="timeline-dot w-3 h-3 rounded-full bg-blue-400/70"
        />
      </div>

      {/* CONTENT */}
      <div>
        <h4 className="text-white font-medium">{title}</h4>
        <p className="text-white/70 text-sm mt-1 max-w-xl">
          {children}
        </p>
      </div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

/* ---------- MAIN SECTION ---------- */
export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const lineRef = useRef(null);
  const timelineDots = useRef([]);

  /* LEFT BLOCK PARALLAX */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { y: 40 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* TIMELINE DOTS + LINE */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(timelineDots.current, { scale: 0, opacity: 0 });

      gsap.to(timelineDots.current, {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 max-w-7xl mx-auto"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div ref={leftRef}>
          <h2
            id="why-choose-us-heading"
            className="section-title mb-6"
          >
            Why Choose <AuroraText>TechFavours</AuroraText>
          </h2>

          <p className="section-subtitle mb-10">
            We don’t just deliver projects — we become your long-term
            technology partner, working closely with your team to design,
            build, improve, and scale digital products with clarity and trust.
          </p>

          <div className="relative pl-6">
            {/* Vertical line */}
            <div className="absolute left-[6px] top-0 h-full w-px bg-white/10 overflow-hidden">
              <div
                ref={lineRef}
                className="absolute top-0 left-0 w-full h-full bg-white/40 origin-top scale-y-0"
              />
            </div>

            <TimelineItem
              ref={(el) => (timelineDots.current[0] = el)}
              title="Performance-first development"
            >
              We build fast, scalable, and stable systems using clean
              architecture and best engineering practices.
            </TimelineItem>

            <TimelineItem
              ref={(el) => (timelineDots.current[1] = el)}
              title="Reference-driven execution"
            >
              We actively work on your references, inspirations, and
              competitors to align the product exactly with your vision.
            </TimelineItem>

            <TimelineItem
              ref={(el) => (timelineDots.current[2] = el)}
              title="Early samples & prototypes"
            >
              Before full development, we provide basic samples or UI
              prototypes so you can review, validate, and guide the direction.
            </TimelineItem>

            <TimelineItem
              ref={(el) => (timelineDots.current[3] = el)}
              title="Daily enhancement & progress updates"
            >
              You receive regular updates on improvements, changes, and
              enhancements so you’re always informed and in control.
            </TimelineItem>

            <TimelineItem
              ref={(el) => (timelineDots.current[4] = el)}
              title="Review, recheck & optimize"
            >
              Every feature goes through review and rechecking to ensure
              quality, performance, and consistency before delivery.
            </TimelineItem>

            <TimelineItem
              ref={(el) => (timelineDots.current[5] = el)}
              title="Long-term support & continuous improvement"
            >
              Post-launch, we continue improving, optimizing, and evolving
              your product as your business grows.
            </TimelineItem>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">
          <Beam />
        </div>
      </div>
    </section>
  );
}

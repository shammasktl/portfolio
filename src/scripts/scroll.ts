import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function initScroll(): void {
  // Only enable high-CPU Lenis smooth scroll on Desktop (width >= 1024px and non-coarse pointer)
  const isDesktop =
    typeof window !== "undefined" &&
    window.innerWidth >= 1024 &&
    !window.matchMedia("(pointer: coarse)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lenis: Lenis | null = null;

  if (isDesktop) {
    // Initialize Lenis for desktop
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Sync scroll event with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis to GSAP ticker
    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000);
    });

    // Disable lag smoothing for better sync
    gsap.ticker.lagSmoothing(0);

    // Manage preloader locking safely
    const preloaderEl = document.getElementById("preloader");
    const isIntroPlayed = sessionStorage.getItem("introPlayed");
    if (preloaderEl && !isIntroPlayed) {
      lenis.stop();
      window.addEventListener("preloaderFinished", () => {
        lenis?.start();
      });
    } else {
      lenis.start();
    }
  }

  // Back to Top and Progress Indicators
  const backToTopBtn = document.getElementById("back-to-top");
  const progressPath = document.querySelector(
    ".back-to-top-progress-path",
  ) as SVGPathElement | null;
  const progressBar = document.querySelector(
    ".reading-progress-bar",
  ) as HTMLElement | null;
  const header = document.querySelector("header");

  let pathLength = 0;
  if (progressPath) {
    pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
  }

  const handleScrollState = (scroll: number, limit: number) => {
    // 1. Reading Progress Bar
    if (progressBar && limit > 0) {
      const percentage = (scroll / limit) * 100;
      progressBar.style.width = `${percentage}%`;
    }

    // 2. Back to Top Circle Progress & Visibility
    if (backToTopBtn) {
      if (scroll > 300) {
        backToTopBtn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        backToTopBtn.classList.add("opacity-100", "translate-y-0");
      } else {
        backToTopBtn.classList.remove("opacity-100", "translate-y-0");
        backToTopBtn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      }

      if (progressPath && limit > 0) {
        const percentage = limit > 0 ? scroll / limit : 0;
        const offset = pathLength - percentage * pathLength;
        progressPath.style.strokeDashoffset = `${offset}`;
      }
    }

    // 3. Header sticky state
    if (header) {
      if (scroll > 50) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }
  };

  if (lenis) {
    lenis.on("scroll", ({ scroll, limit }) => handleScrollState(scroll, limit));
  } else {
    // Native scroll fallback for mobile & tablet
    const onNativeScroll = () => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      const limit =
        document.documentElement.scrollHeight - window.innerHeight;
      handleScrollState(scroll, limit);
    };
    window.addEventListener("scroll", onNativeScroll, { passive: true });
    onNativeScroll();
  }

  // Back to Top button click event
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute("href");
      if (targetId && targetId !== "#") {
        if (lenis) {
          lenis.scrollTo(targetId, { offset: -80 });
        } else {
          const el = document.querySelector(targetId);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }
      }
    });
  });

  // --- GSAP Scroll Trigger Animations ---

  // Fade up reveal
  const reveals = gsap.utils.toArray(".scroll-reveal");
  reveals.forEach((el: any) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  // Slide from left reveal
  const revealsLeft = gsap.utils.toArray(".scroll-reveal-left");
  revealsLeft.forEach((el: any) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  // Slide from right reveal
  const revealsRight = gsap.utils.toArray(".scroll-reveal-right");
  revealsRight.forEach((el: any) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  // Scale reveal
  const revealsScale = gsap.utils.toArray(".scroll-reveal-scale");
  revealsScale.forEach((el: any) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  // Stagger reveal for card groups
  const staggerContainers = gsap.utils.toArray(".scroll-stagger");
  staggerContainers.forEach((container: any) => {
    const items = container.querySelectorAll(".scroll-stagger-item");
    if (items.length > 0) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  });

  // Parallax background items (Desktop only for performance)
  if (isDesktop) {
    const parallaxes = gsap.utils.toArray(".scroll-parallax");
    parallaxes.forEach((el: any) => {
      const depth = parseFloat(el.getAttribute("data-depth") || "0.15");
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: () => -ScrollTrigger.maxScroll(window) * depth,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
  }
}


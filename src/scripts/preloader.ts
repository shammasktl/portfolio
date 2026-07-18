import gsap from "gsap";

const greetings: string[] = [
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "Olá",
  "你好",
  "Nǐ hǎo",
];

export function initPreloader(): void {
  const preloader = document.getElementById("preloader");
  const textEl = document.getElementById("glitch-text");

  if (!preloader || !textEl) return;

  if (sessionStorage.getItem("introPlayed")) {
    preloader.remove();
    return;
  }

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  document.body.style.overflow = "hidden";

  const finishIntro = (): void => {
    document.body.style.overflow = "";
    sessionStorage.setItem("introPlayed", "true");
    window.dispatchEvent(new Event("preloaderFinished"));
  };

  if (reduceMotion) {
    gsap.to(preloader, {
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      onComplete: () => {
        preloader.remove();
        finishIntro();
      },
    });
    return;
  }

  const t1 = gsap.timeline({
    onComplete: () => {
      preloader.classList.add("exit");
      setTimeout(() => {
        preloader.remove();
      }, 800);
      finishIntro();
    },
  });

  greetings.forEach((word: string, i: number) => {
    t1.call(() => {
      textEl.textContent = word;
      textEl.setAttribute("data-text", word);
    })
      .fromTo(
        textEl,
        { opacity: 0, x: () => gsap.utils.random(-15, 15) },
        { opacity: 1, x: 0, ease: "power1.out" },
      )
      .to(textEl, {
        opacity: i === greetings.length - 1 ? 1 : 0,
        duration: 0.1,
        delay: i === greetings.length - 1 ? 0.4 : 0.05,
      });
  });

  t1.to(textEl, { scale: 1.1, duration: 0.15, ease: "power2.out" })
    .to(textEl, {
      scale: 1,
      duration: 0.2,
      ease: "power2.in",
    })
    .to(preloader, {
      y: "-100%",
      duration: 0.3,
      ease: "power3.inOut",
      onComplete: finishIntro,
    });
}

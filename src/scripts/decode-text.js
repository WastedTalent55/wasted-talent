function initDecodeText() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const chars = '!<>-_/[]{}—=+*^?#';

  function decodeText(el) {
    const finalText = el.textContent || '';
    if (prefersReducedMotion) return;

    let iteration = 0;
    const totalSteps = finalText.length * 3;

    const interval = setInterval(() => {
      el.textContent = finalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration / 3) return finalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      iteration++;
      if (iteration >= totalSteps) {
        el.textContent = finalText;
        clearInterval(interval);
      }
    }, 25);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          decodeText(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll('.decode-text').forEach((el) => observer.observe(el));
}

document.addEventListener('astro:page-load', initDecodeText);
interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export const ScrollLink = ({
  to,
  children,
  duration = 1000,
  delay = 0,
}: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const target = document.getElementById(to);
    if (!target) return;

    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + startY;
    const distance = endY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number): number =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      const scrollPosition = startY + distance * eased;

      window.scrollTo({ top: scrollPosition, behavior: "auto" });

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    // Start scrolling after the specified delay
    setTimeout(() => {
      requestAnimationFrame(animateScroll);
    }, delay);
  };

  return (
    <span
      onClick={handleClick}
      style={{
        cursor: "pointer",
        display: "inline-block",
        transitionDuration: "300ms",
      }}
    >
      {children}
    </span>
  );
};

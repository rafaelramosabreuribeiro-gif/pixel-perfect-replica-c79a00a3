import { useCallback, useRef, type PointerEvent } from "react";

/** Soft 3D tilt + cursor spotlight. Sets --rx/--ry/--mx/--my on the element. */
export function useTilt<T extends HTMLElement>(max = 6) {
  const ref = useRef<T>(null);

  const onPointerMove = useCallback(
    (e: PointerEvent<T>) => {
      const el = ref.current;
      if (!el || e.pointerType !== "mouse") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
      el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    },
    [max],
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}

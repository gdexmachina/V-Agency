"use client";

import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let x = -30;
    let y = -30;
    const cursor = document.querySelector<HTMLElement>(".cursor-follower");
    if (!cursor) return;

    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          cursor.style.left = `${x}px`;
          cursor.style.top = `${y}px`;
          frame = 0;
        });
      }
      setVisible(true);
    };
    const enlarge = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("a, button, [data-cursor='large']")) {
        cursor.classList.add("is-large");
      } else {
        cursor.classList.remove("is-large");
      }
    };
    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enlarge);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enlarge);
      document.removeEventListener("mouseleave", hide);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      className="cursor-follower hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
    />
  );
}

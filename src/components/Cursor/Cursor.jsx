"use client";

import { useEffect, useState } from "react";
import "./Cursor.scss";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [enabled, setEnabled] = useState(() => {
    return (typeof window !== "undefined" && window.innerWidth > 1024) || false;
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", mouseMove);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  if (!enabled) return null;
  return (
    <motion.div className="cursor" animate={{ x: position.x, y: position.y }} />
  );
}

export default Cursor;

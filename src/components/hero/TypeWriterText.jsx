"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypeWriterText() {
  const [text] = useTypewriter({
    words: ["FullStack Developer", "FrontEnd Developer", "BackEnd Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      {text}
      <Cursor />
    </>
  );
}

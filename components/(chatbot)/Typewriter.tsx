import React, { useState, useEffect, useRef } from "react";

const Typewriter = ({
  text,
  delay,
  setIsTyping,
}: {
  text: string;
  delay: number;
  setIsTyping: any;
}) => {
  const [currentText, setCurrentText] = useState(text);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentText("");
  }, []);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentText.length) {
      ref.current?.scrollIntoView({ behavior: "instant" });
      // bref.current?.scrollIntoView({
      //   behavior: "smooth",
      //   // block: "end",
      // });
    }
  }, [currentText]);

  useEffect(() => {
    if (currentIndex < text.length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, setIsTyping]);

  useEffect(() => {
    if (currentIndex === text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, setIsTyping, text]);

  return (
    <>
      <>{currentText}</>
      <input className="opacity-0 w-0 h-0" aria-hidden ref={ref} />
    </>
  );
};

export default Typewriter;

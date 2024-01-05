import React, { useState, useEffect, useRef } from "react";

const Typewriter = ({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) => {
  const [currentText, setCurrentText] = useState(text);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentText.length) {
      ref.current?.focus();
    }
  }, [currentText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentText("");
    }, 5);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <>
      <>{currentText}</>
      <input className="opacity-0 w-0 h-0" aria-hidden ref={ref} />
    </>
  );
};

export default Typewriter;

import { cn, splitString } from "@/lib/utils";
import { RotateCcw, StepBack, StepForward } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const FlashCard = ({ val }: { val: string }) => {
  const [original, setOriginal] = useState(splitString(val));
  const [show, setShow] = useState<string[]>([]);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (show.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [show.length]);

  const add = useCallback(() => {
    if (original[0]) {
      setShow((show) => [...show, original[0]]);
      setOriginal((original) => original.slice(1));
    }
  }, [original]);

  const remove = useCallback(() => {
    if (show.length > 0) {
      setOriginal((original) => [show.slice(-1)[0], ...original]);
      setShow((show) => show.slice(0, -1));
    }
  }, [show]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        add();
      } else if (event.key === "ArrowLeft") {
        remove();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [add, remove]);

  const restart = () => {
    if (show[0]) {
      setOriginal(splitString(val));
      setShow([]);
    }
  };

  return (
    <>
      {/* FLASHCARD */}
      <div className="w-full flex justify-center gap-5">
        <div className="w-full max-w-[75%] md:max-w-[50%] min-h-[calc(100vh*3/4)] border rounded-lg bg-neutral-200 text-neutral-600 px-5 py-4 ">
          {show.map((phrase, index) => (
            <p
              className={cn("intro font-normal transition-all", {
                "font-bold text-neutral-700":
                  phrase === show.slice(-1)[0],
              })}
              key={index}
            >
              {phrase}
            </p>
          ))}
        </div>
      </div>
      {/* MENU */}
      <div className="flex w-full max-w-[75%] md:max-w-[50%] sticky bottom-8 z-50 bg-zinc-700 text-neutral-200 rounded-lg opacity-80 hover:opacity-100 transition-all justify-between">
        <div
          className="rounded-full hover:bg-neutral-800 transition-all p-3 cursor-pointer"
          onClick={remove}
        >
          <StepBack />
        </div>
        <div
          className="rounded-full hover:bg-neutral-800 transition-all p-3 cursor-pointer"
          onClick={restart}
        >
          <RotateCcw />
        </div>

        <div
          className="rounded-full hover:bg-neutral-800 transition-all p-3 cursor-pointer"
          onClick={add}
        >
          <StepForward />
        </div>
      </div>
      <div ref={ref} />
    </>
  );
};
export default FlashCard;

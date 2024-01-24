import { splitString } from "@/lib/utils";
import { RotateCcw, StepBack, StepForward } from "lucide-react";
import { useState } from "react";

const FlashCard = ({ val }: { val: string }) => {
  const [original, setOriginal] = useState(splitString(val));
  const [show, setShow] = useState<string[]>([]);

  const add = () => {
    if (original[0]) {
      setShow((show) => [...show, original[0]]);
      setOriginal((original) => original.slice(1));
    }
  };

  const remove = () => {
    if (show.length > 0) {
      setOriginal((original) => [show.slice(-1)[0], ...original]);
      setShow((show) => show.slice(0, -1));
    }
  };

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
            <p className="intro" key={index}>
              {phrase}
            </p>
          ))}
        </div>
        {/* <div ref={scrollref}/> */}
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
    </>
  );
};
export default FlashCard;

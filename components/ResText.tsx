import { cn } from "@/lib/utils";
import { useState } from "react";

const ResText = ({
  str,
  aws,
  perfect,
  index,
}: {
  str: string;
  aws: string;
  perfect: number[];
  index: number;
}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  // console.log(index, perfect);

  return (
    <p
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "relative font-bold text-sky-950 drop-shadow-md cursor-help",
        {
          "bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.600),theme(colors.indigo.300),theme(colors.sky.600),theme(colors.fuchsia.600),theme(colors.sky.600),theme(colors.indigo.300),theme(colors.indigo.600))] bg-[length:200%_auto] animate-gradient font-extrabold drop-shadow-lg cursor-default":
            perfect?.includes(index - 1),
        }
      )}
    >
      {str}
      {hover && !perfect?.includes(index - 1) && (
        <p className="absolute bg-yellow-300/90 top-0 w-full z-30 text-muted-foreground transition px-2 py-1 rounded-md font-bold">
          {aws}
        </p>
      )}
    </p>
  );
};
export default ResText;

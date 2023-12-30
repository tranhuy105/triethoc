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
    <div
      className="relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <p
        className={cn(
          "font-bold text-sky-950 drop-shadow-md cursor-help sticky  w-full z-20",
          {
            "bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.600),theme(colors.indigo.300),theme(colors.sky.600),theme(colors.fuchsia.600),theme(colors.sky.600),theme(colors.indigo.300),theme(colors.indigo.600))] bg-[length:200%_auto] animate-gradient font-extrabold drop-shadow-lg cursor-default":
              perfect?.includes(index - 1),
          }
        )}
      >
        {str}
      </p>
      {hover && !perfect?.includes(index - 1) && (
        <p className="absolute duration-300 bg-yellow-300/90 top-0 w-full z-40 text-muted-foreground transition px-2 py-1 rounded-md font-bold">
          {aws}
        </p>
      )}
    </div>
  );
};
export default ResText;

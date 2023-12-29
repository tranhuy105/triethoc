import { useState } from "react";

const ResText = ({ str, aws }: { str: string; aws: string }) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <p
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative font-bold"
    >
      {str}
      {hover && (
        <p className="absolute bg-yellow-300/90 top-0 w-full z-30 text-muted-foreground transition px-2 py-1 rounded-md font-medium">
          {aws}
        </p>
      )}
    </p>
  );
};
export default ResText;

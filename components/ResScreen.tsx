import Image from "next/image";
import { cn } from "@/lib/utils";

const ResScreen = () => {
  return (
    <div className="flex flex-col text-center border-2 rounded-md shadow-md px-5 py-3">
      <p className="text-sm text-muted-foreground pb-2">
        <span className={cn("text-red-400 font-bold")}>
          My honest reaction
        </span>{" "}
        to that information
      </p>
      <div className="w-80 h-64 relative rounded-md shadow-sm">
        <Image
          src={"/akito.jpg"}
          alt="akito_meme"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
export default ResScreen;

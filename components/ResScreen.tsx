import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ResScreen = ({
  percen,
  modString,
  val,
  setmodString,
}: {
  percen: number;
  modString: string;
  val: string;
  setmodString: any;
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-8 ">
      <div className="flex flex-col items-center justify-center mb-16 md:flex-row md:gap-6 gap-0 mt-16">
        <div className="leading-10 tracking-wide text-4xl text-center font-bold mb-8 md:w-1/2 md:text-6xl">
          Câu trả lời của bạn{" "}
          <span className="text-red-400 font-extrabold">
            chính xác {percen}%
          </span>
        </div>
        <div className="flex flex-col text-center border-2 rounded-md shadow-md px-5 py-3">
          <p className="text-sm text-muted-foreground pb-2">
            <span className={cn("text-red-400 font-bold")}>
              My honest reaction
            </span>{" "}
            to that information
          </p>
          <div className="w-80 h-64 relative rounded-md shadow-sm">
            <Image
              src={percen < 80 ? "/akito.jpg" : "/wandahoi.jpg"}
              alt="akito_meme"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full md:max-w-[1200px] items-center md:gap-10">
        <div className="md:flex md:flex-col md:w-1/2 md:items-center block w-full">
          <p className="w-full min-h-[400px] border-2 border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 shadow-md font-bold">
            {modString}
          </p>
          <p className="text-sm text-muted-foreground pt-2 pb-8 text-center">
            Đáp án
          </p>
        </div>
        <div className="md:flex md:flex-col md:w-1/2 md:items-center block w-full">
          <p className="w-full min-h-[400px] border-2 border-gray-300 bg-gray-100 px-3 py-2 text-gray-600 shadow-md font-bold">
            {val}
          </p>
          <p className="text-sm text-muted-foreground pt-2 pb-8 text-center">
            Câu trả lời của bạn
          </p>
        </div>
      </div>

      <Button
        variant={"default"}
        className="max-w-[1200px] w-full"
        onClick={() => setmodString("")}
      >
        Nhấn vào đây để thử lại (đánh máy tiếp)
      </Button>
    </div>
  );
};
export default ResScreen;

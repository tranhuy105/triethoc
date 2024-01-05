"use client";
import Bot from "@/components/(chatbot)/Bot";
import Navbar from "@/components/Navbar";
import ResScreen from "@/components/ResScreen";
import ResText from "@/components/ResText";
import ResetButton from "@/components/ResetButton";
import TextArea from "@/components/TextArea";
import { celebrate } from "@/components/confetti/celebrate";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import {
  abbreviateWords,
  cn,
  compareStringsAndOutputPercentage,
  firstWordsOfLines,
  splitString,
} from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [val, setVal] = useState("");
  const [type, setType] = useState("");
  const [isLearning, setIsLearning] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("Flashcard");
  // const [percen, setPercen] = useState(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [res, setRes] = useState([""]);
  // const [hardMode, setHardMode] = useState(false);
  const [perfect, setPerfect] = useState<number[]>([]);
  const [wrong, setWrong] = useState(false);
  // const [modString, setmodString] = useState("");
  const { toast } = useToast();

  const isFinised = currentIndex === splitString(val).length;

  // const ref = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   ref.current?.scrollIntoView({
  //     behavior: "instant",
  //     block: "end",
  //   });
  // }, [type]);

  const startLearning = () => {
    if (val !== "") {
      setIsLearning(true);
    }
  };

  const handleReset = () => {
    if (isLearning) {
      setVal("");
      setIsLearning(false);
      setCount(0);
      setCurrent(0);
      setType("");
      setCurrentIndex(0);
      setRes([""]);
      setPerfect([]);
      setWrong(false);
      // setmodString("");
    }
  };

  const handleReplay = () => {
    setCurrentIndex(0);
    setType("");
    setRes([""]);
    setPerfect([]);
    setWrong(false);
  };

  const handleRetry = () => {
    setType("");
    // if (hardMode) {
    //   setCurrentIndex(0);
    //   setRes([""]);
    // }
    setWrong(false);
  };
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, handleRetry);

  const handleCheck = (str1: string, str2: string) => {
    const arrofstr = splitString(str1);

    if (isFinised) {
      // console.log("het roi");
      return;
    }

    if (str2) {
      const { percentage } = compareStringsAndOutputPercentage(
        arrofstr[currentIndex],
        str2
      );
      if (percentage >= 80) {
        if (percentage === 100) {
          setPerfect((cur) => [...cur, currentIndex]);
          celebrate();
        }
        setRes((cur) => [
          ...cur,
          str2 + ` (${percentage.toString()}%)`,
        ]);
        setCurrentIndex((c) => c + 1);
        setType("");
        if (percentage !== 100)
          toast({
            title: `Quá ngon, bạn trả lời đúng ${percentage}%`,
            description: "Cố lên nhé!",
          });
      } else if (percentage < 80) {
        setWrong(true);
        // toast({
        //   title: "Sai rồi, đáp án là ",
        //   description: `${arrofstr[currentIndex]}`,
        //   variant: "destructive",
        // });
        // console.log(arrofstr[currentIndex + 1]);
      }
      // console.log(percentage);
    }
    // console.log(arrofstr);

    // Check nếu % đúng > 80% thì cho nhập tiếp câu tiếp theo, sai thì bắt nhập lại toàn bộ từ đầu, làm thế nào để chuyển sang câu tiếp theo đây?
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className={cn(
        "flex flex-col gap-4 items-center relative bg-neutral-100 pb-12",
        {
          "pb-0": mode === "Bot",
        }
      )}
    >
      <Navbar
        mode={mode}
        setMode={setMode}
        // hardMode={hardMode}
        // setHardMode={setHardMode}
      />
      {isLearning &&
        (mode === "Flashcard" ? (
          <>
            <Carousel
              opts={{
                loop: true,
              }}
              setApi={setApi}
              className="w-full max-w-[75%] md:max-w-[50%]"
            >
              <CarouselPrevious />
              <CarouselContent>
                <CarouselItem>
                  <TextArea
                    val={val}
                    setVal={setVal}
                    isLearning={isLearning}
                  />
                </CarouselItem>
                <CarouselItem>
                  <TextArea
                    val={abbreviateWords(val)}
                    setVal={setVal}
                    isLearning={isLearning}
                  />
                </CarouselItem>
                <CarouselItem>
                  <TextArea
                    val={firstWordsOfLines(val)}
                    setVal={setVal}
                    isLearning={isLearning}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
            </Carousel>
            <div className="text-grat-500 text-base">
              Bước {current}/{count}
            </div>
            <div>
              {current === 1 && (
                <div className="text-sm text-muted-foreground text-center px-3">
                  Đọc qua một lượt để ngấm trước cái nhỉ{" "}
                  <span className="text-muted-foreground">
                    (vài lượt cũng được)
                  </span>
                </div>
              )}
              {current === 2 && (
                <div className="text-sm text-muted-foreground text-center px-3">
                  Giờ hãy nhìn vào những chữ cái đầu tiên của mỗi từ
                  để đọc lại cả đoạn{" "}
                  <span className="text-muted-foreground">
                    (cố gắng không bỏ sót 1 từ nào!)
                  </span>
                </div>
              )}
              {current === 3 && (
                <div className="text-sm text-muted-foreground text-center px-3">
                  Giờ nhìn vào mỗi từ đầu câu để đọc lại cả câu.{" "}
                  <span className="text-muted-foreground">
                    (Cứ lặp lại 3 bước đến khi nào thuộc thì thôi!)
                  </span>
                </div>
              )}
            </div>
          </>
        ) : mode === "Bot" ? (
          <>
            <Bot val={splitString(val)} />
          </>
        ) : (
          <>
            {res[1] && (
              <div className="w-4/5 md:w-3/5 flex flex-col items-start gap-1 shadow-lg px-4 py-3 rounded-md bg-neutral-100">
                {res.map((str, index) => (
                  <ResText
                    key={index}
                    str={str}
                    aws={splitString(val)[index - 1]}
                    perfect={perfect}
                    index={index}
                  />
                ))}
              </div>
            )}
            {/* {!modString ? ( */}
            <div className="w-4/5 md:w-3/5 flex flex-col items-center gap-5">
              {!isFinised ? (
                <TextArea
                  val={type}
                  setVal={setType}
                  isLearning={false}
                  placeholder="Gõ lại từng câu 1 trong đoạn văn của bạn (1 câu ở đây được tính bằng kí tự xuống dòng), nếu đúng trên 80% sẽ được đi tiếp câu sau, không thì gõ lại từ đầu (hardmode). Có thể bấm vào bảng kết quả để xem đáp án gốc"
                />
              ) : (
                <ResScreen />
              )}
              {!isFinised ? (
                <Button
                  variant={"default"}
                  className="w-48"
                  onClick={() => handleCheck(val, type)}
                >
                  Kiểm tra
                </Button>
              ) : (
                <Button
                  variant={"destructive"}
                  className="w-48"
                  onClick={handleReplay}
                >
                  Chơi lại{" "}
                </Button>
              )}
            </div>
            {/* ) : (
              <>
                <ResScreen
                  percen={percen}
                  modString={modString}
                  val={type}
                  setmodString={setmodString}
                />
                {splitString(val).map((s) => (
                  <p className="my-12" key={s}>
                    {s}
                  </p>
                ))}
              </>
            )} */}
          </>
        ))}
      {!isLearning && (
        <div className="w-4/5 md:w-1/2 flex flex-col items-center gap-5">
          <TextArea
            val={val}
            setVal={setVal}
            isLearning={isLearning}
          />

          <Button
            variant={"default"}
            className="w-48"
            onClick={startLearning}
          >
            Bắt đầu học
          </Button>
        </div>
      )}
      {isLearning && mode !== "Bot" && (
        // <Button
        //   variant={"ghost"}
        //   className="w-48 text-muted-foreground text-red-300 font-bold"
        //   onClick={handleReset}
        // >
        //   Học 1 văn bản khác
        // </Button>
        <ResetButton handleReset={handleReset} />
      )}
      {wrong && (
        <div className="fixed h-full overflow-y-hidden z-50 inset-0 bg-black/80">
          <div className="flex items-center justify-center h-full overflow-hidden">
            <div
              className="bg-white h-[70%] w-4/5 md:w-[600px] md:h-[90%] rounded-lg px-4 py-4 text-muted-foreground font-bold overflow-y-scroll space-y-4"
              ref={ref}
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-red-600 text-center pt-4">
                Sai rồi, chuẩn bị đóng tiền học lại thôi bạn ơi
              </h1>
              <h2 className="text-xl font-extrabold  text-center py-2">
                Đáp án đúng phải là:
              </h2>
              <p className="bg-zinc-200 drop-shadow-lg px-3 py-2 rounded-lg text-muted-foreground font-bold text-lg max-w-[400px] w-full mx-auto text-ellipsis h-auto overflow-hidden">
                {splitString(val)[currentIndex]}
              </p>
              <div className="my-3 relative max-w-[400px] w-full h-[300px] flex mx-auto rounded-full">
                <Image
                  src={"/mizukinesobari.jpg"}
                  fill
                  alt="hoc lai thoi"
                  className="rounded-lg"
                />
              </div>
              <Button
                onClick={handleRetry}
                className="mx-auto max-w-[400px] w-full block"
              >
                Thử lại
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

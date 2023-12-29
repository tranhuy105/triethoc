"use client";
import Navbar from "@/components/Navbar";
import ResScreen from "@/components/ResScreen";
import ResText from "@/components/ResText";
import ResetButton from "@/components/ResetButton";
import TextArea from "@/components/TextArea";
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
import {
  abbreviateWords,
  compareStringsAndOutputPercentage,
  firstWordsOfLines,
  splitString,
} from "@/lib/utils";
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
  const [hardMode, setHardMode] = useState(false);
  // const [modString, setmodString] = useState("");
  const { toast } = useToast();

  const isFinised = currentIndex === splitString(val).length;

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: "instant",
      block: "end",
    });
  }, [type]);

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
      // setmodString("");
    }
  };

  const handleReplay = () => {
    setCurrentIndex(0);
    setType("");
    setRes([""]);
  };
  const handleCheck = (str1: string, str2: string) => {
    const arrofstr = splitString(str1);

    if (isFinised) {
      console.log("het roi");
      return;
    }

    if (str2) {
      const { percentage } = compareStringsAndOutputPercentage(
        arrofstr[currentIndex],
        str2
      );
      if (percentage >= 80) {
        setRes((cur) => [
          ...cur,
          str2 + ` (${percentage.toString()}%)`,
        ]);
        setCurrentIndex((c) => c + 1);
        setType("");
        toast({
          title: `Quá ngon, bạn trả lời đúng ${percentage}%`,
          description: "Cố lên nhé!",
        });
      } else if (percentage < 80) {
        setType("");
        if (hardMode) {
          setCurrentIndex(0);
          setRes([""]);
        }
        toast({
          title: "Sai rồi, hãy thử lại",
          description: `Đáp án là ${arrofstr[currentIndex]}`,
          variant: "destructive",
        });
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
    <div className="flex flex-col gap-4 items-center pb-12 relative">
      <Navbar
        mode={mode}
        setMode={setMode}
        hardMode={hardMode}
        setHardMode={setHardMode}
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
        ) : (
          <>
            {res[1] && (
              <div className="w-4/5 md:w-3/5 flex flex-col items-start gap-1 shadow-lg px-4 py-3 rounded-md bg-zinc-100">
                {res.map((str, index) => (
                  <ResText
                    key={index}
                    str={str}
                    aws={splitString(val)[index - 1]}
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
                  placeholder="Gõ y hệt những gì mà bạn nhớ được (không cần gõ kí tự đặc biệt và dấu câu, chấm phẩy)"
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
      {isLearning && (
        // <Button
        //   variant={"ghost"}
        //   className="w-48 text-muted-foreground text-red-300 font-bold"
        //   onClick={handleReset}
        // >
        //   Học 1 văn bản khác
        // </Button>
        <ResetButton handleReset={handleReset} />
      )}
      <div ref={ref} />
    </div>
  );
}

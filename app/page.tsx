"use client";
import Navbar from "@/components/Navbar";
import ResScreen from "@/components/ResScreen";
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
import {
  abbreviateWords,
  compareStringsAndOutputPercentage,
  firstWordsOfLines,
} from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [val, setVal] = useState("");
  const [type, setType] = useState("");
  const [isLearning, setIsLearning] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState("Flashcard");
  const [percen, setPercen] = useState(0.1);
  const [modString, setmodString] = useState("");

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
      setmodString("");
    }
  };

  const handleCheck = (str1: string, str2: string) => {
    if (str2) {
      const { modifiedString, percentage } =
        compareStringsAndOutputPercentage(str1, str2);
      setmodString(modifiedString);
      setPercen(percentage);
    }
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
      <Navbar mode={mode} setMode={setMode} />
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
                <div className="text-sm text-muted-foreground">
                  Đọc qua một lượt để ngấm trước cái nhỉ{" "}
                  <span className="text-muted-foreground">
                    (vài lượt cũng được)
                  </span>
                </div>
              )}
              {current === 2 && (
                <div className="text-sm text-muted-foreground">
                  Giờ hãy nhìn vào những chữ cái đầu tiên của mỗi từ
                  để đọc lại cả đoạn{" "}
                  <span className="text-muted-foreground">
                    (cố gắng không bỏ sót 1 từ nào!)
                  </span>
                </div>
              )}
              {current === 3 && (
                <div className="text-sm text-muted-foreground">
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
            {" "}
            {!modString ? (
              <div className="w-3/5 flex flex-col items-center gap-5">
                <TextArea
                  val={type}
                  setVal={setType}
                  isLearning={false}
                  placeholder="Gõ y hệt những gì mà bạn nhớ được (không cần gõ kí tự đặc biệt kể cả chấm phẩy"
                />
                <Button
                  variant={"default"}
                  className="w-48"
                  onClick={() => handleCheck(val, type)}
                >
                  Kiểm tra
                </Button>
              </div>
            ) : (
              <>
                <ResScreen
                  percen={percen}
                  modString={modString}
                  val={type}
                  setmodString={setmodString}
                />
              </>
            )}
          </>
        ))}
      {!isLearning && (
        <div className="w-1/2 flex flex-col items-center gap-5">
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
    </div>
  );
}

"use client";
import FlashCard from "@/components/(flashcard)/FlashCard";
import Navbar from "@/components/Navbar";
import ResScreen from "@/components/ResScreen";
import ResText from "@/components/ResText";
import ResetButton from "@/components/ResetButton";
import TextArea from "@/components/TextArea";
import { celebrate } from "@/components/confetti/celebrate";
import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import { Question, questionPackages } from "@/data";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import {
    cn,
    compareStringsAndOutputPercentage,
    splitString,
} from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Component for selecting a question package
const PackageSelector = ({
    selectedPackage,
    onSelectPackage,
}: {
    selectedPackage: string;
    onSelectPackage: (packageId: string) => void;
}) => {
    return (
        <div className="flex flex-wrap gap-3 justify-center mb-4">
            {questionPackages.map((pack) => (
                <Button
                    key={pack.id}
                    variant={
                        selectedPackage === pack.id
                            ? "default"
                            : "outline"
                    }
                    onClick={() => onSelectPackage(pack.id)}
                    className="px-4 py-2"
                >
                    {pack.name}
                </Button>
            ))}
        </div>
    );
};

// Component for selecting a question within a package
const QuestionSelector = ({
    packageId,
    selectedQuestion,
    onSelectQuestion,
}: {
    packageId: string;
    selectedQuestion: string;
    onSelectQuestion: (question: Question) => void;
}) => {
    const currentPackage = questionPackages.find(
        (p) => p.id === packageId
    );

    if (!currentPackage) return null;

    return (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
            {currentPackage.questions.map(
                (question, index) => (
                    <p
                        className={cn(
                            "hover:bg-zinc-200 transition-all rounded-md px-2 py-3 text-center cursor-pointer text-muted-foreground",
                            {
                                "bg-zinc-200":
                                    selectedQuestion ===
                                    question.label,
                            }
                        )}
                        key={index}
                        onClick={() =>
                            onSelectQuestion(question)
                        }
                    >
                        {question.label.slice(0, 5)}
                    </p>
                )
            )}
        </div>
    );
};

export default function Home() {
    const [val, setVal] = useState("");
    const [select, setSelect] = useState("");
    const [type, setType] = useState("");
    const [isLearning, setIsLearning] = useState(false);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [mode, setMode] = useState("Flashcard");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [res, setRes] = useState([""]);
    const [perfect, setPerfect] = useState<number[]>([]);
    const [wrong, setWrong] = useState(false);
    const [selectedPackage, setSelectedPackage] =
        useState("lsd");
    const { toast } = useToast();

    const isFinised =
        currentIndex === splitString(val).length;

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
            setSelect("");
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
        setWrong(false);
    };

    const ref = useRef<HTMLDivElement>(null);
    useOnClickOutside(ref, handleRetry);

    const handleCheck = (str1: string, str2: string) => {
        const arrofstr = splitString(str1);

        if (isFinised) {
            return;
        }

        if (str2) {
            const { percentage } =
                compareStringsAndOutputPercentage(
                    arrofstr[currentIndex],
                    str2
                );
            if (percentage >= 80) {
                if (percentage === 100) {
                    setPerfect((cur) => [
                        ...cur,
                        currentIndex,
                    ]);
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
            }
        }
    };

    const handleSelectPackage = (packageId: string) => {
        setSelectedPackage(packageId);
        setSelect("");
        setVal("");
    };

    const handleSelectQuestion = (question: Question) => {
        setSelect(question.label);
        setVal(question.dapan);
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
            <Navbar mode={mode} setMode={setMode} />
            {isLearning &&
                (mode === "Flashcard" ? (
                    <FlashCard val={val} />
                ) : (
                    <>
                        <h1 className="font-bold text-2xl italic w-4/5 md:w-3/5 text-wrap leading-relaxed">
                            {select.slice(6)}
                        </h1>
                        {res[1] && (
                            <div className="w-4/5 md:w-3/5 flex flex-col items-start gap-1 shadow-lg px-4 py-3 rounded-md bg-neutral-100">
                                {res.map((str, index) => (
                                    <ResText
                                        key={index}
                                        str={str}
                                        aws={
                                            splitString(
                                                val
                                            )[index - 1]
                                        }
                                        perfect={perfect}
                                        index={index}
                                    />
                                ))}
                            </div>
                        )}
                        <div className="w-4/5 md:w-3/5 flex flex-col items-center gap-5">
                            {!isFinised ? (
                                <TextArea
                                    val={type}
                                    setVal={setType}
                                    isLearning={false}
                                    placeholder="Gõ lại từng câu 1 trong đoạn văn của bạn (1 câu ở đây được tính bằng kí tự xuống dòng), nếu đúng trên 80% sẽ được đi tiếp câu sau, không thì gõ lại từ đầu. Có thể bấm vào bảng kết quả để xem đáp án gốc"
                                />
                            ) : (
                                <ResScreen />
                            )}
                            {!isFinised ? (
                                <Button
                                    variant={"default"}
                                    className="w-48"
                                    onClick={() =>
                                        handleCheck(
                                            val,
                                            type
                                        )
                                    }
                                >
                                    Kiểm tra
                                </Button>
                            ) : (
                                <Button
                                    variant={"destructive"}
                                    className="w-48"
                                    onClick={handleReplay}
                                >
                                    Chơi lại
                                </Button>
                            )}
                        </div>
                    </>
                ))}
            {!isLearning && (
                <div className="w-4/5 md:w-1/2 flex flex-col items-center gap-3">
                    <p className="pt-3 text-lg font-thin">
                        Chọn gói câu hỏi:
                    </p>

                    <PackageSelector
                        selectedPackage={selectedPackage}
                        onSelectPackage={
                            handleSelectPackage
                        }
                    />

                    <p className="text-lg font-thin">
                        Gói câu hỏi hiện tại:{" "}
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.600),theme(colors.indigo.300),theme(colors.sky.600),theme(colors.fuchsia.600),theme(colors.sky.600),theme(colors.indigo.300),theme(colors.indigo.600))] bg-[length:200%_auto] animate-gradient font-extrabold drop-shadow-lg cursor-default">
                            {questionPackages.find(
                                (p) =>
                                    p.id === selectedPackage
                            )?.name || "Lịch sử Đảng"}
                        </span>
                    </p>

                    <QuestionSelector
                        packageId={selectedPackage}
                        selectedQuestion={select}
                        onSelectQuestion={
                            handleSelectQuestion
                        }
                    />

                    {select && (
                        <>
                            <h1 className="font-bold text-2xl italic">
                                {select.slice(6)}
                            </h1>

                            <div className="flex flex-1 w-full">
                                <TextArea
                                    val={val}
                                    setVal={setVal}
                                    isLearning={isLearning}
                                />
                            </div>
                        </>
                    )}

                    <Button
                        variant={"default"}
                        className="w-48"
                        onClick={startLearning}
                        disabled={!val}
                    >
                        Bắt đầu học
                    </Button>
                </div>
            )}
            {isLearning && mode !== "Bot" && (
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
                                Sai rồi, chuẩn bị đóng tiền
                                học lại thôi bạn ơi
                            </h1>
                            <h2 className="text-xl font-extrabold  text-center py-2">
                                Đáp án đúng phải là:
                            </h2>
                            <p className="bg-zinc-200 drop-shadow-lg px-3 py-2 rounded-lg text-muted-foreground font-bold text-lg max-w-[400px] w-full mx-auto text-ellipsis h-auto overflow-hidden">
                                {
                                    splitString(val)[
                                        currentIndex
                                    ]
                                }
                            </p>
                            <div className="my-3 relative max-w-[400px] w-full h-[300px] flex mx-auto rounded-full">
                                <Image
                                    src={
                                        "/mizukinesobari.jpg"
                                    }
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

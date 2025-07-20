"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { compareStringsAndOutputPercentage } from "@/lib/utils";
import {
    ChevronLeft,
    ChevronRight,
    Minus,
    Plus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface LearnDialogProps {
    isOpen: boolean;
    onClose: () => void;
    allSentences: string[];
    currentIndex: number;
    onNext: () => void;
    onPrevious: () => void;
}

interface Result {
    percentage: number;
    resultWords: { word: string; isCorrect: boolean }[];
}

export const LearnDialog = ({
    isOpen,
    onClose,
    allSentences,
    currentIndex,
    onNext,
    onPrevious,
}: LearnDialogProps) => {
    const [input, setInput] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [result, setResult] = useState<Result | null>(
        null
    );
    const [localCurrentIndex, setLocalCurrentIndex] =
        useState(currentIndex);
    const [forwardContextCount, setForwardContextCount] =
        useState(0);

    const currentText =
        allSentences[localCurrentIndex] || "";

    // Update local index when the currentIndex from props changes
    useEffect(() => {
        setLocalCurrentIndex(currentIndex);
    }, [currentIndex]);

    // Reset state when dialog opens or sentence changes
    useEffect(() => {
        if (isOpen) {
            setShowAnswer(true);
            setInput("");
            setResult(null);
            // setForwardContextCount(0); // Reset context on sentence change
        }
    }, [isOpen, localCurrentIndex]);

    const wordCount = currentText
        .split(/\s+/)
        .filter(Boolean).length;

    const handleReset = () => {
        setInput("");
        setResult(null);
        // setForwardContextCount(0); // Reset context
        textareaRef.current?.focus();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === "Enter") {
                handleReset();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () =>
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
    }, []);

    const handleCheck = () => {
        if (!input.trim()) return;
        const checkResult =
            compareStringsAndOutputPercentage(
                getTextToLearn(),
                input
            );
        setResult(checkResult);
    };

    const handlePrevious = () => {
        if (localCurrentIndex > 0) {
            setLocalCurrentIndex((prev) => prev - 1);
            onPrevious();
        }
    };

    const handleNext = () => {
        if (localCurrentIndex < allSentences.length - 1) {
            setLocalCurrentIndex((prev) => prev + 1);
            onNext();
        }
    };

    const getTextToLearn = () => {
        const start = localCurrentIndex;
        const end = Math.min(
            allSentences.length,
            localCurrentIndex + forwardContextCount + 1
        );
        return allSentences.slice(start, end).join("\n");
    };

    const isPass = result && result.percentage >= 80;

    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="max-w-4xl w-[95vw] md:w-[80vw] max-h-[90vh] overflow-y-auto">
                <AlertDialogHeader>
                    <div className="flex justify-between items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handlePrevious}
                            disabled={
                                localCurrentIndex === 0
                            }
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <AlertDialogTitle className="text-xl font-bold text-center">
                            Luyện tập (Câu{" "}
                            {localCurrentIndex + 1} /{" "}
                            {allSentences.length})
                        </AlertDialogTitle>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleNext}
                            disabled={
                                localCurrentIndex ===
                                allSentences.length - 1
                            }
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                    <AlertDialogDescription asChild>
                        <div className="space-y-4">
                            <p className="text-lg text-center text-muted-foreground">
                                Gõ lại đoạn văn sau (
                                {wordCount} từ):
                            </p>

                            <div className="flex justify-center items-center gap-4">
                                <div className="flex items-center gap-2 mr-auto">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-6 w-6"
                                        onClick={() =>
                                            setForwardContextCount(
                                                (p) =>
                                                    Math.max(
                                                        0,
                                                        p -
                                                            1
                                                    )
                                            )
                                        }
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="font-bold text-lg">
                                        {
                                            forwardContextCount
                                        }
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-6 w-6"
                                        onClick={() =>
                                            setForwardContextCount(
                                                (p) => p + 1
                                            )
                                        }
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>

                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={handleReset}
                                >
                                    Làm lại
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                        setShowAnswer(
                                            !showAnswer
                                        )
                                    }
                                >
                                    {showAnswer
                                        ? "Ẩn đáp án"
                                        : "Hiện đáp án"}
                                </Button>
                            </div>

                            {showAnswer ? (
                                <div className="bg-muted p-4 rounded-md text-foreground whitespace-pre-wrap text-base text-start font-mono">
                                    {getTextToLearn()}
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2 bg-muted p-4 rounded-md min-h-[100px] items-center justify-center">
                                    {currentText
                                        .split(/\s+/)
                                        .filter(Boolean)
                                        .map((_, i) => (
                                            <span
                                                key={i}
                                                className="w-5 h-1 bg-gray-400 rounded-full"
                                            ></span>
                                        ))}
                                </div>
                            )}
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <form
                    className="space-y-4 my-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCheck();
                    }}
                >
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={(e) =>
                            setInput(e.target.value)
                        }
                        placeholder="Nhập văn bản vào đây..."
                        className="w-full min-h-[120px] text-base p-4 rounded-md border border-input bg-background resize-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        autoComplete="off"
                        rows={4}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={!input}
                    >
                        Kiểm tra
                    </Button>
                </form>

                {result && (
                    <div className="mt-4 p-4 bg-muted rounded-md space-y-3 border">
                        <h3 className="text-lg font-semibold text-center">
                            Kết quả
                        </h3>
                        <div className="flex items-center justify-center gap-2">
                            <p
                                className={`text-2xl font-bold ${
                                    isPass
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {result.percentage}%
                            </p>
                            <span
                                className={`font-bold text-xl ${
                                    isPass
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {isPass
                                    ? "Đạt"
                                    : "Chưa đạt"}
                            </span>
                        </div>
                        <div className="bg-background p-3 rounded-md whitespace-pre-wrap text-base font-mono leading-relaxed border">
                            {result.resultWords.map(
                                (item, index) => (
                                    <span
                                        key={index}
                                        className={
                                            item.isCorrect
                                                ? "text-green-600"
                                                : "text-red-600 font-bold underline"
                                        }
                                    >
                                        {item.word}{" "}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                )}

                <AlertDialogFooter className="mt-4">
                    <AlertDialogCancel>
                        Đóng
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default LearnDialog;

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
import { useEffect, useRef, useState } from "react";

interface LearnDialogProps {
    isOpen: boolean;
    onClose: () => void;
    currentText: string;
}

export const LearnDialog = ({
    isOpen,
    onClose,
    currentText,
}: LearnDialogProps) => {
    const [input, setInput] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Reset state when dialog opens with new text
    useEffect(() => {
        if (isOpen) {
            setShowAnswer(false);
            setInput("");
            setTimeout(() => {
                textareaRef.current?.focus();
            }, 100);
        }
    }, [isOpen, currentText]);

    const wordCount = currentText.split(/\s+/).length;

    const handleReset = () => {
        setInput("");
        textareaRef.current?.focus();
    };

    useEffect(() => {
        // reset when hit ctrl + enter
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

    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent className="max-w-4xl w-[95vw] md:w-[80vw] max-h-[90vh] overflow-y-auto">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl">
                        Luyện tập
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        <p className="text-lg mb-2">
                            Hãy gõ đoạn văn cho nhớ (
                            {wordCount} từ):
                        </p>

                        {showAnswer ? (
                            <div className="bg-muted p-4 rounded-md text-foreground whitespace-pre-wrap text-base text-start">
                                {currentText}
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-2 bg-muted p-4 rounded-md min-h-[100px]">
                                {currentText
                                    .split(/\s+/)
                                    .map((_, i) => (
                                        <span
                                            key={i}
                                            className="w-4 md:w-6 h-1 bg-gray-400 rounded-full"
                                        ></span>
                                    ))}
                            </div>
                        )}

                        <div className="mt-2 text-right">
                            <Button
                                className="mr-2"
                                variant="destructive"
                                size="sm"
                                onClick={handleReset}
                            >
                                Reset
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
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <form className="space-y-4 my-4">
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
                </form>

                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Đóng
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default LearnDialog;

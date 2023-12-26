import { useEffect, useRef } from "react";

const TextArea = ({
  val,
  setVal,
  isLearning,
  placeholder,
}: {
  val: string;
  setVal: (e: any) => void;
  isLearning: boolean;
  placeholder?: string;
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (e: any) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [val]);

  return (
    <div className="text-neutral-200 p-2 w-full rounded flex flex-col space-y-2 text-center">
      {/* <span>Input text</span> */}
      <textarea
        className="px-5 py-4 leading-7 tracking-wider bg-zinc-200 min-h-[400px] text-gray-700 active:outline-none focus:outline-none rounded resize-none"
        placeholder={
          placeholder
            ? placeholder
            : "Nhập đoạn văn mà bạn muốn học thuộc! (Chỉ nên nhập từng đoạn một đừng nhập cả câu éo học nổi đâu)"
        }
        value={val}
        onChange={handleChange}
        rows={2}
        ref={textAreaRef}
        disabled={isLearning}
      ></textarea>
    </div>
  );
};
export default TextArea;

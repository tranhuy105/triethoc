import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { cn, compareStringsAndOutputPercentage } from "@/lib/utils";

interface messageType {
  sentBy: "USER" | "BOT";
  text?: string;
  img?: string;
}

const Bot = ({ val }: { val: string[] }) => {
  const [messages, setMessages] = useState<messageType[]>([
    {
      sentBy: "BOT",
      text: "Chào chú",
    },
    {
      sentBy: "BOT",
      text: "Đã sẵn sàng chiến đấu chưa? Nếu rồi hãy gõ phím bất kì để bắt đầu",
    },
  ]);

  const [ready, setReady] = useState(false);
  const [dapan, setDapan] = useState<string[]>(val);
  const [review, setReview] = useState<string[]>([]);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);

  const { handleSubmit, register, resetField } = useForm<FieldValues>(
    {
      defaultValues: {
        data: "",
      },
    }
  );

  const addMessage = (data: string, from: "USER" | "BOT") => {
    setMessages((cur) => [
      ...cur,
      {
        text: data,
        sentBy: from,
      },
    ]);
  };

  const addImage = (im: string, from: "USER" | "BOT") => {
    setMessages((cur) => [
      ...cur,
      {
        img: im,
        sentBy: from,
      },
    ]);
  };

  const hint = (data: string) => {
    if (data.length < 10) {
      return data.slice(0, 5);
    } else if (data.length > 20) {
      return data.slice(0, 20);
    } else {
      return data.slice(0, 10);
    }
  };

  const requestForBotResponse = (data: string) => {
    if (dapan.length) {
      const { percentage } = compareStringsAndOutputPercentage(
        dapan[0],
        data
      );

      if (percentage > 80) {
        setDapan((dapan) => dapan.filter((dap) => dap !== dapan[0]));
        if (dapan[1]) {
          addMessage(
            `Cũng mạnh, trả lời đúng ${percentage}% rồi đấy, tiếp câu sau đi`,
            "BOT"
          );
          addMessage(
            `Gợi ý: câu sau bắt đầu với ${hint(dapan[1])}...`,
            "BOT"
          );
        } else if (!dapan[1] && review[0]) {
          addMessage(
            "Bạn trả lời đúng rồi đấy, giờ ta sẽ tiến vào phần luyện tập nhé",
            "BOT"
          );
          addMessage(
            `Ở đây bạn sẽ được luyện tập những câu mà mình đã sai, hãy bắt đầu với câu đầu tiên nhé, gợi ý: câu trả lời bắt đầu bằng \"${hint(
              review[0]
            )}...\"`,
            "BOT"
          );
        } else if (!dapan[1] && !review[0]) {
          addMessage(
            'Có vẻ cũng hòm hòm rồi đó, có thể nhập "reset" để học lại',
            "BOT"
          );
        }
      } else {
        addImage("/akito.jpg", "BOT");
        addMessage(
          `bạn vừa trả lời là \"${data}\" nhưng mà sai rồi, đáp án đúng phải là: \"${dapan[0]}\", đọc qua một lượt đi rồi thử lại nhé`,
          "BOT"
        );

        setReview((cur) => [...cur, dapan[0]]);
      }
    }

    if (review.length && !dapan.length) {
      const { percentage } = compareStringsAndOutputPercentage(
        review[0],
        data
      );

      if (percentage > 80) {
        setReview((review) => review.slice(1));
        if (review[1]) {
          addMessage(
            `Cũng mạnh, trả lời đúng ${percentage}% rồi đấy, cùng ôn tập tiếp nhé`,
            "BOT"
          );
          addMessage(
            `Gợi ý: câu sau bắt đầu với ${hint(review[1])}...`,
            "BOT"
          );
        } else if (!review[1]) {
          addMessage(
            'Ôn tập xong hết rồi đó, nếu vẫn chưa chắc thì có thể nhập "reset" để học lại',
            "BOT"
          );
        }
      } else {
        addImage("/akito.jpg", "BOT");
        addMessage(
          `bạn vừa trả lời là \"${data}\" nhưng mà sai rồi, đáp án đúng phải là: \"${review[0]}\", xem qua lại một lần đi rồi thử lại nhé`,
          "BOT"
        );
        setReview((cur) => [...cur, review[0]]);
      }
    }

    if (!dapan.length && !review.length) {
      addMessage('Hãy nhập "reset" để có thể chơi lại', "BOT");
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (message) => {
    const { data } = message;

    if (data === "reset") {
      resetField("data");
      addMessage(data, "USER");
      setDapan(val);
      setReview([]);
      setReady(false);
      addMessage(
        "Bạn vừa chọn học lại, gõ phím bất kì nếu đã sẵn sàng để tiến vào câu hỏi đầu tiên",
        "BOT"
      );
      return;
    }

    setMessages((cur: messageType[]) => [
      ...cur,
      { text: data, sentBy: "USER" },
    ]);

    if (!ready) {
      addMessage(
        `Vậy bắt đầu với câu hỏi đầu tiên nhé, nó sẽ bắt đầu bằng \"${hint(
          dapan[0]
        )}...\"`,
        "BOT"
      );
      setReady(true);
    }

    resetField("data");
    if (ready) {
      requestForBotResponse(data);
    }
  };

  return (
    <div className="px-3 h-[calc(100vh-64px)] w-full md:w-[65%] flex flex-col items-center justify-center pb-4">
      {/* TIN NHAN */}
      <div className="overflow-y-auto bg-black my-4 rounded-3xl text-secondary text-md h-[calc(100vh*80/100)] md:h-[calc(100vh*70/100)] w-full py-2 shadow-lg shadow-black">
        {messages.map((mess: messageType, index) => (
          <Message
            key={index}
            message={mess.text}
            img={mess.img}
            sentBy={mess.sentBy}
          />
        ))}
        <div ref={ref} />
      </div>

      {/* FORM INPUT NGUOI DUNG */}
      <form
        className="flex items-center gap-1 justify-center text-xl w-full md:h-14"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <input
          type="text"
          id="data"
          placeholder="Soạn tin nhắn của bạn"
          className={cn(
            `focus:outline-none h-full text-xl px-4 py-2 rounded-lg bg-primary text-muted-foreground font-bold w-full placeholder:text-muted-foreground/20`
          )}
          {...register("data", { required: true })}
        />
        <Button
          type="submit"
          variant="default"
          className={cn(
            " h-full text-lg text-secondary font-bold bg-sky-500 hover:bg-sky-600 rounded-xl"
          )}
        >
          Gửi
        </Button>
      </form>
    </div>
  );
};
export default Bot;

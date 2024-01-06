import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  cn,
  compareStringsAndOutputPercentage,
  splitString,
} from "@/lib/utils";

interface messageType {
  sentBy: "USER" | "BOT";
  text?: string;
  img?: string;
}

const Bot = ({ val }: { val: string }) => {
  const [messages, setMessages] = useState<messageType[]>([
    {
      sentBy: "BOT",
      img: "/akitomafuyu.jpg",
    },
    {
      sentBy: "BOT",
      text: "Đã sẵn sàng chiến đấu chưa? Nếu rồi hãy gõ phím bất kì để bắt đầu",
    },
  ]);

  const dapangoc = splitString(val);

  const [ready, setReady] = useState(false);
  const [dapan, setDapan] = useState<string[]>(dapangoc);
  const [review, setReview] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // SOUND
  useEffect(() => {
    const audio = new Audio("bg.mp3");
    audio.volume = 0.7;
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const type = new Audio("se/type.mp3");
    type.volume = 0.6;
    type.loop = true;
    if (isTyping) {
      type.play();
    }
    return () => {
      type.pause();
      type.currentTime = 0;
    };
  }, [isTyping]);

  //

  const ref = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (messages.length) {
  //     ref.current?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "end",
  //     });
  //   }
  // }, [messages.length]);

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
        new Audio("se/perfect.mp3").play();
        addImage("/funnyakito.jpg", "BOT");
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
            "Đã trả lời hết một lượt rồi đó, giờ sẽ tiến vào phần luyện tập nhé!",
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
        new Audio("se/fart.mp3").play();
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
        new Audio("se/perfect.mp3").play();
        addImage("/funnyakito.jpg", "BOT");
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
        new Audio("se/fart.mp3").play();
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

    if (data.toLowerCase() === "reset") {
      resetField("data");
      addMessage(data, "USER");
      setDapan(dapangoc);
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

    if (data === "check" || data === "Check") {
      resetField("data");
      addMessage(val, "BOT");
      return;
    }

    if (!ready) {
      new Audio("se/letgo.mp3").play();
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
    <div className="px-3 h-[calc(100vh-80px)] md:w-[90%] w-full flex flex-col items-center justify-center pb-4">
      {/* TIN NHAN */}
      <div
        className={cn(
          "overflow-y-auto bg-black my-4 rounded-3xl text-secondary text-md h-[calc(100vh-64px-64px)] w-full py-2 shadow-md shadow-black",
          {
            "overflow-y-auto": isTyping,
          }
        )}
      >
        {messages.map((mess: messageType, index) => (
          <Message
            key={index}
            message={mess.text}
            img={mess.img}
            sentBy={mess.sentBy}
            setIsTyping={setIsTyping}
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
          // disabled={isTyping}
          autoFocus
        />
        <Button
          type="submit"
          disabled={isTyping}
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

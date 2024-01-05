import { cn } from "@/lib/utils";
import { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import Typewriter from "./Typewriter";

interface MessageProps {
  sentBy: "BOT" | "USER";
  message?: string;
  img?: string;
}

const Message: FC<MessageProps> = ({ message, sentBy, img }) => {
  const container = cn(
    "flex gap-3 p-4 py-3 max-w-[80%]",
    sentBy === "USER" && "justify-end ml-auto"
  );

  const body = cn(
    "flex flex-col gap-1 pt-1",
    sentBy === "USER" && "items-end"
  );

  const mess = cn(
    "text-base w-fit overflow-hidden rounded-3xl px-4 py-3",
    sentBy === "USER" ? "bg-sky-500" : "bg-zinc-800 text-secondary",
    img !== undefined
      ? "w-[calc(100vw*1/2)] xl:w-[calc(100vw*1/4)] h-[calc(100vh*1/3)] relative rounded-lg"
      : ""
  );

  return (
    <div className={container}>
      <div
        className={cn("flex items-end", {
          "order-2": sentBy === "USER",
        })}
      >
        <Avatar className="w-8 h-8 md:w-12 md:h-12">
          <AvatarImage
            src={sentBy === "USER" ? "user.jpg" : `akitoes.jpg`}
          />
        </Avatar>
      </div>
      <div className={body}>
        <div
          className={cn(
            "flex items-center gap-1 text-xs text-secondary/50",
            {
              "mr-2": sentBy === "USER",
              "ml-2": sentBy === "BOT",
            }
          )}
        >
          {sentBy === "USER" ? "BẠN" : "akitoes 😱"}
        </div>

        <div className={mess}>
          {img !== undefined ? (
            <Image
              src={img}
              alt="akitofunly"
              fill
              className="object-cover"
            />
          ) : (
            // message &&
            // (sentBy === "BOT" ? (
            //   <Typewriter text={message} delay={10} />
            // ) : (
            //   message
            // ))
            message
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;

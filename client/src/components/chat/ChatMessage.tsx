import { useRef, useEffect } from "react";
import classes from "./ChatMessage.module.css";

type ChatMessageProps = {
  avatarUrl: any;
  user: string;
  message: string;
  time: string;
};

const ChatMessage: React.FC<ChatMessageProps> = (props) => {
  const lastMessageRef = useRef<HTMLLIElement>(null);
  const msgClass =
    props.user === "Joyse" || props.user === "Andre" ? "left" : "right";

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  return (
    <li
      className={`${classes.container} ${classes[msgClass]}`}
      ref={lastMessageRef}
    >
      <div className={classes.user}>
        <img
          src={props.avatarUrl}
          alt={props.user}
          className={classes.avatar}
        />
        <span className={classes.name}>{props.user}</span>
      </div>
      <div className={`${classes.message}`}>{props.message}</div>
      <div className={classes.time}>
        <span>{props.time}</span>
      </div>
    </li>
  );
};

export default ChatMessage;

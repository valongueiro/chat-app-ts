import { useContext } from "react";
import { MessagesContext } from "../../context/messages-context";
import Button from "../ui/Button";
import ChatMessage from "./ChatMessage";
import MessageForm from "./MessageForm";
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";
import AvatarAndre from "../../assets/Andre.png";
import AvatarJoyse from "../../assets/Joyse.png";
import AvatarSam from "../../assets/Sam.png";
import AvatarRussell from "../../assets/Russell.png";
import classes from "./Chat.module.css";

const Chat: React.FC = (props) => {
  const messagesCtx = useContext(MessagesContext);

  const getAvatar = (user: string) => {
    switch (user) {
      case "Andre":
        return AvatarAndre;
      case "Joyse":
        return AvatarJoyse;
      case "Sam":
        return AvatarSam;
      case "Russell":
        return AvatarRussell;
    }
  };

  const getTime = () => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    return time;
  };

  return (
    <div>
      <h2 className={classes.title}>LGTM Channel</h2>
      <div className={classes.chat}>
        <div className={classes["chat-header"]}>
          <Button
            type="text"
            label="Read More"
            icon={<FaArrowAltCircleUp />}
            onButtonClick={messagesCtx.fetchMoreMessages}
          ></Button>
        </div>
        <div className={classes["chat-panel"]}>
          <ul>
            {messagesCtx.messages.map((message) => {
              const avatar = getAvatar(message.user);
              const time = getTime();

              return (
                <ChatMessage
                  key={message.id}
                  avatarUrl={avatar}
                  user={message.user}
                  message={message.text}
                  time={time}
                />
              );
            })}
          </ul>
        </div>
        <div className={classes["chat-footer"]}>
          <Button
            type="text"
            label="Read More"
            icon={<FaArrowCircleDown />}
            onButtonClick={messagesCtx.fetchMoreMessages}
          ></Button>
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default Chat;

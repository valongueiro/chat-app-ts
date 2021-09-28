import { useRef, useContext, useEffect } from "react";
import { MessagesContext } from "../../context/messages-context";
import { useMutation } from "@apollo/client";
import { POST_MESSAGE_QUERY } from "../../queries/queries";
import Button from "../ui/Button";
import { FaPaperPlane } from "react-icons/fa";
import classes from "./MessageForm.module.css";

const MessageForm: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesCtx = useContext(MessagesContext);
  const currentUser = messagesCtx.getCurrentUser();
  const [postMessage] = useMutation(POST_MESSAGE_QUERY);

  useEffect(() => {
    textareaRef.current?.focus();
  }, [currentUser]);

  const submitHandler = () => {
    const enteredMessage = textareaRef.current!.value.trim();

    if (enteredMessage.length === 0) return;

    postMessage({
      variables: { user: messagesCtx.user, text: enteredMessage },
    });

    textareaRef.current!.value = "";
    textareaRef.current?.focus();
  };

  return (
    <form className={classes.form}>
      <textarea
        ref={textareaRef}
        className={classes.textarea}
        placeholder={`Type your message here, ${currentUser}`}
      ></textarea>
      <Button
        label="Send Message"
        icon={<FaPaperPlane />}
        onButtonClick={submitHandler}
      />
    </form>
  );
};

export default MessageForm;

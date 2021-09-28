import { useState, useRef, useContext } from "react";
import { MessagesContext } from "../../context/messages-context";
import { useMutation } from "@apollo/client";
import { POST_MESSAGE_QUERY } from "../../queries/queries";
import { chooseChannelText } from "../../data/dummy-messages";
import classes from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const [user, setUser] = useState("Joyse");
  const channelsListRef = useRef<HTMLUListElement>(null);
  const messagesCtx = useContext(MessagesContext);
  const [postMessage] = useMutation(POST_MESSAGE_QUERY);

  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <label className={classes.title} htmlFor="choose-user">
          1. Choose Your User
        </label>
        <select
          value={user}
          className={classes.select}
          id="choose-user"
          onChange={(event) => {
            event.preventDefault();
            const selectedUser = event.target.value;

            setUser(selectedUser);
            messagesCtx.changeUser(selectedUser);
          }}
        >
          <option value="Joyse">Joyse</option>
          <option value="Sam">Sam</option>
          <option value="Russell">Russell</option>
        </select>
      </div>

      <div>
        <p className={classes.title}>2. Choose Your Channel</p>
        <ul
          ref={channelsListRef}
          className={classes.channels}
          onClick={(event) => {
            postMessage({
              variables: { user: "Andre", text: chooseChannelText },
            });
          }}
        >
          <li id="1">General Channel</li>
          <li id="2">Technology Channel</li>
          <li id="3">LGTM Channel</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

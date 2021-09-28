import React, { useState } from "react";
import { useSubscription, useMutation } from "@apollo/client";
import { GET_MESSAGES_QUERY, POST_MESSAGE_QUERY } from "../queries/queries";
import { Message } from "../models/message";
import Loader from "../components/ui/Loader";
import { moreMessagesText } from "../data/dummy-messages";

type MessagesContextType = {
  messages: Message[];
  user: string;
  fetchMoreMessages: () => void;
  changeUser: (user: string) => void;
  getCurrentUser: () => void;
};

export const MessagesContext = React.createContext<MessagesContextType>({
  messages: [],
  user: "Joyse",
  fetchMoreMessages() {},
  changeUser(user: string) {},
  getCurrentUser() {},
});

const MessagesContextProvider: React.FC = (props) => {
  const { data, loading, error } = useSubscription(GET_MESSAGES_QUERY);
  const [postMessage] = useMutation(POST_MESSAGE_QUERY);
  const [user, setUser] = useState("Joyse");

  if (loading) return <Loader />;
  if (error) return <pre>{error.message}</pre>;

  const fetchMoreMessagesHandler = () => {
    postMessage({
      variables: { user: "Andre", text: moreMessagesText },
    });
  };

  const changeUserHandler = (user: string) => {
    setUser(user);
  };

  const getUserHandler = () => {
    return user;
  };

  const contextValue: MessagesContextType = {
    messages: data.messages,
    user: user,
    fetchMoreMessages: fetchMoreMessagesHandler,
    changeUser: changeUserHandler,
    getCurrentUser: getUserHandler,
  };

  return (
    <MessagesContext.Provider value={contextValue}>
      {props.children}
    </MessagesContext.Provider>
  );
};

export default MessagesContextProvider;

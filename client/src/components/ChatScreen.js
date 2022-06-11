import React from "react";
import { useParams } from "react-router-dom";

const ChatScreen = () => {
  const { id, name } = useParams();
  return (
    <div>
      {id} {name}
    </div>
  );
};

export default ChatScreen;

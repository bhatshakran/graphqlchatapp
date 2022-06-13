import { useMutation, useQuery } from "@apollo/client";
import {
  AppBar,
  Avatar,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_MSGS } from "../graphql/queries.js";
import MessageCard from "./MessageCard.js";
import SendIcon from "@mui/icons-material/Send";
import { SEND_MSG } from "../graphql/mutations.js";

const ChatScreen = () => {
  const { id, name } = useParams();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const { data, loading, error } = useQuery(GET_MSGS, {
    variables: {
      receiverId: +id,
    },
    onCompleted(data) {
      setMessages(data.messagesByUser);
    },
  });

  const [sendMessage] = useMutation(SEND_MSG, {
    onCompleted(data) {
      console.log(data);
      setMessages((prevMessages) => [...prevMessages, data.createMessage]);
    },
  });

  return (
    <Box flexGrow={1}>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 0 }}>
        <Toolbar>
          <Avatar
            src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
            sx={{ width: "32px", height: "32px", mr: 2 }}
          />
          <Typography variant="h6" color="black">
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        backgroundColor="#f5f5f5"
        height="80vh"
        padding="10px"
        sx={{ overflowY: "auto" }}
      >
        {loading ? (
          <Typography variant="h6">Loading Chats</Typography>
        ) : (
          messages.map((msg) => {
            return (
              <MessageCard
                key={msg.createdAt}
                text={msg.text}
                date={msg.createdAt}
                direction={msg.receiverId == +id ? "end" : "start"}
              />
            );
          })
        )}
      </Box>
      <Stack direction="row">
        <TextField
          placeholder="Enter a message"
          variant="standard"
          fullWidth
          multiline
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
        />
        <SendIcon
          fontSize="large"
          onClick={() => {
            sendMessage({
              variables: {
                receiverId: +id,
                text,
              },
            });
          }}
        />
      </Stack>
    </Box>
  );
};

export default ChatScreen;

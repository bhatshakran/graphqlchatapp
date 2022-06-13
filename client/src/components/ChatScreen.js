import { useQuery } from "@apollo/client";
import { AppBar, Avatar, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_MSGS } from "../graphql/queries.js";
import MessageCard from "./MessageCard.js";

const ChatScreen = () => {
  const { id, name } = useParams();
  const { data, loading, error } = useQuery(GET_MSGS, {
    variables: {
      receiverId: +id,
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
          data.messagesByUser.map((msg) => {
            return (
              <MessageCard
                key={msg.id}
                text={msg.text}
                date={msg.createdAt}
                direction={msg.receiverId == +id ? "end" : "start"}
              />
            );
          })
        )}
      </Box>
      <TextField
        placeholder="Enter a message"
        variant="standard"
        fullWidth
        multiline
        rows={2}
      />
    </Box>
  );
};

export default ChatScreen;

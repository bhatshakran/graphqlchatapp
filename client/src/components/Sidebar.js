import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import UserCard from "./UserCard";

const Sidebar = () => {
  const users = [
    { id: 1, firstName: "Shaqran", lastName: "Bhat" },
    { id: 2, firstName: "Rafi", lastName: "Khan" },
    { id: 3, firstName: "Ali", lastName: "Taj" },
  ];

  return (
    <Box backgroundColor="#f7f7f7" height="100vh" width="250px" padding="10px">
      <Typography variant="h6">Chat</Typography>
      <Divider />
      {users.map((user) => {
        return <UserCard key={user.id} item={user} />;
      })}
    </Box>
  );
};

export default Sidebar;

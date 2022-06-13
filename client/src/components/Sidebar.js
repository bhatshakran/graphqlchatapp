import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import UserCard from "./UserCard";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = ({ setLoggedIn }) => {
  const users = [
    { id: 1, firstName: "Shaqran", lastName: "Bhat" },
    { id: 2, firstName: "Rafi", lastName: "Khan" },
    { id: 3, firstName: "Ali", lastName: "Taj" },
  ];

  return (
    <Box backgroundColor="#f7f7f7" height="100vh" width="250px" padding="10px">
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6">Chat</Typography>
        <LogoutIcon
          onClick={() => {
            localStorage.removeItem("jwt");
            setLoggedIn(false);
          }}
        />
      </Stack>

      <Divider />
      {users.map((user) => {
        return <UserCard key={user.id} item={user} />;
      })}
    </Box>
  );
};

export default Sidebar;

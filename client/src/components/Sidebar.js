import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import UserCard from "./UserCard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/queries";

const Sidebar = ({ setLoggedIn }) => {
  const { loading, data, error } = useQuery(GET_ALL_USERS);

  const users = [
    { id: 1, firstName: "Shaqran", lastName: "Bhat" },
    { id: 2, firstName: "Rafi", lastName: "Khan" },
    { id: 3, firstName: "Ali", lastName: "Taj" },
  ];

  if (loading) return <Typography variant="h6">Loading chats...</Typography>;
  if (data) console.log(data);
  if (error) console.log(error.message);

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

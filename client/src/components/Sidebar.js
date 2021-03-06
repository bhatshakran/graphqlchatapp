import React, { useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import UserCard from "./UserCard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/queries";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ setLoggedIn }) => {
  // const [users, setUsers] = useState([]);
  // const navigate = useNavigate();

  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  refetch();

  if (loading) return <Typography variant="h6">Loading chats...</Typography>;

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
      {data.users
        ? data.users.map((user) => {
            return <UserCard key={user.id} item={user} />;
          })
        : ""}
    </Box>
  );
};

export default Sidebar;

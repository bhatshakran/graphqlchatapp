import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";

const UserCard = ({ item: { firstName, lastName, id } }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ py: 1 }} alignItems="center">
      <Avatar
        src={`https://avatars.dicebear.com/api/initials/${firstName} ${lastName}.svg`}
        sx={{ width: "32px", height: "32px" }}
      />
      <Typography variant="subtitle2">
        {firstName} {lastName}{" "}
      </Typography>
    </Stack>
  );
};

export default UserCard;

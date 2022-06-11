import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Avatar, Typography } from "@mui/material";

const UserCard = ({ item: { firstName, lastName, id } }) => {
  const navigate = useNavigate();
  return (
    <Stack
      className="usercard"
      direction="row"
      spacing={2}
      sx={{ py: 1 }}
      alignItems="center"
      onClick={() => navigate(`/${id}/${firstName} ${lastName}`)}
    >
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

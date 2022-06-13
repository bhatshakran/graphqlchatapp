import { gql } from "@apollo/client";

export const MSG_SUB = gql`
  subscription messageAdded {
    messageAdded {
      id
      text
      receiverId
      senderId
      createdAt
    }
  }
`;

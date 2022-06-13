import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;


export const GET_MSGS = gql`
  query getMsgs($receiverId: Int!) {
    messagesByUser(receiverId: $receiverId) {
      id
      text
      receiverId
      senderId
      createdAt
    }
  }
`;

import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation createuser($details: UserSignupInput!) {
    signupUser(userinfo: $details) {
      id
      email
      firstName
      lastName
      password
    }
  }
`;


export const LOGIN_USER = gql`
  mutation SignIn($signinInfo: UserSigninInput!) {
    signinUser(signinInfo: $signinInfo) {
      token
    }
  }
`;

export const SEND_MSG = gql`
  mutation createMsg($receiverId: Int!, $text: String!) {
    createMessage(receiverId: $receiverId, text: $text) {
      id
      receiverId
      text
      senderId
      createdAt
    }
  }
`;
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

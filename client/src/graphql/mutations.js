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
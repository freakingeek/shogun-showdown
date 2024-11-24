import { gql, TypedDocumentNode } from "@apollo/client";

type LoginData = {
  loginNetwork: {
    accessToken: string;
    member: {
      name: string;
      email: string;
    };
  };
};

type LoginVariables = {
  email: string;
  password: string;
};

export const LOGIN_MUTATION: TypedDocumentNode<LoginData, LoginVariables> = gql`
  mutation Login($email: String!, $password: String!) {
    loginNetwork(input: { usernameOrEmail: $email, password: $password }) {
      accessToken
      member {
        name
        email
      }
    }
  }
`;

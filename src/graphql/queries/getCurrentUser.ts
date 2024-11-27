import { gql, TypedDocumentNode } from "@apollo/client/index.js";

type Image = {
  url: string;
};

type GetCurrentUserData = {
  authMember: {
    name: string;
    email: string;
    profilePicture: Image | null;
  };
};

type GetCurrentUserVariables = {
  limit: number;
  offset: number;
};

export const GET_CURRENT_USER_QUERY: TypedDocumentNode<GetCurrentUserData, GetCurrentUserVariables> = gql`
  query GetCurrentUser {
    authMember {
      name
      email
      profilePicture {
        ... on Image {
          url
        }
      }
    }
  }
`;

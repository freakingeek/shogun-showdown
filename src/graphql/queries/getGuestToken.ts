import { gql, TypedDocumentNode } from "@apollo/client";

type GetGuestTokenData = {
  tokens: {
    accessToken: string;
    role: {
      name: string;
    };
  };
};

type GetGuestTokenVariables = {
  domain: string;
};

export const GET_GUEST_TOKEN_QUERY: TypedDocumentNode<GetGuestTokenData, GetGuestTokenVariables> = gql`
  query getGuestTokenQuery($domain: String) {
    tokens(networkDomain: $domain) {
      accessToken
      role {
        name
      }
    }
  }
`;

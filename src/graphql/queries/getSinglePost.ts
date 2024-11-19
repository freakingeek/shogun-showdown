import { gql, TypedDocumentNode } from "@apollo/client";

type Field = {
  key: string;
  value: string;
};

type GetSinglePostData = {
  post: {
    title: string;
    createdAt: string;
    reactionsCount: number;
    reactions: {
      reacted: boolean;
    };
    owner: {
      member: {
        name: string;
      };
    };
    fields: Field[];
  };
};

type GetSinglePostVariables = {
  id: string;
};

export const GET_SINGLE_POST_QUERY: TypedDocumentNode<GetSinglePostData, GetSinglePostVariables> = gql`
  query GetSinglePost($id: ID!) {
    post(id: $id) {
      title
      createdAt
      fields {
        key
        value
      }
      reactionsCount
      reactions {
        reacted
      }
      owner {
        member {
          name
        }
      }
    }
  }
`;

import { gql, TypedDocumentNode } from "@apollo/client";

type RemoveReactionData = {
  removeReaction: {
    status: "succeeded" | "failed";
  };
};

type RemoveReactionVariables = {
  postId: string;
  reaction: "heart";
};

export const REMOVE_REACTION_MUTATION: TypedDocumentNode<RemoveReactionData, RemoveReactionVariables> = gql`
  mutation RemoveReaction($reaction: String!, $postId: ID!) {
    removeReaction(reaction: $reaction, postId: $postId) {
      status
    }
  }
`;

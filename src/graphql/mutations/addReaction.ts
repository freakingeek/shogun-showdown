import { gql, TypedDocumentNode } from "@apollo/client/index.js";

type AddReactionData = {
  addReaction: {
    status: "succeeded" | "failed";
  };
};

type AddReactionVariables = {
  postId: string;
  input: {
    reaction: "heart";
    overrideSingleChoiceReactions: boolean;
  };
};

export const ADD_REACTION_MUTATION: TypedDocumentNode<AddReactionData, AddReactionVariables> = gql`
  mutation AddReaction($input: AddReactionInput!, $postId: ID!) {
    addReaction(input: $input, postId: $postId) {
      status
    }
  }
`;

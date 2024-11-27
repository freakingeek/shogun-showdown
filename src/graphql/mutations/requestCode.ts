import { gql, TypedDocumentNode } from "@apollo/client/index.js";

type RequestCodeData = {
  requestGlobalTokenCode: {
    status: "succeeded" | "failed";
  };
};

type RequestCodeVariables = {
  input: {
    email: string;
  };
};

export const REQUEST_CODE_MUTATION: TypedDocumentNode<RequestCodeData, RequestCodeVariables> = gql`
  mutation AuthFormRequestGlobalTokenCodeMutation($input: RequestGlobalTokenInput!) {
    requestGlobalTokenCode(input: $input) {
      status
    }
  }
`;

import { gql, TypedDocumentNode } from "@apollo/client";

type RequestCodeData = {
  requestGlobalTokenCode: {
    status: "succeeded";
  };
};

type RequestCodeVariables = {
  input: {
    email: string;
  };
};

export const REQUEST_CODE_MUTATION: TypedDocumentNode<
  RequestCodeData,
  RequestCodeVariables
> = gql`
  mutation AuthFormRequestGlobalTokenCodeMutation(
    $input: RequestGlobalTokenInput!
  ) {
    requestGlobalTokenCode(input: $input) {
      status
    }
  }
`;

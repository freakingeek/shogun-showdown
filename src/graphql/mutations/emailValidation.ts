import { gql, TypedDocumentNode } from "@apollo/client/index.js";

type EmailValidationData = {
  validateEmail: {
    valid: boolean;
  };
};

type EmailValidationVariables = {
  input: {
    email: string;
  };
};

export const EMAIL_VALIDATION_MUTATION: TypedDocumentNode<
  EmailValidationData,
  EmailValidationVariables
> = gql`
  mutation AuthFormValidateEmailMutation($input: RequestGlobalTokenInput!) {
    validateEmail(input: $input) {
      valid
    }
  }
`;

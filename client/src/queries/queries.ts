import { gql } from "@apollo/client";

export const GET_MESSAGES_QUERY = gql`
  subscription {
    messages {
      id
      user
      text
    }
  }
`;

export const POST_MESSAGE_QUERY = gql`
  mutation ($user: String!, $text: String!) {
    postMessage(user: $user, text: $text)
  }
`;

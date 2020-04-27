/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      ID
      chatID
      content
      author
      createdAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage($input: UpdateMessageInput!) {
    updateMessage(input: $input) {
      ID
      chatID
      content
      author
      createdAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage($input: DeleteMessageInput!) {
    deleteMessage(input: $input) {
      ID
      chatID
      content
      author
      createdAt
    }
  }
`;
export const createChat = /* GraphQL */ `
  mutation CreateChat($input: CreateChatInput!) {
    createChat(input: $input) {
      ID
      chatID
      title
      username
      createdAt
      lastUpdatedAt
    }
  }
`;
export const updateChat = /* GraphQL */ `
  mutation UpdateChat($input: UpdateChatInput!) {
    updateChat(input: $input) {
      ID
      chatID
      title
      username
      createdAt
      lastUpdatedAt
    }
  }
`;
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat($input: DeleteChatInput!) {
    deleteChat(input: $input) {
      ID
      chatID
      title
      username
      createdAt
      lastUpdatedAt
    }
  }
`;

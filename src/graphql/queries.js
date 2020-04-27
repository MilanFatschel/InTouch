/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($ID: String!) {
    getMessage(ID: $ID) {
      ID
      chatID
      content
      author
      createdAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: TableMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ID
        chatID
        content
        author
        createdAt
      }
      nextToken
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($ID: String!) {
    getChat(ID: $ID) {
      ID
      chatID
      title
      username
      createdAt
      lastUpdatedAt
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: TableChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ID
        chatID
        title
        username
        createdAt
        lastUpdatedAt
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($ID: String!) {
    getMessage(ID: $ID) {
      ID
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
        content
        author
        createdAt
      }
      nextToken
    }
  }
`;

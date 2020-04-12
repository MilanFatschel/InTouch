/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $ID: String
    $content: String
    $author: String
    $createdAt: String
  ) {
    onCreateMessage(
      ID: $ID
      content: $content
      author: $author
      createdAt: $createdAt
    ) {
      ID
      content
      author
      createdAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $ID: String
    $content: String
    $author: String
    $createdAt: String
  ) {
    onUpdateMessage(
      ID: $ID
      content: $content
      author: $author
      createdAt: $createdAt
    ) {
      ID
      content
      author
      createdAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $ID: String
    $content: String
    $author: String
    $createdAt: String
  ) {
    onDeleteMessage(
      ID: $ID
      content: $content
      author: $author
      createdAt: $createdAt
    ) {
      ID
      content
      author
      createdAt
    }
  }
`;

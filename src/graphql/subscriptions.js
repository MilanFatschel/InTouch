/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($chatID: String) {
    onCreateMessage(chatID: $chatID) {
      ID
      chatID
      content
      author
      createdAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($ID: String) {
    onUpdateMessage(ID: $ID) {
      ID
      chatID
      content
      author
      createdAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($ID: String) {
    onDeleteMessage(ID: $ID) {
      ID
      chatID
      content
      author
      createdAt
    }
  }
`;

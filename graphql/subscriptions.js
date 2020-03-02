/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($owner: String!) {
    onCreateGroup(owner: $owner) {
      id
      name
      messages {
        items {
          id
          content
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($owner: String!) {
    onUpdateGroup(owner: $owner) {
      id
      name
      messages {
        items {
          id
          content
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($owner: String!) {
    onDeleteGroup(owner: $owner) {
      id
      name
      messages {
        items {
          id
          content
          createdAt
        }
        nextToken
      }
      createdAt
      owner
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      content
      group {
        id
        name
        messages {
          nextToken
        }
        createdAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
        }
        nextToken
      }
      createdAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      content
      group {
        id
        name
        messages {
          nextToken
        }
        createdAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
        }
        nextToken
      }
      createdAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      content
      group {
        id
        name
        messages {
          nextToken
        }
        createdAt
        owner
      }
      comments {
        items {
          id
          content
          createdAt
        }
        nextToken
      }
      createdAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      message {
        id
        content
        group {
          id
          name
          createdAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
      }
      createdAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      content
      message {
        id
        content
        group {
          id
          name
          createdAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
      }
      createdAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      content
      message {
        id
        content
        group {
          id
          name
          createdAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
      }
      createdAt
    }
  }
`;

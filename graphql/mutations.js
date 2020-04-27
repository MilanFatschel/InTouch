/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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

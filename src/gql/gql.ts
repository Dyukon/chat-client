/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "query GetMessages {\n  messages(params: {}) {\n    id\n    text\n    createdAt\n    senderId\n    senderName\n  }\n}\n\nmutation SendMessage($text: String!) {\n  createMessage(params: {text: $text}) {\n    id\n    text\n  }\n}\n\nsubscription OnMessageAdded {\n  messageAdded {\n    id\n    text\n    createdAt\n    senderId\n    senderName\n  }\n}": types.GetMessagesDocument,
    "mutation signupUser($name: String!, $email: String!, $password: String!) {\n  createUser(params: {name: $name, email: $email, password: $password}) {\n    accessToken\n    user {\n      id\n      email\n      name\n    }\n  }\n}\n\nmutation loginUser($email: String!, $password: String!) {\n  loginUser(params: {email: $email, password: $password}) {\n    accessToken\n    user {\n      id\n      email\n      name\n    }\n  }\n}": types.SignupUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMessages {\n  messages(params: {}) {\n    id\n    text\n    createdAt\n    senderId\n    senderName\n  }\n}\n\nmutation SendMessage($text: String!) {\n  createMessage(params: {text: $text}) {\n    id\n    text\n  }\n}\n\nsubscription OnMessageAdded {\n  messageAdded {\n    id\n    text\n    createdAt\n    senderId\n    senderName\n  }\n}"): (typeof documents)["query GetMessages {\n  messages(params: {}) {\n    id\n    text\n    createdAt\n    senderId\n    senderName\n  }\n}\n\nmutation SendMessage($text: String!) {\n  createMessage(params: {text: $text}) {\n    id\n    text\n  }\n}\n\nsubscription OnMessageAdded {\n  messageAdded {\n    id\n    text\n    createdAt\n    senderId\n    senderName\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation signupUser($name: String!, $email: String!, $password: String!) {\n  createUser(params: {name: $name, email: $email, password: $password}) {\n    accessToken\n    user {\n      id\n      email\n      name\n    }\n  }\n}\n\nmutation loginUser($email: String!, $password: String!) {\n  loginUser(params: {email: $email, password: $password}) {\n    accessToken\n    user {\n      id\n      email\n      name\n    }\n  }\n}"): (typeof documents)["mutation signupUser($name: String!, $email: String!, $password: String!) {\n  createUser(params: {name: $name, email: $email, password: $password}) {\n    accessToken\n    user {\n      id\n      email\n      name\n    }\n  }\n}\n\nmutation loginUser($email: String!, $password: String!) {\n  loginUser(params: {email: $email, password: $password}) {\n    accessToken\n    user {\n      id\n      email\n      name\n    }\n  }\n}"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
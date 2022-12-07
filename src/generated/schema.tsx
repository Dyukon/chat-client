import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateEventInput = {
  message?: InputMaybe<Scalars['String']>;
  receiverId?: InputMaybe<Scalars['String']>;
  type: EventType;
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserResult = {
  __typename?: 'CreateUserResult';
  accessToken: Scalars['String'];
  user: User;
};

export type Event = {
  __typename?: 'Event';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  receiverId?: Maybe<Scalars['String']>;
  senderId: Scalars['String'];
  senderName: Scalars['String'];
  type: EventType;
};

export enum EventType {
  Join = 'JOIN',
  Leave = 'LEAVE',
  Message = 'MESSAGE'
}

export type EventsInput = {
  finishDate?: InputMaybe<Scalars['DateTime']>;
  receiverId?: InputMaybe<Scalars['String']>;
  senderId?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<EventType>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserResult = {
  __typename?: 'LoginUserResult';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  createUser: CreateUserResult;
  loginUser: LoginUserResult;
};


export type MutationCreateEventArgs = {
  params: CreateEventInput;
};


export type MutationCreateUserArgs = {
  params: CreateUserInput;
};


export type MutationLoginUserArgs = {
  params: LoginUserInput;
};

export type Query = {
  __typename?: 'Query';
  events: Array<Event>;
  receivers: Array<User>;
  users: Array<User>;
};


export type QueryEventsArgs = {
  params: EventsInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  eventAdded: Event;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateJoinEventMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateJoinEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string } };

export type CreateLeaveEventMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateLeaveEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string } };

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, type: EventType, createdAt: any, senderId: string, senderName: string, message?: string | null }> };

export type OnEventAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnEventAddedSubscription = { __typename?: 'Subscription', eventAdded: { __typename?: 'Event', id: string, type: EventType, createdAt: any, senderId: string, senderName: string, message?: string | null } };

export type SendMessageMutationVariables = Exact<{
  message: Scalars['String'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, type: EventType, message?: string | null } };

export type SignupUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserResult', accessToken: string, user: { __typename?: 'User', id: string, email: string, name: string } } };

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginUserResult', accessToken: string, user: { __typename?: 'User', id: string, email: string, name: string } } };


export const CreateJoinEventDocument = gql`
    mutation CreateJoinEvent {
  createEvent(params: {type: JOIN}) {
    id
  }
}
    `;
export type CreateJoinEventMutationFn = Apollo.MutationFunction<CreateJoinEventMutation, CreateJoinEventMutationVariables>;

/**
 * __useCreateJoinEventMutation__
 *
 * To run a mutation, you first call `useCreateJoinEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJoinEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJoinEventMutation, { data, loading, error }] = useCreateJoinEventMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateJoinEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateJoinEventMutation, CreateJoinEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJoinEventMutation, CreateJoinEventMutationVariables>(CreateJoinEventDocument, options);
      }
export type CreateJoinEventMutationHookResult = ReturnType<typeof useCreateJoinEventMutation>;
export type CreateJoinEventMutationResult = Apollo.MutationResult<CreateJoinEventMutation>;
export type CreateJoinEventMutationOptions = Apollo.BaseMutationOptions<CreateJoinEventMutation, CreateJoinEventMutationVariables>;
export const CreateLeaveEventDocument = gql`
    mutation CreateLeaveEvent {
  createEvent(params: {type: LEAVE}) {
    id
  }
}
    `;
export type CreateLeaveEventMutationFn = Apollo.MutationFunction<CreateLeaveEventMutation, CreateLeaveEventMutationVariables>;

/**
 * __useCreateLeaveEventMutation__
 *
 * To run a mutation, you first call `useCreateLeaveEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeaveEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeaveEventMutation, { data, loading, error }] = useCreateLeaveEventMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateLeaveEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateLeaveEventMutation, CreateLeaveEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLeaveEventMutation, CreateLeaveEventMutationVariables>(CreateLeaveEventDocument, options);
      }
export type CreateLeaveEventMutationHookResult = ReturnType<typeof useCreateLeaveEventMutation>;
export type CreateLeaveEventMutationResult = Apollo.MutationResult<CreateLeaveEventMutation>;
export type CreateLeaveEventMutationOptions = Apollo.BaseMutationOptions<CreateLeaveEventMutation, CreateLeaveEventMutationVariables>;
export const GetEventsDocument = gql`
    query GetEvents {
  events(params: {type: MESSAGE}) {
    id
    type
    createdAt
    senderId
    senderName
    message
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const OnEventAddedDocument = gql`
    subscription OnEventAdded {
  eventAdded {
    id
    type
    createdAt
    senderId
    senderName
    message
  }
}
    `;

/**
 * __useOnEventAddedSubscription__
 *
 * To run a query within a React component, call `useOnEventAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnEventAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnEventAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnEventAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnEventAddedSubscription, OnEventAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnEventAddedSubscription, OnEventAddedSubscriptionVariables>(OnEventAddedDocument, options);
      }
export type OnEventAddedSubscriptionHookResult = ReturnType<typeof useOnEventAddedSubscription>;
export type OnEventAddedSubscriptionResult = Apollo.SubscriptionResult<OnEventAddedSubscription>;
export const SendMessageDocument = gql`
    mutation SendMessage($message: String!) {
  createEvent(params: {type: MESSAGE, message: $message}) {
    id
    type
    message
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const SignupUserDocument = gql`
    mutation signupUser($name: String!, $email: String!, $password: String!) {
  createUser(params: {name: $name, email: $email, password: $password}) {
    accessToken
    user {
      id
      email
      name
    }
  }
}
    `;
export type SignupUserMutationFn = Apollo.MutationFunction<SignupUserMutation, SignupUserMutationVariables>;

/**
 * __useSignupUserMutation__
 *
 * To run a mutation, you first call `useSignupUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupUserMutation, { data, loading, error }] = useSignupUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupUserMutation(baseOptions?: Apollo.MutationHookOptions<SignupUserMutation, SignupUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupUserMutation, SignupUserMutationVariables>(SignupUserDocument, options);
      }
export type SignupUserMutationHookResult = ReturnType<typeof useSignupUserMutation>;
export type SignupUserMutationResult = Apollo.MutationResult<SignupUserMutation>;
export type SignupUserMutationOptions = Apollo.BaseMutationOptions<SignupUserMutation, SignupUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation loginUser($email: String!, $password: String!) {
  loginUser(params: {email: $email, password: $password}) {
    accessToken
    user {
      id
      email
      name
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
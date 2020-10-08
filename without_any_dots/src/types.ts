export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Absence = {
  __typename?: 'Absence';
  absenceReasonId: Scalars['ID'];
  changeUser?: Maybe<Scalars['String']>;
  createUser: Scalars['String'];
  daySegment: Scalars['Int'];
  duration?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  staffMemberId?: Maybe<Scalars['ID']>;
};

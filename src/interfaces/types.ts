import React from 'react';
import { JSX } from 'react';

export type MyProps = {
  message?: string;
};

export type Photo = {
  farm: number;
  height_l: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  url_l: string;
  width_l: number;
};

export type MyState = {
  text: string;
  heading: string;
  config: null | SuccessFetchAnswer | 'bad';
};

export type ResultBlockState = null | SuccessFetchAnswer | 'bad' | undefined;

export type ResultsProps = {
  state: {
    text: string;
    heading: string;
    config: ResultBlockState;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLocalStorage: void;
  render: JSX.Element;
};

export type Photos = {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Photo[];
};

export type SuccessFetchAnswer = {
  photos: Photos;
  stat: 'ok';
};

export type CardsProps = {
  context: object;
  headingText: string;
  photos: Photo[];
  props: { text: ''; props: object; context: object; refs: object; updater: object };
  refs: object;
  state: null;
  updater: object;
  _reactInternalInstance: object;
  _reactInternals: Node;
};

export type FallBack = {
  children: object;
  fallback: object;
};

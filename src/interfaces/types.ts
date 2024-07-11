import React from 'react';
import { JSX } from 'react';

export type MyProps = {
  message?: string;
};

export type SuccessFetchAnswer = {
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

export type ResultBlockState = {
  results: null | SuccessFetchAnswer | 'bad';
};

export type ResultsProps = {
  state: {
    text: string;
    heading: string;
    config: null | SuccessFetchAnswer | 'bad';
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLocalStorage: void;
  render: JSX.Element;
};

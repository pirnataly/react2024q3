import React, { ReactNode } from 'react';

export type MyProps = {
  buttonName: string;
  text: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLocalStorage: () => void;
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

export type ResultBlockState = object;

export type ResultsProps = {
  textProp: string;
  result: null | SuccessFetchAnswer | 'bad';
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

export type ErrorBoundaryState = { hasError: boolean };

export type ErrorBoundaryProps = { children?: ReactNode };

export type CardProps = {
  photos: Photo[];
  headingText: string | null;
};

import React, { ChangeEvent, ReactNode } from 'react';

export type SearchProps = {
  buttonName: string;
  textProp: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLocalStorage: (e: React.FormEvent) => void;
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

export type ResultsProps = {
  textProp: string;
  result: null | SuccessFetchAnswer | 'bad' | undefined;
  isPhotoLoading: boolean;
  page: number;
  changePage: (p: number) => void;
  showModal: (arg: boolean) => void;
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
  showModal: (arg: boolean) => void;
};

export type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonProps = {
  onClick: (e: React.FormEvent) => void;
  children: string;
};

export type ResultsType = {
  photos: [] | Photo[];
  headingText: string | null;
  total: number;
  showModal: (arg: boolean) => void;
};

export type PaginationType = {
  pages: number;
  page: number;
  changePage: (p: number) => void;
};

export type NumberPair = [number, number];

export type ModalProps = {
  children?: ReactNode | undefined;
  visible: boolean;
  setVisible: (arg: boolean) => void;
};

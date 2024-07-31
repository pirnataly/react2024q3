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
  setSearchParams: (arg: URLSearchParamsInit) => void;
  params: URLSearchParams;
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

export type ParamKeyValuePair = [string, string];

export type URLSearchParamsInit =
  | string
  | ParamKeyValuePair[]
  | Record<string, string | string[]>
  | URLSearchParams;

export type ErrorBoundaryState = { hasError: boolean };

export type ErrorBoundaryProps = { children?: ReactNode };

export type CardProps = {
  photos: Photo[];
  headingText: string | null;
  setSearchParams: (arg: URLSearchParamsInit) => void;
  params: URLSearchParams;
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
  setSearchParams: (arg: URLSearchParamsInit) => void;
  params: URLSearchParams;
  showModal: (arg: boolean) => void;
};

export type PaginationType = {
  pages: number;
  page: number;
  changePage: (p: number) => void;
};

export type AppFetchArgs = number[];

export type IdType = string | null;

export type ModalFetchArg = IdType[];

export type FetchArgs = AppFetchArgs | ModalFetchArg;

export type AppFunction = (limit: number, page: number) => Promise<void>;

export type ModalFunction = (id: string) => Promise<void>;

export type FunctionTypes = AppFunction | ModalFunction;

export type ReturningTypes1 = (callback: AppFunction) => [AppFunction, boolean, string];
export type ReturningTypes2 = (callback: ModalFunction) => [ModalFunction, boolean, string];

export type ReturningTypes = ReturningTypes1 | ReturningTypes2;

export type ModalProps = {
  visible: boolean;
  setVisible: (arg: boolean) => void;
  setSearchParams: (arg: URLSearchParamsInit) => void;
  id: string | null;
  params: URLSearchParams;
};

export type ModalComponent = Pick<ModalProps, 'id'>;

export type PhotoByIdType = {
  dates: {
    taken: string;
  };
  owner: {
    realname: string;
  };
  id: string;
  secret: string;
  server: string;
  title: { _content: string };
  views: string;
};

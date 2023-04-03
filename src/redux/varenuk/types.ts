export type Varenuk = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface VarenukSliceState {
  items: Varenuk[];
  status: Status;
  pagination: number;
}

export const initialState: VarenukSliceState = {
  items: [],
  pagination: 0,
  status: Status.LOADING,
};

export type SearchVarenukParams = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: string;
};

export type dataTest = {
  data: Varenuk[];
  pagination: number;
};

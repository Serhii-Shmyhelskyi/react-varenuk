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
}

export const initialState: VarenukSliceState = {
  items: [],
  status: Status.LOADING,
};

export type SearchVarenukParams = {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: string;
};

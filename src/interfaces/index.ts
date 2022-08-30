import { TPost, TDto, UpdateInterface } from "@types"

export interface IPropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface IGetPost {
  id: number
}

export type AxiosRequestConfig = {
  data: {
    params: TDto;
  };
};

export interface FetchStatus {
  success: boolean;
  fetching: boolean;
  message: string;
  dto?: TDto
}

export interface TArray<T> extends FetchStatus {
  result: T[];
}

export interface TObject<T> extends FetchStatus {
  result: T | null;
}

export interface IGet extends TDto {
  id?: number
};

export interface IUpdatePost extends UpdateInterface<TPost> { }

export interface IUpdateParams {
  request: IUpdatePost,
  config: Partial<AxiosRequestConfig>
}



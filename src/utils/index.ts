import axios from "axios";

import { TDto } from "@types"

const URL = process.env.REACT_APP_URL || "";

export const requestInstance = axios.create({
  baseURL: URL,
})

export const underscoreObject = (params: TDto) => {
  const { page: _page, limit: _limit, sort: _sort, order: _order } = { ...params };
  const _params = Object.assign({}, { _page, _limit, _sort, _order })

  return _params
}

export const pendingReducer = <S extends { [k: string]: any }>(key: string) =>
  (state: S, action: any) => {
    state[key].success = false;
    state[key].fetching = true;
    state[key].message = '';
  };

export const fulfilledReducer = <S extends { [k: string]: any }>(key: string) =>
  (state: S, action: any) => {
    state[key].success = true;
    state[key].fetching = true;
    state[key].result = action.payload;
  };

export const rejectedReducer = <S extends { [k: string]: any }>(key: string) =>
  (state: S, action: any) => {
    state[key].success = false;
    state[key].fetching = false;
    state[key].message = action.meta.requestStatus;
  };

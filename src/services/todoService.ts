import { requestInstance } from "@utils";

import { TTodo } from "@types";

import { IGet } from "@interfaces";

const getTodos = ({ ...params }: IGet) =>
  requestInstance
    .get<TTodo[]>(`todos`, { params });

export const todoService = { getTodos };

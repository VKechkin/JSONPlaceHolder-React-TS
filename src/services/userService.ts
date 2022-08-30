import { requestInstance } from "@utils";

import { TUser } from "@types";

import { IGet } from "@interfaces";

const getUsers = ({ ...params }: IGet) =>
  requestInstance
    .get<TUser[]>(`users`, { params });

export const userService = { getUsers };

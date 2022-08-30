import { requestInstance } from "@utils";

import { TComment } from "@types";

import { IGet } from "@interfaces";

const getComments = ({ ...params }: IGet) =>
  requestInstance
    .get<TComment[]>(`comments`, { params });

const getCommentsPost = ({ ...params }: IGet) => {
  const { id } = params;

  return requestInstance
    .get<TComment[]>(`/posts/${id}/comments`)
}

export const commentService = { getComments, getCommentsPost };

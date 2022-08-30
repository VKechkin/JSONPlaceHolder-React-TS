import { requestInstance, underscoreObject } from "@utils";

import { TPhoto } from "@types";

import { IGet } from "@interfaces";

const getPhotos = ({ ...params }: IGet) =>
  requestInstance
    .get<TPhoto[]>(`photos`, { params: underscoreObject({ ...params }) });


const getAlbumPhotos = ({ ...params }: IGet) => {
  const { id } = params;

  return requestInstance
    .get<TPhoto[]>(`/albums/${id}/photos`)
}

export const photoService = { getPhotos, getAlbumPhotos };

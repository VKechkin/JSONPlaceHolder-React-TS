import { requestInstance, underscoreObject } from "@utils";

import { TAlbum } from "@types";

import { IGet } from "@interfaces";

const getAlbums = ({ ...params }: IGet) =>
  requestInstance
    .get<TAlbum[]>(`albums`, { params: underscoreObject({ ...params }) });


export const albumService = { getAlbums };

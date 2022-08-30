import React, { useState } from "react";

import { photoService } from "@services/photoService";

import { useAppDispatch } from "@hooks"
import useAppNavigation from "@hooks/useAppNavigation"

import { openAlbum } from "@store/photoSlice"


const { getAlbumPhotos } = photoService;

const useAlbumPhotos = (id?: number) => {
  const dispatch = useAppDispatch();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const { goAlbums } = useAppNavigation();

  const handleOpenAlbum = () => {
    goAlbums(id)
    getAlbumPhotos({ id })
      .then((res) => {
        setSuccess(true);
        dispatch(openAlbum(res.data));
      })
      .catch((error) => setMessage(error.message));
  };

  return { handleOpenAlbum, success, message }
}

export default useAlbumPhotos;

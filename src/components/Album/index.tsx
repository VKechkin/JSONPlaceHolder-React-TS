import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";

import { useAppSelector } from "@hooks";

import { TAlbum } from "@types";

import useAlbumPhotos from "@hooks/useAlbumPhotos";

import "./style.scss";

interface IProps {
  children?: React.ReactNode;
  album: TAlbum;
}

const Album: React.FC<IProps> = ({ album }) => {
  const users = useAppSelector((state) => state.user.list);
  const photos = useAppSelector((state) => state.photo.list);

  const photo = photos.result.find((photo) => photo.albumId === album.id);
  const user = users.result.find((user) => user.id === album.userId);

  const { id, title } = album;

  const { handleOpenAlbum } = useAlbumPhotos(id);

  return (
    <Box
      maxH="auto"
      border="1px"
      borderColor="#437276"
      cursor="pointer"
      w="248px"
      h="348px"
      className="album-box"
      onClick={handleOpenAlbum}
    >
      <Image src={photo?.url} alt={"Photo description"} />
      <Box
        maxH="auto"
        alignItems={"center"}
        justifyContent="center"
        padding={2}
      >
        <Text fontSize="15px" lineHeight="18px" fontWeight="semibold" h="60px">
          {title}{" "}
        </Text>
        <Text fontSize="14px" lineHeight="13px" as="i">
          User name: {user?.name}
        </Text>
      </Box>
    </Box>
  );
};

export { Album };

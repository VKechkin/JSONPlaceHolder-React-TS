import React, { useEffect, useMemo } from "react";

import { Container, Text, Flex } from "@chakra-ui/react";

import { Album, AlbumLoader, Paginator } from "@components";

import ActionButton from "@primitive/ActionButton";

import { useAppSelector, useAppDispatch } from "@hooks";
import useAppNavigation from "@hooks/useAppNavigation";

import { getAlbumThunk, updatePage } from "@store/albumSlice";
import { getPhotoThunk } from "@store/photoSlice";
import { getUserThunk } from "@store/userSlice";

const AlbumsPage = () => {
  const albums = useAppSelector((state) => state.album.list);
  const fetchPhotosStatus = useAppSelector(
    (state) => state.photo.list.fetching
  );
  const fetchUsersStatus = useAppSelector((state) => state.user.list.fetching);
  const { limit }: any = albums?.dto;

  const { goMain } = useAppNavigation();
  const dispatch = useAppDispatch();

  const getLoader = useMemo(() => {
    let content: JSX.Element[] = [];
    for (let i = 0; i < limit; i++) {
      content.push(<AlbumLoader key={`key-${i}`} />);
    }
    return content;
  }, [limit]);

  useEffect(() => {
    if (albums.dto != null) {
      dispatch(
        getAlbumThunk({ page: albums.dto.page, limit: albums.dto.limit })
      );
    }
  }, [albums.dto]);

  useEffect(() => {
    if (!fetchUsersStatus) {
      dispatch(getUserThunk({}));
    }
    if (!fetchPhotosStatus) {
      dispatch(getPhotoThunk({}));
    }
  }, []);

  return (
    <div className="container">
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      <Text fontSize="lg" paddingBottom={5} paddingTop={3}>
        Albums
      </Text>
      <Paginator
        page={albums.dto?.page}
        limit={albums.dto?.limit}
        total={100}
        action={updatePage}
      />
      <Container maxW="1024px">
        <Flex
          flexWrap="wrap"
          paddingBottom={10}
          gap="10px"
          justifyContent="center"
        >
          {albums.result.length
            ? albums.result.map((album) => (
                <Album key={`key-${album.id}`} album={album} />
              ))
            : getLoader}
        </Flex>
      </Container>
    </div>
  );
};

export { AlbumsPage };

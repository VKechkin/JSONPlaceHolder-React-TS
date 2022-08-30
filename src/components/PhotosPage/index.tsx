import React, { useEffect, useMemo } from "react";

import { Container, Text, Flex } from "@chakra-ui/react";

import { Photo, Paginator, PhotoLoader } from "@components";

import ActionButton from "@primitive/ActionButton";

import { useAppSelector, useAppDispatch } from "@hooks";
import useAppNavigation from "@hooks/useAppNavigation";

import { getPhotoThunk, updatePage } from "@store/photoSlice";

const PhotosPage = () => {
  const photos = useAppSelector((state) => state.photo.list);
  const { goMain } = useAppNavigation();
  const dispatch = useAppDispatch();

  const { limit }: any = photos?.dto;

  const getLoader = useMemo(() => {
    let content: JSX.Element[] = [];
    for (let i = 0; i < limit; i++) {
      content.push(<PhotoLoader key={`key-${i}`} />);
    }
    return content;
  }, [limit]);

  useEffect(() => {
    if (photos.dto != null) {
      dispatch(
        getPhotoThunk({ page: photos.dto.page, limit: photos.dto.limit })
      );
    }
  }, [photos.dto]);

  return (
    <div className="container">
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      <Text fontSize="lg" paddingBottom={5} paddingTop={3}>
        Photos
      </Text>
      <Paginator
        page={photos.dto?.page}
        limit={photos.dto?.limit}
        total={5000}
        action={updatePage}
      />
      <Container maxW="1024px">
        <Flex
          flexWrap="wrap"
          paddingBottom={10}
          gap="10px"
          justifyContent="center"
        >
          {photos.result.length
            ? photos.result.map((photo) => (
                <Photo photo={photo} key={`key-${photo.id}`} />
              ))
            : getLoader}
        </Flex>
      </Container>
    </div>
  );
};

export { PhotosPage };

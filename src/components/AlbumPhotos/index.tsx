import React, { useMemo } from "react";

import { Container, Text, Flex } from "@chakra-ui/react";

import { Photo, PhotoLoader } from "@components";

import ActionButton from "@primitive/ActionButton";

import { useAppSelector } from "@hooks";
import useAppNavigation from "@hooks/useAppNavigation";

const AlbumPhotos = () => {
  const photos = useAppSelector((state) => state.photo.list);
  const { goMain } = useAppNavigation();

  const { limit }: any = photos?.dto;

  const getLoader = useMemo(() => {
    let content: JSX.Element[] = [];
    for (let i = 0; i < limit; i++) {
      content.push(<PhotoLoader key={`key-${i}`} />);
    }
    return content;
  }, [limit]);

  return (
    <div className="container">
      hello
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      <Text fontSize="lg" paddingBottom={5} paddingTop={3}>
        Album {} Photos
      </Text>
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

export { AlbumPhotos };

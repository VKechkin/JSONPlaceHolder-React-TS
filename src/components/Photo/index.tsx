import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";

import { TPhoto } from "@types";

interface IProps {
  children?: React.ReactNode;
  photo: TPhoto;
}

const Photo: React.FC<IProps> = ({ photo }) => {
  const { albumId, id, title, url, thumbnailUrl } = photo;

  const property = {
    imageUrl: thumbnailUrl,
    imageAlt: "Photo description",
  };

  return (
    <Box
      border="1px"
      h="226px"
      width="150px"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box maxH="auto" alignItems="center" justifyContent="center" padding={2}>
        <Text fontSize="13px" lineHeight="15px" h="60px">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export { Photo };

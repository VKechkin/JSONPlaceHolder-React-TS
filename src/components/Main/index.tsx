import React from "react";

import { Box, Text } from "@chakra-ui/react";

import ActionButton from "@primitive/ActionButton";

import useAppNavigation from "@hooks/useAppNavigation";

import "./style.scss";

const Main = () => {
  const { goPosts, goAlbums, goPhotos, goTodos } = useAppNavigation();

  const navItemsConfig = [
    {
      label: "Posts",
      callback: goPosts,
    },
    {
      label: "Albums",
      callback: goAlbums,
    },
    {
      label: "Photos",
      callback: goPhotos,
    },
    {
      label: "Todos",
      callback: goTodos,
    },
  ];

  return (
    <div className="container">
      <main className="main-content">
        <Text fontSize="lg">Main page</Text>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap={"wrap"}
          gap={"10px"}
        >
          {navItemsConfig.map((config) => {
            const { label, callback } = config;
            return (
              <ActionButton onClick={() => callback()} key={`key-${label}`}>
                {label}
              </ActionButton>
            );
          })}
        </Box>
      </main>
    </div>
  );
};

export { Main };

import React, { useEffect } from "react";

import { Container, SimpleGrid, Text } from "@chakra-ui/react";

import { User } from "@components";

import ActionButton from "@primitive/ActionButton";

import { useAppSelector, useAppDispatch } from "@hooks";
import useAppNavigation from "@hooks/useAppNavigation";

import { getUserThunk } from "@store/userSlice";

const UsersPage = () => {
  const users = useAppSelector((state) => state.user.list);
  const { goMain } = useAppNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!users.fetching) {
      dispatch(getUserThunk({}));
    }
  }, []);

  return (
    <div className="container">
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      <Text fontSize="lg">Users</Text>
      <Container maxW="1024px">
        <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
          {users.result.map((user) => (
            <User user={user} key={`key-${user.id}`} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export { UsersPage };

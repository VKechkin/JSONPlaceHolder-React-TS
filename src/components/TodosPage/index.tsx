import React, { useEffect } from "react";

import { Container, SimpleGrid, Text } from "@chakra-ui/react";

import { Todo } from "@components";

import ActionButton from "@primitive/ActionButton";

import { useAppSelector, useAppDispatch } from "@hooks";
import useAppNavigation from "@hooks/useAppNavigation";

import { getTodoThunk } from "@store/todoSlice";

const TodosPage = () => {
  const todos = useAppSelector((state) => state.todo.list);
  const { goMain } = useAppNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!todos.fetching) {
      dispatch(getTodoThunk({}));
    }
  }, []);

  return (
    <div className="container">
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      <Text fontSize="lg">Todos</Text>
      <Container maxW="1024px">
        <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
          {todos.result.map((todo) => (
            <Todo todo={todo} key={`key-${todo.id}`} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export { TodosPage };
